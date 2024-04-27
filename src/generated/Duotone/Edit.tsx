import * as React from "react";
import { SVGProps } from "react";
const SvgEdit = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
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
      d="M12.45 7.05 5.3 14.2a2.101 2.101 0 0 0-.214.23c-.04.056-.075.116-.104.18a2.095 2.095 0 0 0-.094.299L4.15 17.6l-.107.476c-.18.806-.27 1.209-.153 1.499.102.25.309.454.56.553.291.115.686.022 1.476-.164.166-.039.325-.077.474-.114a90.85 90.85 0 0 0 2.706-.736c.145-.042.217-.063.286-.095.061-.027.12-.063.175-.102.061-.045.115-.1.223-.207l7.16-7.16 1.8-1.8a3.182 3.182 0 0 0-4.5-4.5l-1.8 1.8Z"
      fill={props.color || "#000"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.457 4.543a4.182 4.182 0 0 0-5.914 0l-8.95 8.95-.024.023a2.767 2.767 0 0 0-.29.325 2.002 2.002 0 0 0-.208.358c-.066.145-.106.295-.139.414l-.008.031-.745 2.714-.12.539c-.083.368-.16.71-.196.995-.038.297-.055.676.101 1.06.205.503.614.907 1.119 1.106.383.151.757.132 1.054.092.282-.039.618-.118.978-.203l.04-.01.486-.117a91.547 91.547 0 0 0 2.74-.745l.03-.009c.114-.032.258-.073.4-.138.121-.056.24-.126.348-.205.125-.092.232-.2.316-.284l.022-.022 8.96-8.96a4.182 4.182 0 0 0 0-5.914Zm-4.5 1.414a2.182 2.182 0 0 1 3.086 3.086l-.796.795c-.263-.494-.61-1.071-1.004-1.508-.581-.644-1.448-1.19-2.104-1.555l.818-.818ZM12.66 8.255l-6.652 6.652c-.06.06-.09.09-.11.112l-.002.001v.002c-.01.03-.02.07-.043.15l-.731 2.67-.102.452c-.094.423-.15.671-.172.852l-.003.025.02-.003c.177-.024.418-.08.833-.177.163-.039.318-.076.462-.112a90.134 90.134 0 0 0 2.814-.769h.001l.002-.001c.02-.02.05-.048.107-.106l6.675-6.675c-.042-.09-.089-.186-.14-.285-.259-.518-.572-1.054-.86-1.374-.356-.394-.993-.815-1.622-1.163-.17-.094-.332-.179-.477-.251Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgEdit;
