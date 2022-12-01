export const BOOKING_DIALOG_ID = "booking-dialog";

const BookingDialog = () => {
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
          <span>
            {" "}
            We just need some of your information to complete the booking
          </span>
          {/* Name */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name?</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          {/* Phone */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              type="text"
              placeholder="Enter your phone number"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          {/* Email */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Enter your email"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingDialog;
