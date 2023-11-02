import { useEffect, useState } from "react";
import AdCard from "./AdCard";
import styles from "@/styles/RecentAds.module.css";
import { Ad } from "@/types/ad.type";
import { useSearchParams } from 'next/navigation'
import { gql, useQuery } from "@apollo/client";

const GET_ALL_ADS = gql`
  query Ads($categoryId: Float, $search: String) {
  ads(categoryId: $categoryId, search: $search) {
      createdAt
      id
      price
      title
      description
      location
      owner
      picture
    }
  }
`;

export default function RecentAds() {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [ads, setAds] = useState<Ad[]>([]); // AdCardProps[] is the type of the ads
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("category");
  const search = searchParams.get("search") ?? "";

  const { loading, error } = useQuery(GET_ALL_ADS, {
    variables: {
      categoryId: categoryId !== "" ? parseInt(categoryId as string) : null,
      search
    },
    onCompleted: (data => {
      setAds(data.ads);
    })
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :-(</p>;

  const addToTotalPrice = (price: number) => {
    setTotalPrice(totalPrice + price)
  }

  return (
    <>
      <h2>Annonces récentes</h2>
      <p>Total price: {totalPrice} €</p>
      <section className={styles.recentAds}>
        {ads.map((ad: Ad, index: number) => (
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