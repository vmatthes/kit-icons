import * as React from "react";
import { SVGProps } from "react";
const SvgThumbDown = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg
    {...props}
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 15.423V3.233C15.043 3.115 13.923 3 12.852 3c-1.15 0-2.278.133-3.237.258l-.413.055c-.798.106-1.409.187-1.857.187-1.686 0-3.151 1.2-3.419 2.871l-.882 5.093-.003.015c-.33 2.09 1.327 3.921 3.42 3.921h2.695v2.627c0 1.666 1.377 2.973 3.023 2.973a1.675 1.675 0 0 0 1.528-.98l.002-.003c.014-.024.065-.115.179-.308l.075-.128c.107-.181.238-.401.376-.641.344-.595.765-1.349 1.072-2.027.213-.47.414-1 .589-1.49ZM18 13.8h.36c1.434 0 2.64-1.14 2.64-2.6V6.1c0-1.46-1.206-2.6-2.64-2.6-.097 0-.216-.007-.36-.02V13.8Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgThumbDown;
