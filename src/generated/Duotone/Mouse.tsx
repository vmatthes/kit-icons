import * as React from "react";
import { SVGProps } from "react";
const SvgMouse = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
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
      d="m17.332 16.011.48-7.197.013-.208a5 5 0 0 0-1.916-4.173l-.165-.125a13.998 13.998 0 0 0-.269-.199 6 6 0 0 0-6.95 0c-.064.045-.132.096-.27.199l-.165.125a5 5 0 0 0-1.903 4.38l.48 7.198a5.344 5.344 0 0 0 10.665 0Z"
      fill={props.color || "#000"}
    />
    <path
      d="M12.947 7.123a1 1 0 1 0-2 0v2a1 1 0 0 0 2 0v-2Z"
      fill={props.color || "#000"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.947 2.123c-3.652 0-7.072 2.953-6.81 6.88l.48 7.198c.053.806.27 1.605.61 2.325 2.755 5.812 11.629 4 12.05-2.325l.48-7.197c.262-3.927-3.157-6.88-6.81-6.88ZM7.612 16.067l-.48-7.196C6.96 6.29 9.25 4.123 11.948 4.123c2.697 0 4.986 2.167 4.814 4.748l-.48 7.196c-.289 4.327-6.4 5.5-8.247 1.603a4.482 4.482 0 0 1-.423-1.603Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgMouse;
