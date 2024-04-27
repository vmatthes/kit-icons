import * as React from "react";
import { SVGProps } from "react";
const SvgZoomOut = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
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
      d="M16 10a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"
      fill={props.color || "#000"}
    />
    <path
      d="M7 10a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z"
      fill={props.color || "#000"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 10a7 7 0 1 1 12.604 4.195.978.978 0 0 1 .062.056l5.041 5.042a1 1 0 0 1-1.414 1.414l-5.042-5.042-.056-.06A7 7 0 0 1 3 10Zm7-5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgZoomOut;
