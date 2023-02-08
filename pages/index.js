import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Navbar from "../components/navbar/Navbar";
// import Layout from "../components/layout";

const Home = () => {
  return (
    <header>
      <Navbar />
      {/* <h1>1</h1> */}
      <Layout />
    </header>
  );
};

export default Home;
