import {Html, Head, Main, NextScript} from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta property="og:title" content="Portolio"/>
                <meta property="og:description" content="Portolio"/>
            </Head>
            <body className="antialiased">
            <Main/>
            <NextScript/>
            </body>
        </Html>
    );
}
