import * as React from "react";
import { SVGProps } from "react";
const SvgClockAlt = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg
    {...props}
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity={0.15}
      d="M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0Z"
      fill={props.color || "#000"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 20a8 8 0 1 1 0-16 8 8 0 0 1 0 16ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-5a1 1 0 1 0-2 0v5.414l2.793 2.793a1 1 0 0 0 1.414-1.414L13 11.586V7Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgClockAlt;
