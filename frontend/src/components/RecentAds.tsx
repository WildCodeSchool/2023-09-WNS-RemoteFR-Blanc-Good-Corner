import { useEffect, useState } from "react";
import AdCard from "./AdCard";
import styles from "@/styles/RecentAds.module.css";
import { Ad } from "@/types/ad.type";
import axios from "axios";
import { useSearchParams } from 'next/navigation'


export default function RecentAds() {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [ads, setAds] = useState<Ad[]>([]); // AdCardProps[] is the type of the ads
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("category");
  const search = searchParams.get("search") ?? "";

  useEffect(() => {
    const fetchAds = async () => {
      const response = await axios.get<Ad[]>(`http://localhost:3001/ads?categoryId=${categoryId}&search=${search}`);
      setAds(response.data);
    }

    fetchAds();
  }, [categoryId, search]);

  const addToTotalPrice = (price: number) => {
    setTotalPrice(totalPrice + price)
  }

  return (
    <>
      <h2>Annonces récentes</h2>
      <p>Total price: {totalPrice} €</p>
      <section className={styles.recentAds}>
        {ads.map((ad, index) => (
          <div key={index}>
            <AdCard
              title={ad.title}
              picture={ad.picture}
              price={ad.price}
              link={`/ads/${ad.id}`}
            />
            <button className="button" onClick={() => addToTotalPrice(ad.price)}>Add price to total</button>
          </div>
        ))}
      </section>
    </>
  );
}