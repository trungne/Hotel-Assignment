import { ReactNode } from "react";
import Cutlery from "../components/Icons/Cutlery";
import Eye from "../components/Icons/Eye";
import Flower from "../components/Icons/Flower";
import House from "../components/Icons/House";
import HouseWithMeasures from "../components/Icons/HouseWithMeasures";
import Parking from "../components/Icons/Parking";
import SnowFlake from "../components/Icons/SnowFlake";
import Stove from "../components/Icons/Stove";
import SwimmingPool from "../components/Icons/SwimmingPool";
import TableUnderUmbrella from "../components/Icons/TableUnderUmbrella";
import Umbrella from "../components/Icons/Umbrella";
import Weight from "../components/Icons/Weight";
import { Utility } from "./types";

const DEFAULT_COLOR = "white";
const DEFAULT_SIZE = "w-4 lg:w-6 ";
export const UtilityNode: Record<Utility, ReactNode> = {
  AC: <SnowFlake className={DEFAULT_SIZE} fill={DEFAULT_COLOR} />,
  Beach: <Umbrella className={DEFAULT_SIZE} fill={DEFAULT_COLOR} />,
  Gym: <Weight className={DEFAULT_SIZE} fill={DEFAULT_COLOR} />,
  Pool: <SwimmingPool className={DEFAULT_SIZE} fill={DEFAULT_COLOR} />,
  Restaurant: <Cutlery className={DEFAULT_SIZE} fill={DEFAULT_COLOR} />,
  Terrace: <TableUnderUmbrella className={DEFAULT_SIZE} fill={DEFAULT_COLOR} />,
  "Free Parking": <Parking className={DEFAULT_SIZE} fill={DEFAULT_COLOR} />,
  Balcony: <TableUnderUmbrella className={DEFAULT_SIZE} fill={DEFAULT_COLOR} />,
  Garden: <Flower className={DEFAULT_SIZE} fill={DEFAULT_COLOR} />,
  View: <Eye className={DEFAULT_SIZE} fill={DEFAULT_COLOR} />,
  Kitchen: <Stove className={DEFAULT_SIZE} fill={DEFAULT_COLOR} />,
  "Whole Apartment": <House className={DEFAULT_SIZE} fill={DEFAULT_COLOR} />,
  Spacious: <HouseWithMeasures className={DEFAULT_SIZE} fill={DEFAULT_COLOR} />,
};