import * as React from "react";
import { SVGProps } from "react";
const SvgCalendarDots = (
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
      opacity={0.15}
      d="M4 9h16v7.792c0 1.538-1.162 2.827-2.696 2.948-1.63.128-3.696.26-5.304.26s-3.674-.132-5.304-.26C5.162 19.62 4 18.33 4 16.792V9Z"
      fill={props.color || "#000"}
    />
    <path
      d="M7 13a1 1 0 1 1 2 0 1 1 0 0 1-2 0ZM7 16a1 1 0 1 1 2 0 1 1 0 0 1-2 0ZM12 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM11 13a1 1 0 1 1 2 0 1 1 0 0 1-2 0ZM16 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM15 16a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
      fill={props.color || "#000"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 3a1 1 0 0 0-2 0v1.234l-.383.03C4.621 4.42 3.107 6.043 3.005 8H3v8.792c0 2.047 1.55 3.782 3.617 3.945C8.252 20.865 10.351 21 12 21c1.65 0 3.748-.135 5.383-.263C19.45 20.574 21 18.839 21 16.792V8h-.005c-.101-1.955-1.616-3.58-3.612-3.737L17 4.233V3a1 1 0 1 0-2 0v1.1a54.881 54.881 0 0 0-3-.1c-.914 0-1.966.041-3 .1V3ZM5 16.792V10h14v6.792c0 1.03-.774 1.872-1.774 1.95C15.6 18.872 13.566 19 12 19c-1.566 0-3.6-.13-5.226-.257-1-.079-1.774-.92-1.774-1.95ZM5.01 8a1.934 1.934 0 0 1 1.764-1.743C8.4 6.13 10.434 6 12 6c1.566 0 3.6.13 5.226.257.931.073 1.667.81 1.763 1.743H5.011Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgCalendarDots;
