import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClientProvider } from "@tanstack/react-query";
import { QUERY_CLIENT } from "../src/api";
import "../shared/fb";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import isBetween from "dayjs/plugin/isBetween";

dayjs.extend(customParseFormat);
dayjs.extend(isBetween);
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={QUERY_CLIENT}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
