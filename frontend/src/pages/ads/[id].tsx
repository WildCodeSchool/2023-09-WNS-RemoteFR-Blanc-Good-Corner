import { Ad } from "@/types/ad.type";
import { gql, useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const GET_ONE_AD = gql`
  query Ads($getAdId: Float!) {
    getAd(id: $getAdId) {
      createdAt
      description
      id
      location
      owner
      picture
      price
      title
      category {
        id
        name
      }
    }
  }
`;

const DELETE_AD = gql`
  mutation DeleteAd($deleteAdId: Float!) {
    deleteAd(id: $deleteAdId)
  }
`;

export default function AdsItemPage() {
  const router = useRouter();
  const { id } = router.query;
  const [ad, setAd] = useState<Ad>();
  const [getAd, { loading, error }] = useLazyQuery(GET_ONE_AD, {
    variables: {
      getAdId: Number(id)
    },
    onCompleted: (data: {getAd: Ad}) => {
      setAd(data.getAd)
    },
  });
  const [deleteAdRequest] = useMutation(DELETE_AD);

  useEffect(() => {
    if (id) {
      getAd();
    }
  }, [id])

  console.log(ad);
  if (loading || !ad) return <p>Loading...</p>;
  if (error) return <p>Error :-(</p>;

  const deleteAd = async () => {
    deleteAdRequest({
      variables: {
        deleteAdId: ad.id
      }
    })
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
