import {
  Asset,
  AssetCollection,
  AssetFields,
  AssetFile,
  AssetKey,
  createClient,
  Entry,
  EntryCollection,
  EntrySkeletonType,
  FieldItem,
  FieldsType,
} from 'contentful';

export interface AboutFields {
  about: string;
  avatar: string;
}

export interface HeroFields {
  heroUrl: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  images: (string | AssetFile)[];
}

export interface Contact {
  contactImgUrl: string;
}

const useContentful = () => {
  const client = createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
    host: import.meta.env.VITE_CONTENTFUL_HOST,
  });

  const getHero = async (): Promise<HeroFields | undefined> => {
    try {
      const entries = await client.getEntries({
        content_type: 'hero',
        select: ['fields'],
        include: 1,
      });

      const first = entries.items[0];

      const heroUrl = first.fields.hero?.fields.file.url;

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
      const imageAsset = assetsMap.get(imageRef?.sys.id);

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
        const projectFields = item.fields as unknown as Project;

        const images = projectFields.images.map((image) => assetsMap.get(image.sys.id)?.fields.file?.url || '');

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

  const getContact = async (): Promise<Contact | undefined> => {
    try {
      const entries = await client.getEntries({
        content_type: 'contact',
        select: ['fields'],
        include: 1,
      });

      const first = entries.items[0];

      const contactImgUrl = first.fields.image?.fields.file.url;

      return { contactImgUrl };
    } catch (error) {
      console.error(`Error fetching contact: ${error}`);
    }
  };

  return { getAbout, getHero, getPortfolio, getContact };
};

export default useContentful;
