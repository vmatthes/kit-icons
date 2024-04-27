import * as React from "react";
import { SVGProps } from "react";
const SvgCart = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg
    {...props}
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 3a1 1 0 0 0 0 2h2c.394 0 .437.04.476.077l.002.002c.085.08.289.359.468 1.22a2.975 2.975 0 0 0-.448 2.282l1.048 5.031A3 3 0 0 0 10.482 16h6.544a3 3 0 0 0 2.919-2.31l1.032-4.362c.4-1.695-.723-3.387-2.465-3.638-1.494-.215-3.494-.482-4.932-.597-1.307-.104-2.956-.104-4.265-.08-.214.005-.42.03-.619.077-.202-.626-.473-1.116-.849-1.469C7.195 3.008 6.432 3 6 3H4ZM11 17a2 2 0 1 0 .001 4.001A2 2 0 0 0 11 17ZM17 17a2 2 0 1 0 .001 4.001A2 2 0 0 0 17 17Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgCart;
