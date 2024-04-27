import * as React from "react";
import { SVGProps } from "react";
const SvgTablet = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
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
      d="M9.151 2.036C10.033 2.018 11.135 2 12 2c.865 0 1.967.018 2.849.036l1.107.025.327.008.106.002c.874.003 1.75.257 2.434.76C19.516 3.338 20 4.105 20 5v14c0 .894-.484 1.66-1.177 2.17-.683.502-1.56.756-2.434.759l-.106.002-.327.008-1.107.025c-.882.018-1.984.036-2.849.036-.865 0-1.967-.018-2.849-.036l-1.107-.025-.327-.008-.106-.002c-.874-.003-1.75-.257-2.434-.76C4.484 20.662 4 19.895 4 19V5c0-.894.484-1.66 1.177-2.17.683-.502 1.56-.756 2.434-.759l.106-.002.327-.008 1.107-.025ZM10.75 17.25a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgTablet;
