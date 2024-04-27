import * as React from "react";
import { SVGProps } from "react";
const SvgNeutral = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
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
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
      fill={props.color || "#000"}
    />
    <path
      d="M9 13.5a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9ZM7.85 9.3a1.45 1.45 0 1 1 2.9 0 1.45 1.45 0 0 1-2.9 0ZM14.7 7.85a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9Z"
      fill={props.color || "#000"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2ZM4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgNeutral;
