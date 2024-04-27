import * as React from "react";
import { SVGProps } from "react";
const SvgSettings = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg
    {...props}
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.293 11.293a1 1 0 1 1 1.414 1.414 1 1 0 0 1-1.414-1.414Z"
      fill={props.color || "#000"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 11.575c0-1.143.672-2.152 1.67-2.612a2.875 2.875 0 0 1 .666-3.027l.601-.601a2.875 2.875 0 0 1 3.027-.665A2.877 2.877 0 0 1 11.575 3h.85c1.143 0 2.151.672 2.611 1.67a2.875 2.875 0 0 1 3.029.666l.598.6h.002a2.874 2.874 0 0 1 .665 3.028 2.876 2.876 0 0 1 1.67 2.61v.851c0 1.142-.67 2.15-1.67 2.611a2.878 2.878 0 0 1-.663 3.026l-.003.003-.602.6a2.875 2.875 0 0 1-3.025.665A2.877 2.877 0 0 1 12.425 21h-.85a2.876 2.876 0 0 1-2.611-1.67 2.878 2.878 0 0 1-3.026-.663l-.003-.003-.6-.6a2.877 2.877 0 0 1-.665-3.028A2.876 2.876 0 0 1 3 12.426v-.851ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgSettings;
