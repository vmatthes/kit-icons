import * as React from "react";
import { SVGProps } from "react";
const SvgSad = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg
    {...props}
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.3 7.85a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9ZM14.7 7.85a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9ZM16.2 16.4a1 1 0 0 1-1.397-.196L14.8 16.2l-.028-.035a4.354 4.354 0 0 0-.716-.657C13.547 15.14 12.85 14.8 12 14.8c-.85 0-1.547.339-2.056.709a4.346 4.346 0 0 0-.716.656L9.2 16.2l-.003.004A1 1 0 0 1 7.6 15c.012-.015.001-.001.001-.001l.001-.002.003-.003.007-.01.02-.025.064-.08a6.344 6.344 0 0 1 1.072-.989c.73-.53 1.832-1.09 3.232-1.09 1.4 0 2.503.56 3.232 1.091a6.343 6.343 0 0 1 1.072.989l.064.079.02.026.007.009.003.003.001.002h.001a1 1 0 0 1-.2 1.4Z"
      fill={props.color || "#000"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm10-8a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgSad;
