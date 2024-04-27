import * as React from "react";
import { SVGProps } from "react";
const SvgCartPlus = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg
    {...props}
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 8a1 1 0 1 0 0-2h-2V4a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0V8h2Z"
      fill={props.color || "#000"}
    />
    <path
      d="M9.315 5.014c.745-.014 1.6-.02 2.44-.004A2.989 2.989 0 0 0 11 7a68.582 68.582 0 0 0-1.647.013.948.948 0 0 0-.897 1.16l1.048 5.031a1 1 0 0 0 .979.796h6.543a1 1 0 0 0 .972-.77l.08-.334c.688-.132 1.558-.326 2.181-.536l-.314 1.33a3 3 0 0 1-2.92 2.31h-6.542a3 3 0 0 1-2.937-2.388L6.498 8.581a2.975 2.975 0 0 1 .448-2.282c-.18-.861-.383-1.14-.468-1.22l-.002-.002C6.437 5.04 6.394 5 6 5H4a1 1 0 0 1 0-2h2c.432 0 1.195.008 1.847.621.376.353.647.843.85 1.469.197-.046.404-.072.618-.076ZM9 19a2 2 0 1 1 4.001.001A2 2 0 0 1 9 19ZM17 17a2 2 0 1 0 .001 4.001A2 2 0 0 0 17 17Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgCartPlus;
