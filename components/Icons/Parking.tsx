import { SVGProps } from "react";

const Parking = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 128 128" height="100%" width="100%" {...props}>
      <path d="M70.8 44H58v16h12.8a8 8 0 0 0 0-16z"></path>
      <path d="M108 8H20A12 12 0 0 0 8 20v88a12 12 0 0 0 12 12h88a12 12 0 0 0 12-12V20a12 12 0 0 0-12-12zM70 76H58v24H42V28h28a24 24 0 0 1 0 48z"></path>
    </svg>
  );
};

export default Parking;
