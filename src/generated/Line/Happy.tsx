import * as React from "react";
import { SVGProps } from "react";
const SvgHappy = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg
    {...props}
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.3 7.85a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9ZM7.8 13a1 1 0 0 1 1.397.195l.003.005.028.035a4.346 4.346 0 0 0 .716.657c.509.369 1.207.708 2.056.708.85 0 1.547-.34 2.056-.709a4.346 4.346 0 0 0 .716-.656l.028-.035.003-.005A1 1 0 0 1 16.4 14.4l-.001.001-.001.002-.003.003-.007.01-.02.025-.064.08a6.339 6.339 0 0 1-1.072.988c-.73.53-1.831 1.091-3.232 1.091-1.4 0-2.503-.561-3.232-1.091a6.344 6.344 0 0 1-1.072-.989 3.525 3.525 0 0 1-.064-.08l-.02-.025-.007-.009-.003-.003-.001-.002L7.6 14.4a1 1 0 0 1 .2-1.4ZM13.25 9.3a1.45 1.45 0 1 1 2.9 0 1.45 1.45 0 0 1-2.9 0Z"
      fill={props.color || "#000"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2ZM4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgHappy;
