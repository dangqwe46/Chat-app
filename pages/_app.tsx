import "../styles/globals.css";
import type { AppProps } from "next/app";
import Login from "./login";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

//Fake comments
// function emitComment(id: number) {
//   setInterval(() => {
//     window.dispatchEvent(
//       new CustomEvent(`lesson-${id}`, {
//         detail: `Noi dung comments cua lesson ${id}`,
//       })
//     );
//   }, 2000);
// }
// emitComment(1);
// emitComment(2);
// emitComment(3);
function MyApp({
  Component,
  pageProps,
}: AppProps<{
  session: Session;
}>) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />;
    </SessionProvider>
  );
}

export default MyApp;
