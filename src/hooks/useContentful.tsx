import { Asset, createClient, FieldsType, UnresolvedLink } from 'contentful';

export interface AboutFields {
  about: string;
  avatar: string;
}

export type HeroFields = {
  hero: Asset;
};

export type HeroResponse = {
  heroUrl?: string;
};

export interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
}

export interface ContactFields {
  contactImgUrl: string;
}

const useContentful = () => {
  const client = createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
    host: import.meta.env.VITE_CONTENTFUL_HOST,
  });

  const getHero = async (): Promise<HeroResponse | undefined> => {
    try {
      const entries = await client.getEntries({
        content_type: 'hero',
        include: 1,
      });

      const first = entries.items[0];

      const hero = first.fields.hero as Asset;
      const heroUrl = hero.fields.file?.url as string | undefined;

      return { heroUrl };
    } catch (error) {
      console.error(`Error fetching about: ${error}`);
      return undefined;
    }
  };

  const getAbout = async (): Promise<AboutFields | undefined> => {
    try {
      const entries = await client.getEntries({
        content_type: 'about',
        select: ['fields'],
        include: 1,
      });

      const assetsMap = new Map<string, Asset>(entries.includes?.Asset?.map((asset) => [asset.sys.id, asset]));

      const first = entries.items[0];

      const about = first.fields.about;

      const imageRef = first.fields.avatar;
      const imageAsset =
        imageRef && typeof imageRef === 'object' && 'sys' in imageRef
          ? assetsMap.get((imageRef as Asset).sys.id)
          : undefined;

      const avatar = imageAsset?.fields.file?.url;

      return { about, avatar } as AboutFields;
    } catch (error) {
      console.error(`Error fetching about: ${error}`);
      return undefined;
    }
  };

  const getPortfolio = async (): Promise<Project[] | undefined> => {
    try {
      const entries = await client.getEntries({
        content_type: 'portfolio',
        select: ['fields'],
        include: 1,
      });

      const assetsMap = new Map<string, Asset>(entries.includes?.Asset?.map((asset) => [asset.sys.id, asset]));

      const portfolio = entries.items.map((item) => {
        const projectFields = item.fields as unknown as FieldsType;

        const images: string[] = projectFields.images.map(
          (image: UnresolvedLink<'Asset'>) => assetsMap.get(image.sys.id)?.fields.file?.url || '',
        );

        return {
          id: projectFields.id,
          title: projectFields.title,
          description: projectFields.description,
          images,
        };
      });

      return portfolio;
    } catch (error) {
      console.error(`Error fetching portfolio: ${error}`);
    }
  };

  const getContact = async (): Promise<ContactFields | undefined> => {
    try {
      const entries = await client.getEntries({
        content_type: 'contact',
        select: ['fields'],
        include: 1,
      });

      const first = entries.items[0];

      const contactImgUrl = (first.fields.image as Asset)?.fields.file?.url as string;

      return { contactImgUrl };
    } catch (error) {
      console.error(`Error fetching contact: ${error}`);
    }
  };

  return { getAbout, getHero, getPortfolio, getContact };
};

export default useContentful;
