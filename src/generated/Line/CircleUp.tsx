import * as React from "react";
import { SVGProps } from "react";
const SvgCircleUp = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg
    {...props}
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.293 12.293a1 1 0 1 0 1.414 1.414L12 11.414l2.293 2.293a1 1 0 0 0 1.414-1.414l-3-3a1 1 0 0 0-1.414 0l-3 3Z"
      fill={props.color || "#000"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm8-10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgCircleUp;
