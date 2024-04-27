import * as React from "react";
import { SVGProps } from "react";
const SvgMouse = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
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
      d="M11.947 2.123c-3.652 0-7.072 2.953-6.81 6.88l.48 7.198c.053.806.27 1.605.61 2.325 2.755 5.812 11.629 4 12.05-2.325l.48-7.197c.262-3.927-3.157-6.88-6.81-6.88ZM13 7a1 1 0 0 0-2 0v2a1 1 0 1 0 2 0V7Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgMouse;
