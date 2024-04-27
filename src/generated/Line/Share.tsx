import * as React from "react";
import { SVGProps } from "react";
const SvgShare = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg
    {...props}
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.124 12.992a1 1 0 0 0-.248-1.984l-2.248.28A3 3 0 0 0 3 14.267v3.429a2.969 2.969 0 0 0 2.71 2.967c1.706.146 4.321.338 6.29.338 1.969 0 4.584-.192 6.29-.338A2.969 2.969 0 0 0 21 17.695v-3.43a3 3 0 0 0-2.628-2.976l-2.248-.281a1 1 0 1 0-.248 1.984l2.248.281a1 1 0 0 1 .876.993v3.429a.969.969 0 0 1-.881.975c-1.702.145-4.243.33-6.119.33-1.876 0-4.417-.185-6.119-.33A.969.969 0 0 1 5 17.695v-3.43a1 1 0 0 1 .876-.992l2.248-.28Z"
      fill={props.color || "#000"}
    />
    <path
      d="M7.293 7.293a1 1 0 0 0 1.414 1.414L11 6.414V16a1 1 0 1 0 2 0V6.414l2.293 2.293a1 1 0 1 0 1.414-1.414l-4-4a1 1 0 0 0-1.415 0l-4 4Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgShare;
