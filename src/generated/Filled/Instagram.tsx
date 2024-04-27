import * as React from "react";
import { SVGProps } from "react";
const SvgInstagram = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
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
      d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm12.5-.5a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1Zm-3.207 2.522a2 2 0 1 0-.586 3.956 2 2 0 0 0 .586-3.956ZM10.158 8.45a4 4 0 1 1 3.684 7.1 4 4 0 0 1-3.684-7.1Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgInstagram;
