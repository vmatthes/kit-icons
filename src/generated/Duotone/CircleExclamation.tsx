import * as React from "react";
import { SVGProps } from "react";
const SvgCircleExclamation = (
  props: SVGProps<SVGSVGElement>
): React.ReactElement => (
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
      d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z"
      fill={props.color || "#000"}
    />
    <path
      d="M11 8a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0V8ZM12 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
      fill={props.color || "#000"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12Zm10 8a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgCircleExclamation;
