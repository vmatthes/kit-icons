import * as React from "react";
import { SVGProps } from "react";
const SvgSend = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg
    {...props}
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 9.986a1 1 0 0 1 .525-.866c5.32-2.874 10.36-5.031 16.482-5.953a1 1 0 0 1 1.138 1.138c-.92 6.116-2.887 10.842-5.765 16.17a1 1 0 0 1-1.724.062l-3.292-5.175 5.54-5.54a1 1 0 0 0-1.415-1.414l-5.58 5.58L3.5 10.866a1 1 0 0 1-.5-.88Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgSend;
