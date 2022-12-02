import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClientProvider } from "@tanstack/react-query";
import { QUERY_CLIENT } from "../src/api";
import "../shared/fb";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import isBetween from "dayjs/plugin/isBetween";
import { Provider } from "jotai";
import BookingDialog from "../components/Dialog/BookingDialog";

dayjs.extend(customParseFormat);
dayjs.extend(isBetween);
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={QUERY_CLIENT}>
      <Provider>
        <Component {...pageProps} />
        <BookingDialog />
      </Provider>
    </QueryClientProvider>
  );
}

export default MyApp;
