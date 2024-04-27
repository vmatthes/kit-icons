import * as React from "react";
import { SVGProps } from "react";
const SvgCommentFilled = (
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
      d="M17.946 3.5A35.47 35.47 0 0 0 12 3c-2.019 0-4.005.17-5.946.5C4.144 3.826 3 5.687 3 7.548v5.707c0 1.86 1.144 3.72 3.053 4.045.62.106 1.243.195 1.87.267V20a1 1 0 0 0 1.645.764l3.433-2.9a.989.989 0 0 0 .086-.08c1.626-.05 3.249-.211 4.858-.485C19.856 16.975 21 15.116 21 13.253V7.547c0-1.862-1.144-3.722-3.054-4.047Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgCommentFilled;
