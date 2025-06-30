import Layout from "@/components/ui/layout";
import { ScrollProvider } from "@/contexts/ScrollContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {

  return <>
    <ScrollProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ScrollProvider>
  </>
}
