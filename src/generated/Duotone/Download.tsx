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
      opacity={0.15}
      d="M20 17.695v-3.39a1.969 1.969 0 0 0-1.796-1.97C16.5 12.187 13.922 12 12 12c-1.922 0-4.5.188-6.204.334A1.969 1.969 0 0 0 4 14.305v3.39c0 1.025.774 1.884 1.796 1.97C7.5 19.812 10.078 20 12 20c1.922 0 4.5-.189 6.204-.334A1.969 1.969 0 0 0 20 17.695Z"
      fill={props.color || "#000"}
    />
    <path
      d="M12 3a1 1 0 0 1 1 1v9.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 13.586V4a1 1 0 0 1 1-1Z"
      fill={props.color || "#000"}
    />
    <path
      d="M5 13a1 1 0 1 0-2 0v4.695a2.969 2.969 0 0 0 2.71 2.967c1.706.146 4.321.338 6.29.338 1.969 0 4.584-.192 6.29-.338A2.969 2.969 0 0 0 21 17.695V13a1 1 0 1 0-2 0v4.695a.969.969 0 0 1-.881.975c-1.702.145-4.243.33-6.119.33-1.876 0-4.417-.185-6.119-.33A.969.969 0 0 1 5 17.695V13Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgDownload;
