import * as React from "react";
import { SVGProps } from "react";
const SvgNext = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg
    {...props}
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 19a1 1 0 1 0 2 0V5a1 1 0 1 0-2 0v14ZM4.437 19.167a2 2 0 0 0 1.565.752c.485 0 .886-.228 1.17-.415.29-.192.631-.466 1.017-.775l5.902-4.721c.243-.194.473-.378.65-.548.191-.182.406-.424.531-.758a2 2 0 0 0 0-1.404 2.043 2.043 0 0 0-.53-.758c-.178-.17-.408-.354-.65-.547L8.188 5.27c-.386-.31-.728-.583-1.018-.775-.283-.187-.684-.415-1.169-.415a2 2 0 0 0-1.565.752c-.302.379-.375.834-.406 1.172C4 6.352 4 6.79 4 7.285v9.43c0 .495 0 .933.031 1.28.031.338.104.793.406 1.172Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgNext;
