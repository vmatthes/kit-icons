import * as React from "react";
import { SVGProps } from "react";
const SvgCommentPending = (
  props: SVGProps<SVGSVGElement>
): React.ReactElement => (
  <svg
    {...props}
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 3c1.99 0 3.978.167 5.946.5C19.856 3.825 21 5.685 21 7.547v5.706c0 1.863-1.144 3.722-3.055 4.046-1.61.274-3.232.435-4.858.485a.989.989 0 0 1-.086.08l-3.433 2.9A1 1 0 0 1 7.923 20v-2.434a35.307 35.307 0 0 1-1.87-.267C4.143 16.975 3 15.114 3 13.254V7.547c0-1.861 1.144-3.722 3.054-4.046A35.48 35.48 0 0 1 12 3ZM8 9a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0v-1a1 1 0 0 0-1-1Zm4 0a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0v-1a1 1 0 0 0-1-1Zm3 1a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgCommentPending;
