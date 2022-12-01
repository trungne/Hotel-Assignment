import Image from "next/image";

type Props = {
  imageList: string[];
};

const Carousel = ({ imageList }: Props) => {
  return (
    <div id="carousel" className="carousel carousel-center w-full">
      {imageList.map((image, curIdx, arr) => {
        const nextIdx = curIdx === arr.length - 1 ? 0 : curIdx + 1;
        const prevIdx = curIdx === 0 ? arr.length - 1 : curIdx - 1;
        return (
          <div
            key={curIdx}
            id={`slide${curIdx}`}
            className="carousel-item relative w-full"
          >
            <Image
              width={300}
              height={100}
              alt="pic"
              src={image}
              className="w-full object-contain "
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              {
                <button
                  disabled={curIdx === 0}
                  style={{
                    visibility: curIdx === 0 ? "hidden" : "visible",
                  }}
                  onClick={() => {
                    if (!document) {
                      return;
                    }
                    const element = document.querySelector(`#slide${prevIdx}`);
                    element?.scrollIntoView();
                  }}
                  className="btn btn-circle bg-slate-500 bg-opacity-75 hover:bg-opacity-100 border-none"
                >
                  ❮
                </button>
              }
              <button
                disabled={curIdx === arr.length - 1}
                style={{
                  visibility: curIdx === arr.length - 1 ? "hidden" : "visible",
                }}
                onClick={() => {
                  if (!document) {
                    return;
                  }
                  const element = document.querySelector(`#slide${nextIdx}`);
                  element?.scrollIntoView();
                }}
                className="btn btn-circle bg-slate-500 bg-opacity-75 hover:bg-opacity-100 border-none"
              >
                ❯
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
