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
      opacity={0.15}
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
      fill={props.color || "#000"}
    />
    <path
      d="M7.8 16.4a1 1 0 0 0 1.397-.195L9.2 16.2l.028-.035a4.346 4.346 0 0 1 .716-.657c.509-.37 1.207-.709 2.056-.709.85 0 1.547.34 2.056.709a4.346 4.346 0 0 1 .716.657l.028.035.003.003A1 1 0 0 0 16.4 15l-.8.6.8-.6-.001-.001-.001-.002-.003-.003-.007-.01-.02-.025a5.21 5.21 0 0 0-.293-.332 6.346 6.346 0 0 0-.843-.736C14.502 13.361 13.4 12.8 12 12.8c-1.4 0-2.503.561-3.232 1.091a6.351 6.351 0 0 0-1.072.989 3.768 3.768 0 0 0-.064.08l-.02.025-.007.009-.003.003-.001.002S7.6 15 8.4 15.6l-.8-.6a1 1 0 0 0 .2 1.4ZM7.85 9.3a1.45 1.45 0 1 1 2.9 0 1.45 1.45 0 0 1-2.9 0ZM14.7 7.85a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9Z"
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
export default SvgSad;
