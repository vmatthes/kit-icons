import * as React from "react";
import { SVGProps } from "react";
const SvgPrevious = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg
    {...props}
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 5a1 1 0 0 0-2 0v14a1 1 0 1 0 2 0V5ZM19.563 4.833a2 2 0 0 0-1.565-.752c-.485 0-.886.228-1.169.415-.29.192-.632.466-1.019.775L9.91 9.993c-.243.193-.473.377-.65.547-.191.182-.406.424-.531.758a2 2 0 0 0 0 1.404c.125.334.34.576.53.758.178.17.408.354.65.547l5.902 4.722c.387.31.729.583 1.019.775.283.187.684.415 1.169.415a2 2 0 0 0 1.565-.752c.302-.379.375-.834.406-1.172.031-.347.031-.785.031-1.28v-9.43c0-.495 0-.933-.031-1.28-.031-.338-.104-.793-.406-1.172Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgPrevious;
