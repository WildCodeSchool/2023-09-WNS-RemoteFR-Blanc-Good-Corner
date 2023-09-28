import { Ad } from "@/types/ad.type";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function AdsItemPage() {
  const router = useRouter();
  const { id } = router.query;
  const [ad, setAd] = useState<Ad | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3001/ads/${id}`)
        .then((response) => response.json())
        .then((data) => setAd(data));
    }
  }, [id]);

  if (!ad) {
    return <div>Loading...</div>;
  }

  const deleteAd = async () => {
    await axios.delete(`http://localhost:3001/ads/${ad.id}`)
    router.push('/');
  }

  return (
    <>
      <h2 className="ad-details-title">{ad.title}</h2>
      <section className="ad-details">
        <div className="ad-details-image-container">
          <img className="ad-details-image" src={ad.picture} />
        </div>
        <div className="ad-details-info">
          <div className="ad-details-price">{ad.price} €</div>
          <div className="ad-details-description">
            {ad.description}
          </div>
          <hr className="separator" />
          <div className="ad-details-owner">
            Annoncée publiée par <b>{ad.owner}</b> {ad.createdAt}.
          </div>
        </div>
        <button className="button" onClick={deleteAd}>Supprimer</button>
      </section>
    </>
  );
}
