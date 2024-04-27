import * as React from "react";
import { SVGProps } from "react";
const SvgFigma = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg
    {...props}
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 5.5A3.5 3.5 0 0 1 8.5 2h7a3.5 3.5 0 1 1 0 7H12v9.5a3.5 3.5 0 1 1-5.303-3A3.499 3.499 0 0 1 8.5 9 3.5 3.5 0 0 1 5 5.5Z"
      fill={props.color || "#000"}
    />
    <path
      d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgFigma;
