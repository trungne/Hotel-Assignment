import { Utility } from "../../shared";
import UtilityCard from "./UtilityCard";
import { ReactNode } from "react";
import { UtilityNode } from "../../shared/UtilityNode";
const DEFAULT: string[] = [
  "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1625&q=80",
  "https://images.unsplash.com/photo-1562778612-e1e0cda9915c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  "https://images.unsplash.com/photo-1548983615-9e5c3349b637?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2268&q=80",
  "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
  "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1049&q=80",
];

const Slide = ({ images, keyNum }: { images: string[]; keyNum: number }) => {
  return (
    <>
      {images.map((image, idx) => {
        return (
          <div
            key={idx + keyNum}
            className="z-10 min-w-[200px] md:min-w-[400px] lg:min-w-[500px] xl:min-w[600px] h-full "
          >
            <img
              key={idx + keyNum}
              className="h-full w-full object-cover"
              src={image}
              alt="image"
            />
          </div>
        );
      })}
    </>
  );
};

type Props = {
  images?: string[];
};
const Gallery = ({ images = DEFAULT }: Props) => {
  return (
    <div
      id="gallery"
      className="relative flex flex-col h-full overflow-hidden  bg-slate-300 py-8"
    >
      <div className="flex items-center justify-around h-[60%] gap-8  scrollbar-hide animate-marquee-infinite">
        <Slide images={images} keyNum={0} />
        <Slide images={images} keyNum={1} />
        <Slide images={images} keyNum={2} />
        <Slide images={images} keyNum={3} />
      </div>
      <div className="flex-1 flex flex-col justify-evenly items-center">
        <span className=" text-lg md:text-2xl lg:text-3xl font-bold text-slate-800">
          All utilities included
        </span>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          {Object.keys(UtilityNode).map((key, idx) => {
            const _key = key as Utility;
            return (
              <UtilityCard
                key={idx + _key}
                name={_key}
                icon={UtilityNode[_key] as ReactNode}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
