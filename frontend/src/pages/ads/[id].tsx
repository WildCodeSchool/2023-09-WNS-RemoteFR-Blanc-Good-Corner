import { Ad } from "@/types/ad.type";
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

  return (
    <>
      <h1>{ad.title}</h1>
      <img src={ad.picture} />
      <p>{ad.price} €</p>
    </>
  );
}
