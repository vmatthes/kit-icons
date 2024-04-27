import * as React from "react";
import { SVGProps } from "react";
const SvgGrid = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg
    {...props}
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 3c-.548 0-1.17.087-1.693.182C3.897 3.438 3 4.692 3 6.022v1.955c0 1.33.896 2.585 2.307 2.84C5.83 10.914 6.452 11 7 11s1.17-.087 1.693-.182c1.41-.256 2.307-1.51 2.307-2.84V6.022c0-1.33-.896-2.585-2.307-2.84C8.17 3.086 7.548 3 7 3ZM17 3c-.548 0-1.17.087-1.693.182-1.41.256-2.307 1.51-2.307 2.84v1.955c0 1.33.896 2.585 2.307 2.84.524.096 1.145.183 1.693.183s1.17-.087 1.693-.182c1.41-.256 2.307-1.51 2.307-2.84V6.022c0-1.33-.896-2.585-2.307-2.84C18.17 3.086 17.548 3 17 3ZM17 13c-.548 0-1.17.087-1.693.182-1.41.256-2.307 1.51-2.307 2.84v1.955c0 1.33.896 2.585 2.307 2.84.524.096 1.145.183 1.693.183s1.17-.087 1.693-.182c1.41-.256 2.307-1.51 2.307-2.84v-1.955c0-1.33-.896-2.585-2.307-2.84C18.17 13.086 17.548 13 17 13ZM7 13c-.548 0-1.17.087-1.693.182-1.41.256-2.307 1.51-2.307 2.84v1.955c0 1.33.896 2.585 2.307 2.84C5.83 20.914 6.452 21 7 21s1.17-.087 1.693-.182c1.41-.256 2.307-1.51 2.307-2.84v-1.955c0-1.33-.896-2.585-2.307-2.84C8.17 13.086 7.548 13 7 13Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgGrid;
