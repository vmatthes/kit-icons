import * as React from "react";
import { SVGProps } from "react";
const SvgImagePlus = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
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
      d="M14.155 3.047A57.297 57.297 0 0 0 12 3c-.962 0-2.07.037-3.172.092-1.968.096-2.953.145-3.766.595A4.11 4.11 0 0 0 3.41 5.423C3 6.257 3 7.286 3 9.343v5.314a205.181 205.181 0 0 0 .001.825c.007 1.524.058 2.38.409 3.095a4.11 4.11 0 0 0 1.652 1.736c.813.45 1.798.499 3.766.595C9.93 20.963 11.038 21 12 21c.962 0 2.07-.037 3.172-.092 1.968-.096 2.953-.145 3.765-.595a4.11 4.11 0 0 0 1.653-1.736c.351-.714.402-1.571.409-3.094v-.091l.001-.735V9.83c-.313.11-.65.171-1 .171 0 .889-.386 1.687-1 2.236v.904l-.551-.512c-.43.237-.924.372-1.449.372a2.991 2.991 0 0 1-2.147-.905c-.191.108-.37.239-.531.389l-.476.441-2.322-2.156a2.861 2.861 0 0 0-.92-.572 2.97 2.97 0 0 0-2.131 0c-.34.13-.653.324-.92.572L5 13.14V9.344c0-1.062.002-1.737.044-2.254.04-.487.108-.678.16-.784.171-.347.49-.681.827-.868.113-.063.296-.137.75-.198.489-.067 1.127-.1 2.145-.15a68.246 68.246 0 0 1 2.837-.088C12.313 4.387 13.111 4 14 4c0-.333.054-.654.155-.953Zm4.84 12.818-2.062-1.916a.862.862 0 0 0-.278-.17.97.97 0 0 0-.695 0 .862.862 0 0 0-.277.17l-.367.34.441.411a1 1 0 0 1-1.36 1.466l-4.233-3.931a.863.863 0 0 0-.278-.171.97.97 0 0 0-.695 0 .862.862 0 0 0-.278.17l-3.909 3.63c.006.424.017.76.04 1.047.04.487.108.678.16.784.171.347.49.681.827.868.113.063.296.137.75.198.489.067 1.127.1 2.145.15 1.086.053 2.158.089 3.074.089.916 0 1.988-.036 3.074-.09 1.018-.05 1.656-.082 2.146-.149.453-.061.636-.135.749-.198.337-.187.656-.521.826-.868.053-.106.12-.297.16-.784.024-.287.035-.623.04-1.046Z"
      fill={props.color || "#000"}
    />
    <path
      opacity={0.15}
      d="M13.578 4.03A3 3 0 0 0 14 10a3 3 0 1 0 6 0v4.362c0 1.829 0 2.743-.364 3.484a3.653 3.653 0 0 1-1.47 1.543c-.722.4-1.597.444-3.346.53-.98.048-1.965.081-2.82.081-.855 0-1.84-.033-2.82-.081-1.75-.087-2.624-.13-3.347-.53a3.653 3.653 0 0 1-1.469-1.543C4 17.105 4 16.191 4 14.362V9.638c0-1.829 0-2.743.364-3.484a3.653 3.653 0 0 1 1.47-1.543c.722-.4 1.597-.444 3.346-.53C10.16 4.033 11.145 4 12 4c.492 0 1.026.011 1.578.03Z"
      fill={props.color || "#000"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 4a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0V8h2a1 1 0 1 0 0-2h-2V4Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgImagePlus;