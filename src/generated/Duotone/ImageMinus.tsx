import * as React from "react";
import { SVGProps } from "react";
const SvgImageMinus = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
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
      d="M11.763 4A3 3 0 0 0 14 9h6v5.362c0 1.829 0 2.743-.364 3.484a3.653 3.653 0 0 1-1.47 1.544c-.722.4-1.597.443-3.346.529-.98.048-1.965.081-2.82.081-.855 0-1.84-.033-2.82-.081-1.75-.086-2.624-.13-3.347-.53a3.653 3.653 0 0 1-1.469-1.543C4 17.105 4 16.191 4 14.362V9.638c0-1.828 0-2.743.364-3.484a3.653 3.653 0 0 1 1.47-1.543c.722-.4 1.597-.443 3.346-.53.891-.043 1.786-.075 2.583-.08Z"
      fill={props.color || "#000"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.999 15.483c-.007 1.523-.058 2.38-.409 3.094a4.11 4.11 0 0 1-1.652 1.736c-.813.45-1.798.499-3.766.595-1.103.055-2.21.092-3.172.092-.962 0-2.07-.037-3.172-.092-1.968-.096-2.953-.145-3.766-.595a4.11 4.11 0 0 1-1.652-1.736c-.351-.714-.402-1.571-.409-3.095a1.006 1.006 0 0 1 0-.09L3 14.657V9.343c0-2.057 0-3.086.41-3.92a4.11 4.11 0 0 1 1.652-1.736c.813-.45 1.798-.499 3.766-.595A66.85 66.85 0 0 1 12 3c.499 0 1.037.01 1.594.027a3.003 3.003 0 0 0-2.426 1.982c-.706.013-1.47.042-2.242.08-1.018.05-1.656.083-2.145.15-.454.061-.637.135-.75.198a2.113 2.113 0 0 0-.826.868c-.053.106-.12.297-.16.784C5.001 7.606 5 8.281 5 9.343v3.797l2.553-2.37c.267-.249.58-.442.92-.573a2.97 2.97 0 0 1 2.131 0c.34.13.653.324.92.572l2.322 2.156.476-.441c.267-.249.58-.442.92-.573a2.972 2.972 0 0 1 2.131 0c.34.131.653.324.92.573l.707.656V9h1c.35 0 .687-.06 1-.17v6.562l-.001.09Zm-2.003.382-2.063-1.916a.862.862 0 0 0-.278-.17.97.97 0 0 0-.695 0 .862.862 0 0 0-.277.17l-.367.34.441.411a1 1 0 0 1-1.36 1.466l-4.233-3.931a.863.863 0 0 0-.278-.171.97.97 0 0 0-.695 0 .862.862 0 0 0-.278.17l-3.909 3.63c.006.424.017.76.04 1.047.04.487.108.678.16.784.171.347.49.681.827.868.113.063.296.137.75.198.489.067 1.127.1 2.145.15 1.086.053 2.158.089 3.074.089.916 0 1.988-.036 3.074-.09 1.018-.05 1.656-.082 2.146-.149.453-.061.636-.135.749-.198.337-.187.656-.521.826-.868.053-.106.12-.297.16-.784.024-.287.035-.623.04-1.046Z"
      fill={props.color || "#000"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 6a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgImageMinus;
