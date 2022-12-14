import type { NextPage } from "next";
import Head from "next/head";
import Sidebar from "./component/Sidebar";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Chat app</title>
        <meta name="description" content="" />
      </Head>
      <Sidebar />
    </div>
  );
};
export default Home;
