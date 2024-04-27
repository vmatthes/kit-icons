import * as React from "react";
import { SVGProps } from "react";
const SvgFacebook = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
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
      d="M17 3h-2.454c-1.085 0-2.126.474-2.893 1.318-.767.844-1.199 1.989-1.199 3.182v2.7H8v3.6h2.454V21h3.273v-7.2h2.455L17 10.2h-3.273V7.5c0-.239.086-.468.24-.636a.783.783 0 0 1 .579-.264H17V3Z"
      fill={props.color || "#000"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.913 3.645C11.859 2.605 13.163 2 14.546 2H17a1 1 0 0 1 1 1v3.6a1 1 0 0 1-1 1h-2.273v1.6H17a1 1 0 0 1 .975 1.222l-.818 3.6a1 1 0 0 1-.975.778h-1.455V21a1 1 0 0 1-1 1h-3.273a1 1 0 0 1-1-1v-6.2H8a1 1 0 0 1-1-1v-3.6a1 1 0 0 1 1-1h1.455V7.5c0-1.43.515-2.817 1.458-3.855ZM14.546 4c-.788 0-1.565.343-2.153.99-.592.651-.939 1.553-.939 2.51v2.7a1 1 0 0 1-1 1H9v1.6h1.454a1 1 0 0 1 1 1V20h1.273v-6.2a1 1 0 0 1 1-1h1.657l.363-1.6h-2.02a1 1 0 0 1-1-1V7.5c0-.475.17-.947.5-1.31.332-.364.804-.59 1.319-.59H16V4h-1.454Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgFacebook;
