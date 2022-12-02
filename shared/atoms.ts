import { atom } from "jotai";
import { BookingInfo } from "./types";

type RoomInfo = Omit<BookingInfo, "name" | "phone" | "email">;

export const roomAtom = atom<RoomInfo>({
  guests: 1,
  checkin: "",
  checkout: "",
  totalPrice: 0,
  rooms: 1
});

export const readRoomAtom = atom((get) => get(roomAtom));
