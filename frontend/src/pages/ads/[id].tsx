import { useRouter } from "next/router";

export default function AdsItemPage() {
  const router = useRouter();
  console.log(router);
  return (
    <>
      ADS Item {router.query.id}
    </>
  );
}
