import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import RecentAds from "@/components/RecentAds";
import isAuth from "@/components/secure/isAuth";

function Home() {
  return (
    <>
      <RecentAds />
    </>
  );
}

export default isAuth(Home);