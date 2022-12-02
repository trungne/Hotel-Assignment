import { useAtom } from "jotai";
import { formatCurrency } from "../../shared";
import { readRoomAtom } from "../../shared/atoms";
import type { BookingInfo } from "../../shared";
import { useRef, useState } from "react";
import Loading from "../Icons/Loading";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export const BOOKING_DIALOG_ID = "booking-dialog";

type InputStatus = "Uninitialized" | "Error" | "Good";
const BookingDialog = () => {
  const [room] = useAtom(readRoomAtom);
  const [parent] = useAutoAnimate<HTMLDivElement>();

  const [name, setName] = useState<string>();
  const [nameInputStatus, setNameInputStatus] =
    useState<InputStatus>("Uninitialized");
  const [phone, setPhone] = useState<string>();
  const [phoneInputStatus, setPhoneInputStatus] =
    useState<InputStatus>("Uninitialized");
  const [email, setEmail] = useState<string>();
  const [emailInputStatus, setEmailInputStatus] =
    useState<InputStatus>("Uninitialized");
  const cancelButtonRef = useRef<HTMLLabelElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const phoneInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  const reset = () => {
    setName("");
    setNameInputStatus("Uninitialized");
    setEmail("");
    setEmailInputStatus("Uninitialized");
    setPhone("");
    setPhoneInputStatus("Uninitialized");
    setIsLoading(false);
    if (nameInputRef.current) {
      nameInputRef.current.value = "";
    }
    if (emailInputRef.current) {
      emailInputRef.current.value = "";
    }
    if (phoneInputRef.current) {
      phoneInputRef.current.value = "";
    }
  };
  const onSubmit = () => {
    if (isLoading) {
      return;
    }
    if (!name) {
      setNameInputStatus("Error");
    } else {
      setNameInputStatus("Good");
    }

    if (!phone) {
      setPhoneInputStatus("Error");
    } else {
      setPhoneInputStatus("Good");
    }

    if (!email || !email.includes("@")) {
      setEmailInputStatus("Error");
      return; // short circus
    } else {
      setEmailInputStatus("Good");
    }

    if (name && phone && email) {
      const bookingInfo: BookingInfo = {
        ...room,
        name,
        phone,
        email,
      };
      setIsLoading(true);
      setTimeout(() => {
        localStorage.setItem(
          `booking-${Date.now()}`,
          JSON.stringify(bookingInfo)
        );

        reset();
        cancelButtonRef.current?.click();
        setShowSuccessToast(true);
        setTimeout(() => {
          setShowSuccessToast(false);
        }, 4000);
      }, 1000);
    }
  };

  return (
    <>
      <input type="checkbox" id={BOOKING_DIALOG_ID} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor={BOOKING_DIALOG_ID}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Almost there!</h3>
          <h3>We just need some of your information to complete the booking</h3>
          {/* Name */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name?</span>
            </label>
            <input
              ref={nameInputRef}
              onChange={(e) => {
                setName(e.currentTarget.value);
              }}
              defaultValue={name}
              type="text"
              placeholder="Enter your name"
              className={`input ${
                nameInputStatus === "Error"
                  ? "input-error"
                  : nameInputStatus === "Good"
                  ? "input-success"
                  : "input-info"
              } input-bordered w-full`}
            />
          </div>

          {/* Phone */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              ref={phoneInputRef}
              onChange={(e) => {
                const numericValue = e.currentTarget.value.replace(/[^\d]/, "");
                e.currentTarget.value = numericValue;
                setPhone(numericValue);
              }}
              defaultValue={phone}
              type="text"
              placeholder="Enter your phone number"
              className={`input ${
                phoneInputStatus === "Error"
                  ? "input-error"
                  : phoneInputStatus === "Good"
                  ? "input-success"
                  : "input-info"
              } input-bordered w-full`}
            />
          </div>

          {/* Email */}
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              ref={emailInputRef}
              onChange={(e) => {
                setEmail(e.currentTarget.value);
              }}
              type="text"
              defaultValue={email}
              placeholder="Enter your email"
              className={`input ${
                emailInputStatus === "Error"
                  ? "input-error"
                  : emailInputStatus === "Good"
                  ? "input-success"
                  : "input-info"
              } input-bordered w-full`}
            />
          </div>
          <hr className="my-4"></hr>

          <div className="my-4">
            <h1>
              <i>Guests:&nbsp;</i> {room.guests}
            </h1>
            <h1>
              <i>Total room(s):&nbsp;</i>
              {room.rooms}
            </h1>
            <h1>
              <i>Check-in:&nbsp;</i>
              {room.checkin}
            </h1>
            <h1>
              <i>Check-out:&nbsp;</i>
              {room.checkout}
            </h1>
          </div>

          <hr className="my-4"></hr>
          <h1 className="text-right my-4 ">
            Total Price:&nbsp;
            <span className="font-bold">{formatCurrency(room.totalPrice)}</span>
          </h1>

          <div className="flex justify-between">
            <button
              disabled={isLoading}
              onClick={onSubmit}
              className="btn btn-success min-w-[100px] flex justify-center"
            >
              {isLoading ? <Loading /> : "Confirm"}
            </button>

            <label
              onClick={reset}
              ref={cancelButtonRef}
              htmlFor={BOOKING_DIALOG_ID}
              className="btn"
            >
              Cancel
            </label>
          </div>
        </div>
      </div>

      {showSuccessToast && (
        <div className="toast toast-end toast-middle">
          <div className="alert alert-success">
            <div>
              <span>Booking sent successfully.</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookingDialog;
