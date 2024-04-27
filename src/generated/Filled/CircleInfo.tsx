import * as React from "react";
import { SVGProps } from "react";
const SvgCircleInfo = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg
    {...props}
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12Zm10-5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-1.324 7.675.605-2.425a1 1 0 0 1-.47-1.899l.038-.018a1.75 1.75 0 0 1 2.475 1.991l-.605 2.426a1 1 0 0 1 .487 1.89l-.041.021-.009.004a1.75 1.75 0 0 1-2.48-1.99Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgCircleInfo;
