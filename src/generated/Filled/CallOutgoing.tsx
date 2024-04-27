import * as React from "react";
import { SVGProps } from "react";
const SvgCallOutgoing = (
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
      d="M13.397 3.983a.949.949 0 0 0 .953.954l3.368-.013-4.01 4.01a1 1 0 0 0 1.413 1.415l4.01-4.01-.012 3.367a.949.949 0 0 0 .954.953.966.966 0 0 0 .96-.96l.023-5.74v-.005A.948.948 0 0 0 20.102 3l-5.744.022a.966.966 0 0 0-.961.961Z"
      fill={props.color || "#000"}
    />
    <path
      d="m4.43 4.499.198-.198.087-.088c.366-.367.704-.706 1.096-.905.77-.39 1.68-.39 2.45 0 .393.199.731.538 1.097.905l.087.088.225.224c.241.241.464.463.62.705.586.9.586 2.059 0 2.959-.156.241-.379.463-.62.704l-.083.083.002.006a11.515 11.515 0 0 0 2.245 3.162c.95.95 2.02 1.697 3.163 2.246l.005.002.083-.083c.241-.241.464-.464.705-.621.9-.585 2.06-.585 2.96 0 .24.157.463.38.704.621l.224.225.088.087c.367.366.706.704.905 1.096.39.77.39 1.68 0 2.45-.199.393-.538.731-.905 1.097l-.088.087-.198.198c-.394.395-.713.714-1.144.956a3.882 3.882 0 0 1-1.76.458c-.492-.002-.854-.105-1.296-.23l-.053-.015a17.318 17.318 0 0 1-7.534-4.432 17.317 17.317 0 0 1-4.432-7.534l-.015-.053c-.125-.442-.228-.804-.23-1.297a3.883 3.883 0 0 1 .458-1.76c.242-.43.561-.75.955-1.143Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgCallOutgoing;
