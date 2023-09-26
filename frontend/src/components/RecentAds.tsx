import { useState } from "react";
import AdCard from "./AdCard";
import styles from "@/styles/RecentAds.module.css";

export default function RecentAds() {
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const ads = [
    {
      title: "Table",
      picture: "/images/table.webp",
      price: 120,
      link: "/ads/table"
    },
    {
      title: "Dame Jeanne",
      picture: "/images/dame-jeanne.webp",
      price: 75,
      link: "/ads/dame-jeanne"
    },
    {
      title: "Vide poche",
      picture: "/images/vide-poche.webp",
      price: 4,
      link: "/ads/vide-poche"
    },
    {
      title: "Table",
      picture: "/images/table.webp",
      price: 120,
      link: "/ads/table"
    },
    {
      title: "Vaisselier",
      picture: "/images/vaisselier.webp",
      price: 900,
      link: "/ads/vaisselier"
    },
    {
      title: "Bougie",
      picture: "/images/bougie.webp",
      price: 2,
      link: "/ads/bougie"
    },
    {
      title: "Porte magazine",
      picture: "/images/porte-magazine.webp",
      price: 45,
      link: "/ads/porte-magazine"
    },
  ];

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
              link={ad.link}
            />
            <button className="button" onClick={() => addToTotalPrice(ad.price)}>Add price to total</button>
          </div>
        ))}
      </section>
    </>
  );
}