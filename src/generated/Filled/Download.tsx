import * as React from "react";
import { SVGProps } from "react";
const SvgDownload = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg
    {...props}
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 3c.552 0 1 .416 1 .929v9.657l2.293-2.293a1.042 1.042 0 0 1 .213-.163c.344-.195.78-.17 1.1.074l.005.005a1.023 1.023 0 0 1 .224.24 1 1 0 0 1-.128 1.258l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.201-1.577l.014.008c.071.042.138.094.2.155L11 13.586V3.929c0-.513.448-.929 1-.929Z"
      fill={props.color || "#000"}
    />
    <path
      d="M5.879 14.121a2.996 2.996 0 0 1-.832-2.65A2.976 2.976 0 0 0 3 14.306v3.39a2.969 2.969 0 0 0 2.71 2.967c1.706.146 4.321.338 6.29.338 1.969 0 4.584-.192 6.29-.338A2.969 2.969 0 0 0 21 17.695v-3.39a2.976 2.976 0 0 0-2.047-2.833 2.996 2.996 0 0 1-.832 2.65l-4 4a3 3 0 0 1-4.242 0l-4-4Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgDownload;
