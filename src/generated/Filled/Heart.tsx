import * as React from "react";
import { SVGProps } from "react";
const SvgHeart = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg
    {...props}
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.401 4.775c.957.406 1.848 1.068 2.593 1.779.742-.71 1.627-1.368 2.581-1.772 1.338-.567 2.93-.665 4.322.471 1.181.963 1.92 2.18 2.083 3.52.163 1.341-.27 2.68-1.196 3.848l-.218.276c-.636.808-1.694 2.154-2.859 3.355-1.068 1.102-2.32 2.157-3.118 2.83-.209.175-.386.325-.522.442l-.013.012c-.06.052-.142.124-.222.183a1.399 1.399 0 0 1-.442.224 1.41 1.41 0 0 1-.79 0 1.4 1.4 0 0 1-.443-.224c-.08-.06-.162-.13-.222-.183l-.013-.012c-.136-.118-.316-.268-.526-.446-.8-.672-2.051-1.725-3.115-2.827-1.117-1.157-2.13-2.452-2.767-3.265-.106-.136-.202-.259-.287-.365-.925-1.17-1.355-2.502-1.194-3.841.16-1.334.89-2.548 2.048-3.518 1.381-1.158 2.982-1.054 4.32-.487Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgHeart;
