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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21 14a3.001 3.001 0 0 1-2 2.83V20a1 1 0 1 1-2 0v-3.17A3.001 3.001 0 1 1 21 14Zm-2 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"
      fill={props.color || "#000"}
    />
    <path
      d="M11.998 14a1 1 0 0 1 1.002.999l.007 5a1 1 0 1 1-2 .002l-.007-5A1 1 0 0 1 11.998 14Z"
      fill={props.color || "#000"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.007 4a1 1 0 1 0-2 0v2c0 .056.005.11.013.164a3.001 3.001 0 1 0 1.973.004c.01-.054.014-.11.014-.168V4ZM12 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
      fill={props.color || "#000"}
    />
    <path
      d="M18 3a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1ZM7.007 4.001a1 1 0 1 0-2-.002l-.007 5A1 1 0 1 0 7 9l.007-5Z"
      fill={props.color || "#000"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.993 17.832c.01.056.014.113.014.172l-.007 2a1 1 0 0 1-2-.008l.007-2c0-.054.005-.107.013-.16a3.001 3.001 0 1 1 1.973-.004ZM6 14a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgSliderVertical;
