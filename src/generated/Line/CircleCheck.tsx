import * as React from "react";
import { SVGProps } from "react";
const SvgCircleCheck = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg
    {...props}
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m15.82 9.073.01-.016.004-.005a1 1 0 1 0-1.668-1.103l-.005.006-.012.02-.047.07-.168.26c-.14.222-.336.531-.551.887-.425.702-.953 1.622-1.298 2.404-.316.717-.613 1.62-.841 2.386L9.74 12.327a1 1 0 0 0-1.48 1.346l2.727 3a1 1 0 0 0 1.712-.436l.001-.005.005-.02.02-.078.075-.295c.066-.251.161-.602.276-.998.233-.805.536-1.752.839-2.437.29-.659.763-1.488 1.179-2.176a41.001 41.001 0 0 1 .684-1.09l.042-.065Z"
      fill={props.color || "#000"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm10 8a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgCircleCheck;
