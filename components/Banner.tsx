import Link from "next/link";
import { CiMapPin } from "react-icons/ci";
import { GOOGLE_MAP_ADDRESS_LINK } from "../shared";
import Map from "./Icons/Map";

const Banner = () => {
  return (
    <div id="banner" className="flex justify-center items-center flex-1">
      <div className="bg-slate-800 bg-opacity-75">
        <button
          onClick={() => {
            if (!document) {
              return;
            }

            const element = document.querySelector("#gallery");
            element?.scrollIntoView();
          }}
        >
          <h1 className="font-semibold italic p-4 text-center text-lg md:xl lg:text-3xl">
            The Princess of Arena Cam Ranh Home
          </h1>
          <h1 className=" font-semibold italic text-center text-lg md:xl lg:text-3xl">
            Beach Resort
          </h1>
        </button>

        <Link
          href={GOOGLE_MAP_ADDRESS_LINK}
          className="flex items-center text-center justify-center text-xs md:text-sm lg:text-base"
        >
          <div className="w-10">
            <Map fill="white" />
          </div>

          <span>Nguyễn Tất Thành, Cam Hải Đông - Tp. Cam Ranh</span>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
