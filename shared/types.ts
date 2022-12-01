export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
};

export type Coordination = {
  lat: number;
  lng: number;
};
export type RoomType =
  | "single"
  | "double"
  | "family"
  | "sea-view"
  | "park-view";
export type Room = {
  name: RoomType;
  size: number; // in m2 unit
  quantity: number;
  rate: number;
  photoList: string[];
  utilityList: Utility[];
};

export type PriceAdjust = {
  day: string,
  multiplier: number;
  roomType: RoomType;
};

export type HotelOwner = {
  name: string;
  email: string;
  phone: string;
};

export type Utility =
  | "AC"
  | "Terrace"
  | "Pool"
  | "Gym"
  | "Restaurant"
  | "Beach"
  | "Free Parking"
  | "Balcony"
  | "Garden"
  | "View"
  | "Kitchen"
  | "Whole Apartment"
  | "Spacious";

export type Hotel = {
  name: string;
  address: string;
  coordination: Coordination;
  owner: HotelOwner;
  roomList: Room[];
  houseRule: string;
  checkinTime: string;
  checkoutTime: string;
  photoList: string[];
  utilities: Utility[];
};

// const hotel: Hotel = {
//   name: "The Princess of Arena Cam Ranh Home",
//   address: "Mieu Ong",
//   coordination: { lat: 0, lng: 1 },
//   owner: {
//     name: "",
//     email: "",
//     phone: "",
//   },
//   roomList: [
//     {
//       id: "",
//       name: "double",
//       size: 1, // in m2 unit
//       quantity: 1,
//       rate: 1,
//       photoList: [],
//     },
//   ],

// };
