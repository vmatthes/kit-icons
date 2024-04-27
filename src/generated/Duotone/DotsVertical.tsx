import * as React from "react";
import { SVGProps } from "react";
const SvgDotsVertical = (
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
      d="M10.586 4.586a2 2 0 1 1 2.828 2.828 2 2 0 0 1-2.828-2.828ZM10.586 10.586a2 2 0 1 1 2.828 2.828 2 2 0 0 1-2.828-2.828ZM12 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgDotsVertical;
