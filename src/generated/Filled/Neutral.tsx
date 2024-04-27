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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.3-4.15a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9ZM9 13.5a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Zm4.25-4.2a1.45 1.45 0 1 1 2.9 0 1.45 1.45 0 0 1-2.9 0Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgNeutral;
