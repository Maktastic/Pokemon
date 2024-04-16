import "@/styles/globals.css";
import Default from "@/layouts/Default";

export default function App({ Component, pageProps }) {
  return (
      <Default>
        <Component {...pageProps} />
      </Default>
  )
}
