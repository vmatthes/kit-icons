import * as React from "react";
import { SVGProps } from "react";
const SvgLockOpen = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
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
      d="M9.588 6.49c-.353.746-.51 1.687-.564 2.633l.16-.01A43.531 43.531 0 0 1 12 9c.863 0 1.857.047 2.816.112l.2.013c1.23.082 2.165.145 2.966.602a4.098 4.098 0 0 1 1.618 1.73c.224.463.316.94.36 1.46.04.495.04 1.094.04 1.812v.542c0 .718 0 1.317-.04 1.812-.044.52-.136.997-.36 1.46a4.098 4.098 0 0 1-1.618 1.73c-.801.457-1.736.52-2.967.602l-.199.013A43.52 43.52 0 0 1 12 21c-.863 0-1.857-.047-2.816-.112l-.2-.014c-1.23-.081-2.165-.144-2.966-.6A4.097 4.097 0 0 1 4.4 18.541c-.224-.462-.316-.94-.36-1.46C4 16.589 4 15.99 4 15.272v-.542c0-.718 0-1.317.04-1.812.044-.52.136-.997.36-1.46a4.098 4.098 0 0 1 1.618-1.73c.308-.176.636-.294.993-.376.042-1.169.215-2.544.769-3.716.338-.715.832-1.386 1.552-1.876C10.058 3.265 10.948 3 12 3c1.114 0 2.028.347 2.747.922.703.562 1.172 1.301 1.488 2.026a1 1 0 1 1-1.833.8c-.231-.53-.53-.965-.904-1.263C13.141 5.199 12.67 5 12 5c-.703 0-1.19.172-1.543.413-.36.244-.645.604-.869 1.077ZM11 14a1 1 0 1 1 2 0v1a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2v-1Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgLockOpen;
