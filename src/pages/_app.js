import "@/styles/globals.css";
import { Nav } from "./Nav";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}
