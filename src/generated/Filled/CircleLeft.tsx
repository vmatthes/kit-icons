import * as React from "react";
import { SVGProps } from "react";
const SvgCircleLeft = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
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
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-9.707 3.707a1 1 0 0 0 1.414-1.414L11.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414l-3 3a1 1 0 0 0 0 1.414l3 3Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgCircleLeft;
