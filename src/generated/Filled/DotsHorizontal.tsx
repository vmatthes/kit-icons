import * as React from "react";
import { SVGProps } from "react";
const SvgDotsHorizontal = (
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
      d="M19.414 10.586a2 2 0 1 1-2.828 2.828 2 2 0 0 1 2.828-2.828ZM13.414 10.586a2 2 0 1 1-2.828 2.828 2 2 0 0 1 2.828-2.828ZM8 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgDotsHorizontal;
