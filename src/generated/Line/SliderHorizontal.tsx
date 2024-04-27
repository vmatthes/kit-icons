import * as React from "react";
import { SVGProps } from "react";
const SvgSliderHorizontal = (
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
      d="M14 3c1.306 0 2.418.835 2.83 2H20a1 1 0 1 1 0 2h-3.17A3.001 3.001 0 1 1 14 3Zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
      fill={props.color || "#000"}
    />
    <path
      d="M14 12.002A1 1 0 0 1 14.999 11l5-.007a1 1 0 1 1 .002 2l-5 .007A1 1 0 0 1 14 12.002Z"
      fill={props.color || "#000"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 10.993a1 1 0 1 0 0 2h2c.056 0 .11-.005.164-.013a3.001 3.001 0 1 0 .004-1.973A1.003 1.003 0 0 0 6 10.993H4ZM8 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
      fill={props.color || "#000"}
    />
    <path
      d="M3 6a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1ZM4.001 16.993a1 1 0 1 0-.002 2l5 .007A1 1 0 1 0 9 17l-5-.007Z"
      fill={props.color || "#000"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.832 17.007c.056-.01.113-.014.172-.014l2 .007a1 1 0 0 1-.008 2l-2-.007c-.054 0-.107-.005-.16-.013a3.001 3.001 0 1 1-.004-1.973ZM14 18a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgSliderHorizontal;
