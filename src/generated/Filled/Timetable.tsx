import * as React from "react";
import { SVGProps } from "react";
const SvgTimetable = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
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
      d="M7 4a1 1 0 0 1 2 0v1.083c.68-.032 1.358-.058 2-.071V4a1 1 0 1 1 2 0v1.012c.642.013 1.32.039 2 .071V4a1 1 0 1 1 2 0v1.195c1.253.079 1.925.144 2.475.454.52.294.962.764 1.223 1.3C21 7.571 21 8.341 21 9.882v6.236c0 1.541 0 2.311-.302 2.933a3.06 3.06 0 0 1-1.223 1.3c-.602.34-1.35.385-2.844.477-1.544.094-3.24.172-4.631.172-1.39 0-3.087-.078-4.631-.172-1.495-.092-2.242-.138-2.844-.477a3.06 3.06 0 0 1-1.223-1.3C3 18.429 3 17.659 3 16.118V9.882c0-1.541 0-2.311.302-2.933a3.059 3.059 0 0 1 1.223-1.3c.55-.31 1.222-.375 2.475-.454V4Zm0 8a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm0 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm5-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-1-3a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm5-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-1 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgTimetable;
