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
      opacity={0.15}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.029 7.653c-.772.385-1.408.972-1.585 1.847-.193.955-.239 1.691-.278 2.32-.063 1.017-.109 1.253-.734 2.18-.222.329-.444.634-.645.91-.714.98-1.158 1.59-.368 1.59 0 0 4.004.5 6.581.5 1.951 0 4.72-.287 5.95-.426L9.029 7.653Zm7.903 5.075c-.052-.243-.074-.518-.098-.908-.04-.629-.085-1.365-.278-2.32C16.15 7.5 13.35 7 12 7c-.218 0-.475.013-.752.043l5.684 5.685Z"
      fill={props.color || "#000"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.707 3.293a1 1 0 0 0-1.414 1.414l3.566 3.567a3.25 3.25 0 0 0-.395 1.028c-.207 1.022-.256 1.814-.295 2.447v.009c-.033.525-.058.714-.11.878-.052.158-.149.35-.456.805-.21.311-.422.602-.624.88l-.009.011a20.63 20.63 0 0 0-.486.686c-.136.205-.29.454-.383.708-.075.203-.249.78.163 1.29.336.418.826.476 1.087.483l.127.015.495.058a94.112 94.112 0 0 0 3.036.29A2.72 2.72 0 0 0 9 18.09C9 19.74 10.387 21 12 21s3-1.26 3-2.91c0-.077-.003-.153-.01-.227a78.52 78.52 0 0 0 1.343-.116l2.96 2.96a1 1 0 0 0 1.414-1.414l-16-16Zm9.774 12.602L8.4 9.815c-.16.827-.2 1.472-.237 2.067-.03.492-.06.929-.202 1.369-.145.446-.383.837-.701 1.308-.232.344-.463.66-.662.934l-.091.126c.37.04.826.088 1.33.135C9.153 15.88 10.76 16 12 16c.742 0 1.616-.043 2.48-.105Zm1.095-6.197c.153.759.206 1.366.243 1.917l4.06 4.06a3.75 3.75 0 0 0-.364-.657 20.57 20.57 0 0 0-.485-.686l-.009-.012a29.798 29.798 0 0 1-.624-.88c-.307-.455-.404-.646-.455-.804-.053-.164-.078-.353-.11-.878v-.008c-.04-.634-.089-1.426-.296-2.448-.3-1.477-1.47-2.297-2.526-2.728a6.051 6.051 0 0 0-.086-.034c.05-.197.076-.408.076-.63C15 4.26 13.613 3 12 3c-1.285 0-2.426.8-2.837 1.958l3.045 3.046c.575.024 1.363.143 2.047.422.783.32 1.215.75 1.32 1.272ZM12 5c-.596 0-1 .45-1 .91 0 .076.01.125.02.153.364-.045.699-.063.98-.063s.616.018.98.063A.506.506 0 0 0 13 5.91c0-.46-.404-.91-1-.91Zm.991 12.98c-.343.013-.677.02-.991.02-.314 0-.648-.007-.991-.02a.626.626 0 0 0-.009.11c0 .46.404.91 1 .91s1-.45 1-.91a.618.618 0 0 0-.009-.11Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgNotificationOff;
