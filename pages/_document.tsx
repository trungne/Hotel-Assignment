import { Html, Head, Main, NextScript } from "next/document";
import BookingDialog from "../components/Dialog/BookingDialog";
import { Provider } from "jotai";
import { WarningDialog } from "../components/Dialog/WarningDialog";
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
      <Provider>
        <body>
          <Main />
          <NextScript />

          <BookingDialog />
          <WarningDialog />
        </body>
      </Provider>
    </Html>
  );
}
