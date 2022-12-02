import dayjs from "dayjs";
import { DATE_FORMAT } from "./constants";

export const snakeToCamel = (str: string) => {
  return str
    .toLowerCase()
    .replace(/[-_][a-z]/g, (group) => " " + group.slice(1));
};

export const toTitle = (str: string) => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const multiplierToColor = (num: number) => {
  if (num < 100) {
    return "rgb(132, 204, 22)";
  }

  if (num === 100) {
    return "rgb(255, 255, 255)";
  }

  if (num > 100 && num < 200) {
    return "rgb(254, 202, 202)";
  }
  if (num >= 200 && num < 300) {
    return "rgb(252, 165, 165)";
  }
  if (num >= 300 && num < 400) {
    return "rgb(248, 113, 113)";
  }
  // if (num >= 400 && num <= 500) {
  // }

  return "rgb(239, 68, 68)";
};

const colors: string[] = [
  "#9A1663",
  "#E0144C",
  "#FF5858",
  "#FF97C1",
  "#E14D2A",
  "#FD841F",
  "#3E6D9C",
  "#001253",
];
const colorMap: Record<string, string> = {};
export const generateRandomColor = (id: string) => {
  if (colorMap[id]) {
    return colorMap[id];
  }

  const color =
    colors.length === 0
      ? "#" + Math.floor(Math.random() * 16777215).toString(16)
      : (colors.pop() as string);
  colorMap[id] = color;
  return color;
};

export const getDayList = (startDate: Date, endDate: Date): string[] => {
  const days: string[] = [];
  const start = dayjs(startDate);
  let current = start;
  const end = dayjs(endDate);
  if (!start.isValid() || !end.isValid()) {
    return [];
  }
  // include end date
  while (!current.isAfter(end, "day")) {
    days.push(dayjs(current).format(DATE_FORMAT));
    current = current.add(1, "day");
  }

  return days;
};

export const splitArrays = <T>(
  arr: Array<T>,
  spliceNumber: number
): Array<Array<T>> => {
  if (spliceNumber === 0) {
    return [];
  }
  let start = 0;
  let end = spliceNumber;
  const res: Array<Array<T>> = [];
  while (start < arr.length) {
    res.push(arr.slice(start, end));
    start = end;
    end += spliceNumber;
  }
  return res;
};

export const formatCurrency = (price: number) => {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(price);
};
