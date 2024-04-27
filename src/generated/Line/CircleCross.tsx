import * as React from "react";
import { SVGProps } from "react";
const SvgCircleCross = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg
    {...props}
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.172 9.172a1 1 0 0 1 1.414 0L12 10.586l1.414-1.414a1 1 0 1 1 1.414 1.414L13.414 12l1.414 1.414a1 1 0 0 1-1.414 1.414L12 13.414l-1.414 1.414a1 1 0 1 1-1.414-1.414L10.586 12l-1.414-1.414a1 1 0 0 1 0-1.414Z"
      fill={props.color || "#000"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2ZM4 12a8 8 0 1 0 16 0 8 8 0 0 0-16 0Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgCircleCross;
