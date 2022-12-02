import { useAtom } from "jotai";
import { formatCurrency } from "../../shared";
import { readRoomAtom } from "../../shared/atoms";
export const BOOKING_DIALOG_ID = "booking-dialog";

const BookingDialog = () => {
  const [room] = useAtom(readRoomAtom);

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
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full"
            />
          </div>

          {/* Phone */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              type="text"
              placeholder="Enter your phone number"
              className="input input-bordered w-full"
            />
          </div>

          {/* Email */}
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
          </div>
          <hr className="my-4"></hr>

          <div className="my-4">
            <h1>Guests: {room.guests}</h1>
            <h1>Total room(s): {room.rooms}</h1>
            <h1>Check-in: {room.checkin}</h1>
            <h1>Check-out: {room.checkout}</h1>
          </div>

          <hr className="my-4"></hr>
          <h1 className="text-right my-4 ">
            Total Price:&nbsp;
            <span className="font-bold">{formatCurrency(room.totalPrice)}</span>
          </h1>

          <div className="flex justify-between">
            <button className="btn btn-success">Confirm</button>

            <label htmlFor={BOOKING_DIALOG_ID} className="btn">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingDialog;
