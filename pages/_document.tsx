import { Html, Head, Main, NextScript } from "next/document";
import BookingDialog from "../components/Dialog/BookingDialog";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200..900&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200..900&display=swap"
        />
      </Head>
      <body>
        <Main />
        <NextScript />

        <BookingDialog />
      </body>
    </Html>
  );
}
