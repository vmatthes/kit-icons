import * as React from "react";
import { SVGProps } from "react";
const SvgPower = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
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
      d="M12.004 3a1 1 0 0 1 1 1v7.999a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1ZM7.746 6.994a1 1 0 0 1 .02 1.414 6.265 6.265 0 0 0-1.65 3.18 6.39 6.39 0 0 0 .345 3.595 6.159 6.159 0 0 0 2.217 2.78A5.863 5.863 0 0 0 12 19c1.18 0 2.336-.36 3.322-1.037a6.159 6.159 0 0 0 2.217-2.78 6.39 6.39 0 0 0 .345-3.596 6.264 6.264 0 0 0-1.65-3.179 1 1 0 1 1 1.434-1.394 8.264 8.264 0 0 1 2.18 4.194 8.39 8.39 0 0 1-.453 4.722 8.16 8.16 0 0 1-2.94 3.681A7.863 7.863 0 0 1 12 21a7.863 7.863 0 0 1-4.455-1.389 8.16 8.16 0 0 1-2.94-3.68 8.39 8.39 0 0 1-.452-4.723 8.265 8.265 0 0 1 2.18-4.194 1 1 0 0 1 1.413-.02Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgPower;
