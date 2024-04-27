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
      opacity={0.15}
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
      fill={props.color || "#000"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm10.215-3.48a1.7 1.7 0 0 0-1.89 1.112 1 1 0 1 1-1.887-.664 3.7 3.7 0 0 1 7.19 1.233c0 1.34-1.051 2.271-1.73 2.754-.38.27-.753.478-1.028.618l-.065.032A.999.999 0 0 1 11.01 13v-.129a1 1 0 0 1 .624-.927h.001l.014-.006.065-.028a6.14 6.14 0 0 0 1.026-.584c.63-.45.889-.854.889-1.126v-.002a1.7 1.7 0 0 0-1.413-1.678ZM11 16.5a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgCircleQuestion;
