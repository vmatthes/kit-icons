import * as React from "react";
import { SVGProps } from "react";
const SvgAtSign = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
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
      d="M14.045 3.236a9 9 0 1 0 3.427 15.91 1 1 0 1 0-1.216-1.588A7 7 0 1 1 19 12v.8a1.4 1.4 0 1 1-2.8 0v-4a1 1 0 0 0-1.991-.135 4 4 0 1 0 .644 6.139A3.4 3.4 0 0 0 21 12.8V12a9 9 0 0 0-6.955-8.764ZM10 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgAtSign;
