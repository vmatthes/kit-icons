import * as React from "react";
import { SVGProps } from "react";
const SvgDuplicate = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
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
      d="M8 7.275c0-1.002 0-1.503.197-1.913a2.05 2.05 0 0 1 .797-.864c.393-.229.875-.267 1.839-.344C11.883 4.07 13.047 4 14 4c.953 0 2.118.07 3.167.154.964.077 1.445.115 1.839.344.337.196.628.512.797.864.197.41.197.91.197 1.913v5.45c0 1.002 0 1.503-.197 1.914a2.05 2.05 0 0 1-.797.863c-.393.229-.875.267-1.839.344-1.05.084-2.215.154-3.167.154-.953 0-2.118-.07-3.167-.154-.964-.077-1.446-.115-1.839-.344a2.05 2.05 0 0 1-.797-.864C8 14.229 8 13.729 8 12.726v-5.45Z"
      fill={props.color || "#000"}
    />
    <path
      d="M14 7c.552 0 1 .336 1 .75V9h1.25c.414 0 .75.448.75 1s-.336 1-.75 1H15v1.25c0 .414-.448.75-1 .75s-1-.336-1-.75V11h-1.25c-.414 0-.75-.448-.75-1s.336-1 .75-1H13V7.75c0-.414.448-.75 1-.75Z"
      fill={props.color || "#000"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.753 3.157C11.811 3.073 13.008 3 14 3s2.19.073 3.247.157l.037.003c.45.036.847.068 1.179.122.358.06.706.154 1.046.352.51.297.94.762 1.196 1.295.171.357.237.72.267 1.086.028.343.028.753.028 1.223v5.524c0 .47 0 .88-.028 1.223-.03.367-.096.729-.267 1.086a3.05 3.05 0 0 1-1.196 1.295c-.34.198-.688.293-1.046.352-.332.054-.73.086-1.18.122l-.036.003-.247.02c0 .427-.002.804-.028 1.122-.03.367-.096.729-.267 1.086a3.05 3.05 0 0 1-1.196 1.295c-.34.198-.688.293-1.046.352-.332.054-.73.086-1.18.122l-.036.003C12.189 20.927 10.992 21 10 21c-.993 0-2.19-.073-3.247-.157l-.037-.003c-.45-.036-.847-.068-1.179-.122a2.982 2.982 0 0 1-1.046-.352 3.05 3.05 0 0 1-1.196-1.295c-.171-.357-.237-.72-.267-1.086A16.077 16.077 0 0 1 3 16.762v-5.524c0-.47 0-.88.028-1.223.03-.367.096-.729.267-1.086a3.05 3.05 0 0 1 1.196-1.295c.34-.198.688-.293 1.046-.352.332-.054.73-.086 1.18-.122l.036-.003.247-.02c0-.427.002-.804.028-1.122.03-.367.096-.729.267-1.086a3.05 3.05 0 0 1 1.196-1.295c.34-.198.688-.293 1.046-.352.332-.054.73-.086 1.18-.122l.036-.003ZM14 5c-.912 0-2.046.068-3.088.15-.498.04-.81.066-1.05.106-.222.036-.31.075-.365.106-.164.096-.316.26-.399.432-.025.053-.057.147-.077.383-.02.252-.021.58-.021 1.098v5.45c0 .517 0 .846.021 1.098.02.236.052.33.077.383.083.171.235.336.4.432.053.031.142.07.364.106.24.04.552.065 1.05.105 1.041.083 2.176.151 3.088.151.912 0 2.047-.068 3.088-.15.498-.04.81-.066 1.05-.106.222-.036.31-.075.365-.106.164-.096.316-.26.399-.432.025-.053.057-.147.077-.383.02-.252.021-.58.021-1.098v-5.45c0-.517 0-.846-.021-1.098-.02-.236-.052-.33-.077-.383a1.052 1.052 0 0 0-.4-.432c-.053-.031-.142-.07-.364-.106-.24-.04-.552-.065-1.05-.105C16.047 5.068 14.912 5 14 5Zm0 12c.316 0 .653-.007 1-.02 0 .375-.004.635-.021.843-.02.236-.052.33-.077.383a1.053 1.053 0 0 1-.4.432c-.053.031-.142.07-.364.106-.24.04-.552.065-1.05.105-1.041.083-2.176.15-3.088.15-.912 0-2.047-.067-3.088-.15-.498-.04-.81-.065-1.05-.105-.222-.036-.31-.075-.365-.106a1.052 1.052 0 0 1-.399-.432c-.025-.053-.057-.147-.077-.383A15.13 15.13 0 0 1 5 16.725v-5.45c0-.518 0-.846.021-1.098.02-.236.052-.33.077-.383.083-.171.235-.336.4-.432.053-.031.142-.07.364-.106.24-.04.552-.066 1.05-.105L7 9.144v3.618c0 .47 0 .88.028 1.223.03.367.096.729.267 1.086a3.05 3.05 0 0 0 1.196 1.295c.34.198.688.293 1.046.352.332.054.73.086 1.18.122l.036.003c1.058.084 2.255.157 3.247.157Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgDuplicate;