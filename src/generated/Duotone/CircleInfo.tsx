import * as React from "react";
import { SVGProps } from "react";
const SvgCircleInfo = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
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
      d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z"
      fill={props.color || "#000"}
    />
    <path
      d="M11 8a1 1 0 1 1 2 0 1 1 0 0 1-2 0ZM11.281 12.25l-.605 2.425a1.752 1.752 0 0 0 1.512 2.165 1.75 1.75 0 0 0 .968-.175l.009-.004.04-.021a1 1 0 0 0-.486-1.89l.605-2.426a1.752 1.752 0 0 0-1.512-2.163 1.75 1.75 0 0 0-.963.172l-.037.018a1 1 0 0 0 .47 1.899Z"
      fill={props.color || "#000"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm8-10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgCircleInfo;
