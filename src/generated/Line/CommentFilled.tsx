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
      d="M7 9a1 1 0 0 1 1-1h4.5a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1ZM7 12a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z"
      fill={props.color || "#000"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 18h-.159l-3.273 2.764A1 1 0 0 1 6.923 20v-2.276C4.643 17.274 3 15.244 3 12.89V8.11c0-2.557 1.938-4.73 4.525-4.915C8.978 3.091 10.64 3 12 3c1.36 0 3.022.091 4.475.195C19.062 3.38 21 5.553 21 8.11v4.78c0 2.557-1.938 4.73-4.525 4.915C15.022 17.909 13.36 18 12 18ZM7.668 5.19C9.107 5.087 10.713 5 12 5s2.893.087 4.332.19C17.837 5.297 19 6.566 19 8.11v4.78c0 1.544-1.163 2.813-2.668 2.92-1.439.103-3.045.19-4.332.19-.289 0-.594-.004-.91-.012l-2.167 1.858v-1.954c-.424-.025-.847-.053-1.255-.082C6.163 15.703 5 14.434 5 12.89V8.11c0-1.544 1.163-2.813 2.668-2.92Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgCommentFilled;
