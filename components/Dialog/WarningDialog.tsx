export const WARNING_DIALOG_ID = "warning-dialog";

export const WarningDialog = () => {
  return (
    <>
      <input type="checkbox" id={WARNING_DIALOG_ID} className="modal-toggle" />
      <label htmlFor={WARNING_DIALOG_ID} className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold text-red-500">
            Please fill in the information
          </h3>
          <p className="py-4">
            We cannot proceed your booking without the check-in, check-out dates!
          </p>
        </label>
      </label>
    </>
  );
};


