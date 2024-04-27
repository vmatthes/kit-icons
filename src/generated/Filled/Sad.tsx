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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2ZM7.85 9.3a1.45 1.45 0 1 1 2.9 0 1.45 1.45 0 0 1-2.9 0Zm6.85-1.45a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9Zm1.5 8.55a1 1 0 0 1-1.397-.196L14.8 16.2l-.028-.035a4.346 4.346 0 0 0-.716-.657C13.547 15.14 12.85 14.8 12 14.8c-.85 0-1.547.339-2.056.709a4.346 4.346 0 0 0-.716.656L9.2 16.2l-.003.004A1 1 0 0 1 7.6 15l.8.6c-.8-.6-.799-.601-.799-.601l.001-.002.003-.003.007-.01.02-.025.064-.08a6.343 6.343 0 0 1 1.072-.989c.73-.53 1.832-1.09 3.232-1.09 1.4 0 2.503.56 3.232 1.091a6.345 6.345 0 0 1 1.072.989l.064.079.02.026.007.009.003.003.002.003a1 1 0 0 1-.2 1.4Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgSad;
