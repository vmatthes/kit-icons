import * as React from "react";
import { SVGProps } from "react";
const SvgBook = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg
    {...props}
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 18.92c-.6.348-1.37.408-2.022.097a5.786 5.786 0 0 0-.588-.248c-1.099-.377-2.82-.292-4.062-.14C4.147 18.774 3 17.874 3 16.601V7.463c0-.954.677-1.788 1.636-1.957.848-.15 2.236-.376 3.291-.453a21.68 21.68 0 0 1 1.194-.048A3.74 3.74 0 0 1 12 6.275a3.74 3.74 0 0 1 2.88-1.27c.409.007.82.021 1.193.048 1.055.077 2.443.303 3.291.453A1.983 1.983 0 0 1 21 7.463V16.6c0 1.273-1.147 2.173-2.328 2.028-1.243-.152-2.963-.237-4.062.14-.168.058-.37.143-.588.248A2.188 2.188 0 0 1 12 18.92Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgBook;
