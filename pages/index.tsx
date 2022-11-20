import type { NextPage } from "next";
import Head from "next/head";
import Sidebar from "./component/Sidebar";
import React from "react";
import { useSession } from "next-auth/react";


const Home: NextPage = () => {
  const { data: session } = useSession();
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
