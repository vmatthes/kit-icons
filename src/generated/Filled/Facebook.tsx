import * as React from "react";
import { SVGProps } from "react";
const SvgFacebook = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg
    {...props}
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17 2h-2.727c-1.206 0-2.362.527-3.214 1.464-.853.938-1.332 2.21-1.332 3.536v3H7v4h2.727v8h3.637v-8h2.727L17 10h-3.636V7c0-.265.095-.52.266-.707A.87.87 0 0 1 14.273 6H17V2Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgFacebook;
