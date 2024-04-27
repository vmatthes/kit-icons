import * as React from "react";
import { SVGProps } from "react";
const SvgConnectBottomLeft = (
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
      d="M5.307 3.182C5.83 3.087 6.452 3 7 3s1.17.087 1.693.182c1.41.256 2.307 1.51 2.307 2.84v1.955c0 1.33-.896 2.585-2.307 2.84C8.17 10.914 7.548 11 7 11s-1.17-.087-1.693-.182C3.897 10.562 3 9.308 3 7.978V6.022c0-1.33.896-2.585 2.307-2.84ZM15.307 13.182C15.83 13.087 16.452 13 17 13s1.17.087 1.693.182c1.41.256 2.307 1.51 2.307 2.84v1.955c0 1.33-.896 2.585-2.307 2.84-.524.096-1.145.183-1.693.183s-1.17-.087-1.693-.182c-1.41-.256-2.307-1.51-2.307-2.84v-1.955c0-1.33.896-2.585 2.307-2.84ZM8 14a1 1 0 1 0-2 0v2a2 2 0 0 0 2 2h2a1 1 0 1 0 0-2H8v-2Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgConnectBottomLeft;
