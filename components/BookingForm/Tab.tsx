import {
  DATE_FORMAT,
  getDayList,
  PriceAdjust,
  Room,
  snakeToCamel,
  splitArrays,
  toTitle,
} from "../../shared";
import dayjs from "dayjs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useState } from "react";
import Carousel from "./Carousel";
import { UtilityNode } from "../../shared/UtilityNode";
import { query, where, getDocs } from "firebase/firestore";
import TotalPrice from "./TotalPrice";
import { priceCollection } from "../../shared/fb";
import Loading from "../Icons/Loading";
import { BOOKING_DIALOG_ID } from "../Dialog/BookingDialog";

import { useAtom } from "jotai";
import { roomAtom } from "../../shared/atoms";
import { WARNING_DIALOG_ID } from "../Dialog/WarningDialog";

type TabElementProps = {
  onClick: (tabIndex: number) => void;
  tabIndex: number;
  currentTabIndex: number;
  tabTitle: string;
};
const TabElement = ({
  onClick,
  tabIndex,
  currentTabIndex,
  tabTitle,
}: TabElementProps) => {
  return (
    <a
      key={tabIndex + tabTitle}
      onClick={() => onClick(tabIndex)}
      className={`tab ${
        currentTabIndex === tabIndex
          ? "tab-active text-slate-600"
          : "text-white"
      }`}
    >
      {tabTitle}
    </a>
  );
};

type TabContentProps = {
  tabIndex: number;
  currentTabIndex: number;
  room: Room;
};
export const TabContent = ({
  tabIndex,
  currentTabIndex,
  room,
}: TabContentProps) => {
  // atoms
  const [_, setRoomInfo] = useAtom(roomAtom);

  // states
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>();
  const [totalPrice, setTotalPrice] = useState<number | null>(null);
  const [isLoadingPrice, setIsLoadingPrice] = useState(false);

  const canOpenDialog =
    startDate && endDate && totalPrice !== null && room.quantity > 0;

  const getPrice = async (start: Date, end: Date) => {
    setIsLoadingPrice(true);
    setTotalPrice(null);
    const days = getDayList(start, end);
    let price = 0;
    let standardRateDays = 0;
    const arrays = splitArrays<string>(days, 10); // can only query 10 items at a time. Firebase sucks

    for (const array of arrays) {
      const q = query(priceCollection, where("day", "in", array));
      const docs = await getDocs(q);
      const prices = docs.docs.filter(
        (doc) => doc.data().roomType === room.name
      );

      prices.forEach((doc) => {
        const priceAdjust = doc.data() as PriceAdjust;

        price += room.rate * priceAdjust.multiplier;
      });
      standardRateDays += array.length - prices.length; // calculate days without multiplier => for this we will use standard rate
    }

    const totalPrice = price + standardRateDays * room.rate;
    setIsLoadingPrice(false);
    setTotalPrice(totalPrice);
    setRoomInfo((prev) => ({ ...prev, totalPrice }));
  };

  const onDatesChange = (dates: (Date | null)[]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    if (!!start && !!end) {
      getPrice(start, end);
      setRoomInfo((prev) => ({
        ...prev,
        checkin: dayjs(start).format(DATE_FORMAT),
        checkout: dayjs(end).format(DATE_FORMAT),
      }));
    }
  };

  if (tabIndex !== currentTabIndex) {
    return null;
  }
  return (
    <div className="flex gap-4 flex-col items-center max-w-full md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto p-4 min-h-[650px]">
      <div className="flex gap-6 justify-center">
        {room.utilityList.map((utility, idx) => {
          return (
            <div
              key={idx}
              className="tooltip basis-6 md:basis-8"
              data-tip={utility}
            >
              {UtilityNode[utility]}
            </div>
          );
        })}
      </div>
      <div
        key={room.name}
        id={`tab-content-${room.name}`}
        className="flex flex-col-reverse md:flex-row grow gap-8 items-center"
      >
        <div className="rounded-tr-lg rounded-bl-lg flex-1">
          <Carousel imageList={room.photoList} />
        </div>
        <div className="flex flex-col gap-5 flex-1">
          <div className="flex">
            <h1>{toTitle(snakeToCamel(room.name))} Room</h1>{" "}
            <div className="ml-1 flex items-center text-base">
              {" "}
              - {room.size} &#13217;{" "}
            </div>
          </div>

          <hr></hr>
          <span
            style={{
              display: "-webkit-box",
              lineClamp: 4,
            }}
            className="clamp-text"
          >
            {/* Description */}
            {room.description}
          </span>
          <hr></hr>
          <div className="flex items-center justify-between">
            <div className="relative">
              <strong>Price</strong>:{" "}
              {totalPrice && startDate && endDate && (
                <TotalPrice
                  stayDuration={getDayList(startDate, endDate).length}
                  price={totalPrice}
                />
              )}
              {isLoadingPrice && (
                <div className="absolute top-[-5px] left-[60px]">
                  <Loading />
                </div>
              )}
            </div>
            <div>
              <strong>Quantity</strong>:{" "}
              <span className="text-green-900">{room.quantity} </span>
              {room.quantity === 1 ? "room" : "rooms"}
            </div>
          </div>

          <hr></hr>
          <div className="flex justify-between">
            <span className="min-w-[80px] text-center">
              Check
              <br /> in
            </span>
            <div className="w-full">
              <DatePicker
                wrapperClassName="!flex justify-center items-center 	 text-center bg-slate-700 rounded-lg"
                calendarClassName=""
                minDate={new Date()}
                maxDate={dayjs().add(30, "day").toDate()}
                disabled={room.quantity === 0}
                className={`bg-transparent ${
                  room.quantity === 0
                    ? "text-gray-700 cursor-not-allowed"
                    : "text-white"
                }`}
                selected={startDate}
                startDate={startDate}
                endDate={endDate}
                onChange={onDatesChange}
                selectsRange
              />
            </div>

            <div data-tip="within 30 days" className="tooltip tooltip-left">
              <button className="min-w-[80px] text-center">Check out</button>
            </div>
          </div>
          <hr></hr>

          <div className="flex justify-between">
            <div className="form-control">
              <span>Guests</span>
              <div className="input-group">
                <select
                  onChange={(e) => {
                    if (!e.currentTarget.value) {
                      return;
                    }

                    const guests = Number.parseInt(e.currentTarget.value);
                    setRoomInfo((prev) => {
                      return { ...prev, guests };
                    });
                  }}
                  disabled={room.quantity === 0}
                  defaultValue={1}
                  className="select select-bordered bg-transparent"
                >
                  <option key={1} value={1}>
                    1
                  </option>
                  {Array.from(Array(8).keys()).map((idx) => {
                    return (
                      <option key={idx + 2} value={idx + 2}>
                        {idx + 2}
                      </option>
                    ); // starts from 2
                  })}
                  <option key={100}>10+</option>
                </select>
              </div>
            </div>
            <div className="form-control text-right">
              <span>Rooms</span>
              <div className="input-group ml-auto">
                <select
                  onClick={(e) => {
                    if (!e.currentTarget.value) {
                      return;
                    }
                    const rooms = Number.parseInt(e.currentTarget.value);
                    setRoomInfo((prev) => ({ ...prev, rooms }));
                  }}
                  disabled={room.quantity === 0}
                  defaultValue={1}
                  className="select !rounded-tl-lg !rounded-bl-lg !rounded-tr-none !rounded-br-none select-bordered bg-transparent ml-auto"
                >
                  <option key={1} value={1}>
                    1
                  </option>
                  {Array.from(
                    Array(room.quantity > 0 ? room.quantity - 1 : 0).keys()
                  ).map((idx) => {
                    return (
                      <option key={idx + 2} value={idx + 2}>
                        {idx + 2}
                      </option>
                    ); // starts from 2
                  })}
                </select>
              </div>
            </div>
          </div>

          <hr></hr>
          <div
            className={`${
              room.quantity === 0 ? "cursor-not-allowed" : "cursor-auto"
            }`}
          >
            <label
              htmlFor={
                room.quantity === 0
                  ? ""
                  : canOpenDialog
                  ? BOOKING_DIALOG_ID
                  : WARNING_DIALOG_ID
              }
              className={`btn w-full ${
                room.quantity === 0
                  ? "btn-ghost cursor-not-allowed text-gray-900"
                  : "btn-success"
              }`}
            >
              {room.quantity === 0 ? "Fully booked" : "Book Now!"}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabElement;
