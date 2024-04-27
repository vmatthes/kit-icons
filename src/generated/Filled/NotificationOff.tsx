import * as React from "react";
import { SVGProps } from "react";
const SvgNotificationOff = (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.707 3.293a1 1 0 0 0-1.414 1.414l3.566 3.567a3.25 3.25 0 0 0-.395 1.028c-.207 1.022-.256 1.814-.295 2.447v.009c-.033.525-.058.714-.11.878-.052.158-.149.35-.456.805-.21.311-.422.602-.624.88l-.009.011a20.63 20.63 0 0 0-.486.686c-.136.205-.29.454-.383.708-.075.203-.249.78.163 1.29.336.418.826.476 1.087.483l.127.015.495.058a94.122 94.122 0 0 0 3.036.29A2.72 2.72 0 0 0 9 18.09C9 19.74 10.387 21 12 21s3-1.26 3-2.91c0-.077-.003-.153-.01-.227.468-.036.923-.076 1.343-.116l2.96 2.96a1 1 0 0 0 1.414-1.414l-16-16Zm8.284 14.687c-.343.013-.677.02-.991.02-.314 0-.648-.007-.991-.02a.626.626 0 0 0-.009.11c0 .46.404.91 1 .91s1-.45 1-.91a.618.618 0 0 0-.009-.11ZM19.516 15.018c.127.191.27.421.364.658L9.163 4.958C9.573 3.8 10.715 3 12 3c1.613 0 3 1.26 3 2.91 0 .222-.026.433-.076.63.029.01.057.022.086.034 1.056.43 2.227 1.25 2.526 2.728.207 1.022.256 1.814.295 2.447v.009c.034.525.058.714.11.878.052.158.149.35.456.805.21.311.422.602.624.88l.009.011c.172.236.344.473.486.686ZM12 5c-.596 0-1 .45-1 .91 0 .076.01.125.02.153.364-.045.699-.063.98-.063s.616.018.98.063A.506.506 0 0 0 13 5.91c0-.46-.404-.91-1-.91Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgNotificationOff;
