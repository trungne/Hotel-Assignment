import { QueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Product } from "../../shared/types";
export const QUERY_CLIENT = new QueryClient();

const BASE_URL = "https://dummyjson.com/";
const getUrl = (url: string): string => {
  return BASE_URL + url;
};

export type GetProductsResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};
export const getProducts = async () => {
  const response = await axios.get<GetProductsResponse>(getUrl("products"));
  return response.data;
};
