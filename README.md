## See deployment at

- [hotel-assignment-edfi.vercel.app](hotel-assignment-edfi.vercel.app)

- [hotel-assignment-edfi-trungnguyenhoang.vercel.app](hotel-assignment-edfi-trungnguyenhoang.vercel.app)
- [hotel-assignment-edfi-git-main-trungnguyenhoang.vercel.app](hotel-assignment-edfi-git-main-trungnguyenhoang.vercel.app)

## Local

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Routes:

There are two routes:

1. `/`: The hotel website. Present all information of the hotel including available rooms
2. `/admin`: The dashboard to update standard rate or temporarily increase price by adjusting multiplier.

## Features:

Visitor can

- Find location of the hotel by clicking the name.
- See all utilities the hotel provides.
- See promotion pictures of the hotel.
- See different types of room and their info (size, price, quantity left, photos, utilities, etc).
- Input a check in and check out date to get the total prices based on the price updated by the admin.
- Select number of guests and rooms.
- Provide name, email and phone to book room.
- See toast when successfully book room (Booking info is stored in `localStorage` with key `booking-${date}`).

Admin can

- Update standard rate of a room
- Update multiplier, a coefficient to calcuate the total price. E.g total price of a day = standard rate \* multiplier of that day
- Clear selected date. In other words, set the multiplier of date back to 1
- Clear all multipliers

Note that the price change will be stored in `localStorage` with key `{roomType}-{day}`. The price change will be updated in Firebase and thus sync with client

## Tech stack:

- Front-end: NextJS + DaisyUI + TailwindCSS
- Back-end: Firebase (All rooms and price adjustments are stored and retrieved from Firestore)
