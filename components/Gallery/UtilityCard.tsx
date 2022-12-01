import { ReactNode } from "react";
import { Utility } from "../../shared";

type Props = {
  name: Utility;
  icon: ReactNode;
};

const UtilityCard = ({ name, icon }: Props) => {
  return (
    <div
      data-tip={name}
      className="tooltip basis-10 md:basis-14 bg-slate-800 flex flex-col justify-center items-center gap-2 rounded-md p-2"
    >
      {icon}
    </div>
  );
};

export default UtilityCard;
