import * as React from "react";
import { SVGProps } from "react";
const SvgTag = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
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
      d="M12 16.182 7.186 19.85c-.496.378-1.186 0-1.186-.651v-12.3C6 5.575 7 5 8.25 4.5S10.523 4 12 4c1.477 0 2.5 0 3.75.5S18 5.574 18 6.9v12.299c0 .65-.69 1.029-1.186.65L12 16.183Z"
      fill={props.color || "#000"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 5c-1.493 0-2.33.01-3.379.428-.614.246-1.027.46-1.29.7-.214.196-.331.41-.331.772v11.834l5-3.81 5 3.81V6.9c0-.363-.117-.576-.331-.772-.263-.24-.677-.454-1.29-.7C14.33 5.01 13.493 5 12 5Zm-.068-2h.136c1.432 0 2.624 0 4.053.572.637.254 1.348.577 1.898 1.08C18.617 5.2 19 5.938 19 6.9v12.299c0 1.35-1.538 2.401-2.792 1.446L12 17.44l-4.208 3.206C6.538 21.601 5 20.55 5 19.2v-12.3c0-.962.383-1.699.981-2.246.55-.504 1.261-.827 1.898-1.081C9.309 3 10.5 3 11.932 3Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgTag;
