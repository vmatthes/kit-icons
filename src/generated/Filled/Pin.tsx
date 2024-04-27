import * as React from "react";
import { SVGProps } from "react";
const SvgPin = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
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
      d="M4.07 8.624C4.594 4.844 7.982 2 12 2c4.085 0 7.521 2.942 7.954 6.816A4.311 4.311 0 0 1 20 9.54l.001.094a7.32 7.32 0 0 1-.3 2.078c-.555 2.175-1.802 4.251-3.053 5.932a32.453 32.453 0 0 1-3.335 3.788 1.905 1.905 0 0 1-2.622.041 27.864 27.864 0 0 1-3.57-3.951c-1.317-1.793-2.586-4.054-2.989-6.504a7.335 7.335 0 0 1-.13-1.474L4 9.445c0-.281.023-.555.07-.82ZM9 10a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgPin;
