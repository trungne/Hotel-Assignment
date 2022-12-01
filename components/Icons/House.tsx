import { SVGProps } from "react";

const House = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 128 128" height="100%" width="100%" {...props}>
      <path d="M119 65.3l-52-56a4 4 0 0 0-6 0l-52 56a4 4 0 0 0 3 6.7h12v48h24V80h32v40h24V72h12a4 4 0 0 0 3-6.7z"></path>
    </svg>
  );
};

export default House;
