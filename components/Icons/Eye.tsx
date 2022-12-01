import { SVGProps } from "react";

const Eye = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 128 128" height="100%" width="100%" {...props}>
      <path d="M80 64a16 16 0 1 1-31.3-4.7 8 8 0 1 0 10.6-10.6A16 16 0 0 1 80 64zm39.3 2.3c-6 8.5-28.5 37.7-55.3 37.7S14.7 74.8 8.7 66.3a4 4 0 0 1 0-4.6C14.7 53.2 37.2 24 64 24s49.3 29.2 55.3 37.7a4 4 0 0 1 0 4.6zM88 64a24 24 0 1 0-24 24 24 24 0 0 0 24-24z"></path>
    </svg>
  );
};

export default Eye;
