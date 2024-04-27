import * as React from "react";
import { SVGProps } from "react";
const SvgSliderVertical = (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 14a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm-6-5a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm-4 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      fill={props.color || "#000"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 14a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a3.001 3.001 0 0 1-2 2.83V20a1 1 0 1 1-2 0v-3.17A3.001 3.001 0 1 1 21 14Zm-9.002 0a1 1 0 0 1 1.002.999l.007 5a1 1 0 1 1-2 .002l-.007-5A1 1 0 0 1 11.998 14Zm1.01-10a1 1 0 1 0-2 0v2c0 .056.004.11.012.164a3.001 3.001 0 1 0 1.973.004c.01-.054.014-.11.014-.168V4ZM18 3a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1Zm-6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM7.007 4.001a1 1 0 1 0-2-.002l-.007 5A1 1 0 1 0 7 9l.007-5Zm-.014 13.83c.01.057.014.114.014.173l-.007 2a1 1 0 0 1-2-.008l.007-2c0-.054.005-.107.013-.16a3.001 3.001 0 1 1 1.973-.004ZM6 14a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgSliderVertical;
