import "../styles/globals.css";
import type { AppProps } from "next/app";
import Login from "./login";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import { useSession, signIn, signOut } from "next-auth/react";

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  session: Session;
}>) {
  // const loggedInUser = false;
  // if (!loggedInUser) return <Login />;
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />;
    </SessionProvider>
  );
}

export default MyApp;
