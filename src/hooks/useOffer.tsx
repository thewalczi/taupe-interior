import { useEffect, useMemo, useState } from 'react';
import useContentful, { OfferFields } from './useContentful';

export const useOffer = () => {
  const { getOffer } = useContentful();
  const [offer, setOffer] = useState<OfferFields | undefined>();

  useEffect(() => {
    (async () => {
      const offerData = await getOffer();
      setOffer(offerData);
    })();
  }, []);

  const pdfLink = useMemo(() => {
    console.log(offer);
    if (!offer) return;
    return offer.file.url;
  }, [offer]);

  const openFile = () => {
    window.open(pdfLink, '_blank', 'noopener,noreferrer');
  };

  return { openFile };
};
