type Props = {
  stayDuration: number;
  price: number;
};
const TotalPrice = ({ stayDuration, price }: Props) => {
  return (
    <>
      <span className="text-green-900">
        {new Intl.NumberFormat("en", {
          style: "currency",
          currency: "USD",
        }).format(price)}
      </span>{" "}
      for <span className=" text-pink-700">{stayDuration}</span>
      {stayDuration === 1 ? " night" : " nights"}
    </>
  );
};

export default TotalPrice;
