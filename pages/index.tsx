import type { NextPage } from "next";
import Head from "next/head";
import Sidebar from "./component/Sidebar";
import React from "react";
import { useSession } from "next-auth/react";
const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:3000' : 'https://your_deployment.server.com';

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
