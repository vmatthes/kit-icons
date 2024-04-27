import * as React from "react";
import { SVGProps } from "react";
const SvgTag = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg
    {...props}
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.932 3c-1.432 0-2.624 0-4.053.572-.637.254-1.348.577-1.898 1.08C5.383 5.2 5 5.938 5 6.9v12.299c0 1.35 1.538 2.401 2.792 1.446L12 17.44l4.208 3.206C17.462 21.601 19 20.55 19 19.2v-12.3c0-.962-.383-1.699-.981-2.246-.55-.504-1.261-.827-1.898-1.081C14.691 3 13.5 3 12.068 3h-.136Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgTag;
