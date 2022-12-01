type Props = {
  stayDuration: number;
  price: number;
};
const TotalPrice = ({ stayDuration, price }: Props) => {
  return (
    <>
      <span className="text-green-900">${price}</span> for {stayDuration}
      {stayDuration === 1 ? " night" : " nights"}
    </>
  );
};

export default TotalPrice;
