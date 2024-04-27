import * as React from "react";
import { SVGProps } from "react";
const SvgKeyboard = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
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
      d="M3 10c0-.933 0-1.4.185-1.757.163-.313.423-.568.743-.728.364-.182.84-.182 1.792-.182 0 0 3.519-.333 5.78-.333s5.78.333 5.78.333c.952 0 1.428 0 1.792.182.32.16.58.415.743.728C20 8.6 20 9.067 20 10v5c0 .933 0 1.4-.185 1.757a1.684 1.684 0 0 1-.743.728c-.364.182-.84.182-1.792.182 0 0-3.519.333-5.78.333s-5.78-.333-5.78-.333c-.952 0-1.428 0-1.792-.182-.32-.16-.58-.415-.743-.728C3 16.4 3 15.933 3 15v-5Z"
      fill={props.color || "#000"}
    />
    <path
      d="M8 13a1 1 0 1 0 0 2h7a1 1 0 1 0 0-2H8ZM6 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0ZM10 10a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM12 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0ZM16 10a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
      fill={props.color || "#000"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.5 6c-2.122 0-5.29.284-5.798.33l-.028.003H5.644c-.437 0-.825 0-1.149.029-.334.028-.678.09-1.014.258a2.684 2.684 0 0 0-1.183 1.162c-.18.345-.243.699-.271 1.04C2 9.142 2 9.528 2 9.962v5.076c0 .434 0 .82.027 1.14.028.341.092.695.271 1.04.262.503.677.909 1.183 1.162.336.167.68.23 1.014.258.324.028.712.029 1.15.029h.028l.029.002c.509.047 3.676.331 5.798.331s5.29-.284 5.798-.33l.028-.003H17.356c.437 0 .825 0 1.149-.029.334-.028.678-.09 1.014-.258a2.683 2.683 0 0 0 1.183-1.162c.18-.345.243-.699.271-1.04.027-.32.027-.706.027-1.14V9.962c0-.434 0-.82-.027-1.14-.028-.341-.092-.695-.271-1.04a2.683 2.683 0 0 0-1.183-1.162c-.336-.167-.68-.23-1.014-.258a14.384 14.384 0 0 0-1.15-.029h-.028l-.029-.002C16.79 6.284 13.622 6 11.5 6ZM5.885 8.322C6.408 8.274 9.485 8 11.5 8s5.092.274 5.615.322h.006l.077.007.073.004h.085c.464 0 .757.002.978.021.21.018.273.046.29.056a.684.684 0 0 1 .303.294c.007.013.035.07.053.284.02.227.02.528.02 1.012v5c0 .483 0 .785-.02 1.012-.018.214-.046.271-.053.284a.684.684 0 0 1-.302.294c-.018.01-.082.038-.291.056-.22.019-.514.02-.978.02h-.006l-.079.001a1.991 1.991 0 0 0-.15.01h-.006c-.523.049-3.6.323-5.615.323s-5.092-.274-5.615-.322h-.006a2.51 2.51 0 0 0-.15-.01l-.078-.001h-.007c-.464 0-.757-.002-.978-.021-.21-.018-.272-.046-.29-.056a.684.684 0 0 1-.303-.294c-.007-.013-.035-.07-.053-.284C4 15.785 4 15.483 4 15v-5c0-.484 0-.785.02-1.012.018-.214.046-.271.053-.284a.684.684 0 0 1 .302-.294c.019-.01.082-.038.291-.056.22-.019.514-.02.978-.02h.006l.079-.001a1.964 1.964 0 0 0 .15-.01h.006Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgKeyboard;