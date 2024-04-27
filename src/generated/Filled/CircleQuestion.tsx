import * as React from "react";
import { SVGProps } from "react";
const SvgCircleQuestion = (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.067-3.27a1.7 1.7 0 0 1 2.561 1.468v.002c0 .272-.258.677-.89 1.126a6.14 6.14 0 0 1-1.09.612l-.014.006h-.001a1 1 0 0 0-.624.927V13a1 1 0 0 0 1.796.605l.065-.032c.275-.14.649-.347 1.028-.618.679-.483 1.73-1.413 1.73-2.754a3.7 3.7 0 0 0-7.19-1.233 1 1 0 1 0 1.886.664 1.7 1.7 0 0 1 .743-.902ZM12 15.5a1 1 0 1 0 0 2h.009a1 1 0 1 0 0-2H12Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgCircleQuestion;
