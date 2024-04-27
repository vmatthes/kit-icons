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
      d="M11.755 5.01c-.84-.017-1.695-.01-2.44.004-.214.004-.42.03-.619.076-.202-.626-.473-1.116-.849-1.469C7.195 3.008 6.432 3 6 3H4a1 1 0 0 0 0 2h2c.394 0 .437.04.476.077l.002.002c.085.08.289.359.468 1.22a2.975 2.975 0 0 0-.448 2.282l1.048 5.031A3 3 0 0 0 10.482 16h6.544a3 3 0 0 0 2.919-2.31l.314-1.33c-.817.275-2.058.523-2.759.64l-.036-.036a3 3 0 0 1-5.71-7.954Z"
      fill={props.color || "#000"}
    />
    <path
      d="M20.847 7.532A1 1 0 0 1 20 8h-2v2a1 1 0 1 1-2 0V8h-2a1 1 0 1 1 0-2h2V4a1 1 0 1 1 2 0v2h2a1 1 0 0 1 .847 1.532ZM11 17a2 2 0 1 0 .001 4.001A2 2 0 0 0 11 17ZM15 19a2 2 0 1 1 4.001.001A2 2 0 0 1 15 19Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgCartPlus;
