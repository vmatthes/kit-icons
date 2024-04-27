import * as React from "react";
import { SVGProps } from "react";
const SvgThumbUp = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg
    {...props}
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.295 3.976A1.675 1.675 0 0 1 11.821 3c1.646 0 3.023 1.307 3.023 2.973V8.6h2.694c2.094 0 3.75 1.831 3.42 3.92l-.002.016-.882 5.093c-.268 1.67-1.733 2.871-3.419 2.871-.448 0-1.059.081-1.857.187l-.412.054c-.96.126-2.088.259-3.238.259-1.071 0-2.19-.115-3.148-.233V8.577c.175-.49.376-1.02.59-1.49.306-.678.727-1.432 1.07-2.027.14-.24.27-.46.377-.64l.075-.129c.114-.193.165-.284.18-.308l.003-.007ZM6 10.2h-.36C4.207 10.2 3 11.34 3 12.8v5.1c0 1.46 1.206 2.6 2.64 2.6.097 0 .216.007.36.02V10.2Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgThumbUp;
