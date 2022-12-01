import { SVGProps } from "react";

const Stove = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 128 128" height="100%" width="100%" {...props}>
      <path d="M8 40v76a4 4 0 0 0 4 4h104a4 4 0 0 0 4-4V40zm96 56H24V72h80zm0-32H24v-8h80zm12-56H12a4 4 0 0 0-4 4v20h112V12a4 4 0 0 0-4-4zM92 26a6 6 0 1 1 6-6 6 6 0 0 1-6 6zm16 0a6 6 0 1 1 6-6 6 6 0 0 1-6 6z"></path>
    </svg>
  );
};

export default Stove;
