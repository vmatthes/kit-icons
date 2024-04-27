import * as React from "react";
import { SVGProps } from "react";
const SvgConnect = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg
    {...props}
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.693 10.818C8.17 10.913 7.548 11 7 11s-1.17-.087-1.693-.182C3.897 10.562 3 9.308 3 7.978V6.022c0-1.33.896-2.585 2.307-2.84C5.83 3.086 6.452 3 7 3s1.17.087 1.693.182c1.41.256 2.307 1.51 2.307 2.84v1.955c0 1.33-.896 2.585-2.307 2.84ZM18.693 20.818C18.17 20.913 17.548 21 17 21s-1.17-.087-1.693-.182c-1.41-.256-2.307-1.51-2.307-2.84v-1.955c0-1.33.896-2.585 2.307-2.84C15.83 13.086 16.452 13 17 13s1.17.087 1.693.182c1.41.256 2.307 1.51 2.307 2.84v1.955c0 1.33-.896 2.585-2.307 2.84ZM17 11a1 1 0 0 1-1-1V8h-2a1 1 0 1 1 0-2h2a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1ZM7 13a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2H8a2 2 0 0 1-2-2v-2a1 1 0 0 1 1-1Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgConnect;
