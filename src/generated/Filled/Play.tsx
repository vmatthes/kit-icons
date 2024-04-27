import * as React from "react";
import { SVGProps } from "react";
const SvgPlay = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg
    {...props}
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.307 4.772c-.256-.186-.503-.365-.717-.491-.21-.124-.56-.306-.992-.278a1.69 1.69 0 0 0-1.277.73c-.228.328-.279.695-.3.945C6 5.933 6 6.248 6 6.588v10.824c0 .34 0 .655.021.91.021.25.072.617.3.945a1.69 1.69 0 0 0 1.277.73c.432.028.783-.154.992-.278.214-.126.46-.305.717-.49l7.468-5.42c.21-.152.42-.304.583-.448.176-.155.397-.38.523-.711.159-.418.159-.882 0-1.3a1.806 1.806 0 0 0-.523-.711c-.163-.144-.373-.296-.583-.448l-7.468-5.42Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgPlay;
