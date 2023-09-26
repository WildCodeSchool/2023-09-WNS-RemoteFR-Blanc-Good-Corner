import { useEffect, useState } from "react";
import AdCard from "./AdCard";
import styles from "@/styles/RecentAds.module.css";
import { Ad } from "@/types/ad.type";

export default function RecentAds() {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [ads, setAds] = useState<Ad[]>([]); // AdCardProps[] is the type of the ads

  /*fetch("http://localhost:3001/ads")
    .then((response) => response.json())
    .then((data) => setAds(data));
*/

  useEffect(() => {
    const fetchAds = () => {
      fetch("http://localhost:3001/ads")
        .then((response) => response.json())
        .then((data) => setAds(data));
    }

    fetchAds();
  }, []);

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