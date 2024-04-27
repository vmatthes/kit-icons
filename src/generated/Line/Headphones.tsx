import * as React from "react";
import { SVGProps } from "react";
const SvgHeadphones = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
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
      d="M6.695 7.07c-.687.882-1.1 2.098-1.1 3.728 0 .726.1 1.614.27 2.292.398-.072.851-.12 1.3-.07.516.058 1.088.253 1.532.741.37.407.628.965.81 1.494.187.55.324 1.164.405 1.762.081.595.111 1.205.069 1.745-.038.481-.147 1.117-.517 1.572-.433.533-1.066.66-1.538.666-.49.006-1.004-.109-1.47-.269-.92-.315-1.922-.9-2.533-1.572-.726-.798-.86-1.91-.893-2.69-.015-.363-.009-.72-.004-1.013l.002-.118c.005-.352 0-.533-.014-.621a1 1 0 0 1 .906-1.163 12.169 12.169 0 0 1-.326-2.756c0-2.521.831-4.52 2.391-5.873C7.522 3.592 9.637 3 12 3c2.383 0 4.519.653 6.072 2.034C19.642 6.431 20.5 8.471 20.5 11c0 .887-.12 1.747-.346 2.563a1 1 0 0 1 .832 1.154c-.015.088-.02.269-.014.62l.002.12c.005.292.01.649-.004 1.012-.033.78-.167 1.892-.893 2.69-.611.672-1.613 1.257-2.533 1.572-.466.16-.98.275-1.47.269-.472-.006-1.105-.133-1.538-.666-.37-.455-.479-1.09-.517-1.572a8.403 8.403 0 0 1 .069-1.745 9.51 9.51 0 0 1 .406-1.762c.18-.529.439-1.087.809-1.494.444-.488 1.016-.683 1.531-.74.477-.053.958.003 1.371.083.192-.665.295-1.371.295-2.104 0-1.687-.46-2.973-1.22-3.91a4.37 4.37 0 0 1-1.028.663c-.51.225-.978.269-1.433.239-.284-.02-.612-.074-.917-.125-.112-.02-.222-.038-.325-.053a9.98 9.98 0 0 0-3.15 0c-.103.015-.213.033-.325.052a9.78 9.78 0 0 1-.919.124 2.96 2.96 0 0 1-1.432-.237 4.417 4.417 0 0 1-1.056-.684Zm8.98-1.273C14.687 5.283 13.45 5 12 5c-1.49 0-2.735.271-3.712.771.105.07.192.118.265.15a.972.972 0 0 0 .5.074c.18-.012.355-.041.604-.083.131-.022.283-.048.468-.076a12.028 12.028 0 0 1 3.755 0l.47.077c.248.042.42.071.6.083a.96.96 0 0 0 .497-.074c.064-.028.139-.068.227-.125Zm-10.647 9.56-.002.136c-.005.297-.01.592.003.892.03.734.162 1.196.373 1.428.327.36 1.008.788 1.702 1.026.34.117.615.163.796.16h.026c.02-.073.045-.199.06-.395.03-.363.012-.826-.055-1.318a7.515 7.515 0 0 0-.317-1.384c-.147-.43-.297-.686-.396-.795-.024-.026-.083-.077-.273-.099-.204-.022-.48 0-.824.07-.3.06-.599.143-.905.228l-.188.052Zm2.993 3.63H8.02l-.003.001.004-.001Zm10.951-3.63-.188-.051a12.797 12.797 0 0 0-.905-.228c-.345-.07-.62-.092-.824-.07-.19.022-.249.073-.273.1-.1.108-.249.365-.396.794-.14.408-.25.894-.317 1.384a6.424 6.424 0 0 0-.056 1.318c.016.196.042.322.061.395a.57.57 0 0 0 .026 0c.18.003.455-.043.796-.16.694-.238 1.375-.667 1.701-1.026.212-.232.343-.694.374-1.428.013-.3.008-.595.003-.892l-.002-.135Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgHeadphones;
