import * as React from "react";
import { SVGProps } from "react";
const SvgStar = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
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
      d="M11.391 4.687c.196-.39.294-.584.426-.646a.43.43 0 0 1 .366 0c.132.062.23.257.426.646l1.856 3.698a.908.908 0 0 0 .129.217c.037.04.082.072.132.094.056.026.12.035.25.054l4.15.596c.438.063.656.095.758.2.088.091.13.217.112.341-.019.144-.177.295-.494.598L16.5 13.362a.917.917 0 0 0-.171.187.413.413 0 0 0-.05.153c-.008.06.003.124.025.25l.709 4.063c.074.428.112.643.041.77a.424.424 0 0 1-.295.21c-.145.027-.34-.074-.732-.276l-3.711-1.92a.934.934 0 0 0-.234-.1.432.432 0 0 0-.164 0 .934.934 0 0 0-.234.1l-3.711 1.92c-.392.202-.587.303-.732.277a.424.424 0 0 1-.295-.211c-.07-.127-.033-.342.041-.77l.709-4.062a.898.898 0 0 0 .026-.25.412.412 0 0 0-.05-.154.917.917 0 0 0-.172-.188l-3.002-2.876c-.317-.303-.475-.454-.494-.598a.413.413 0 0 1 .112-.341c.101-.105.32-.137.757-.2l4.152-.596c.129-.019.193-.028.25-.054a.424.424 0 0 0 .131-.094.91.91 0 0 0 .13-.217l1.855-3.698Z"
      fill={props.color || "#000"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.393 3.135c.384-.18.83-.18 1.214 0 .34.16.526.437.614.578.09.145.182.328.267.497l.015.029 1.779 3.545 4.019.577c.19.028.394.057.56.096.16.038.482.124.743.395.298.31.441.738.384 1.168-.051.378-.266.64-.373.763-.112.129-.26.27-.397.402l-.024.023-2.874 2.752.678 3.883.005.032c.033.186.068.387.082.558.013.164.03.502-.155.835a1.424 1.424 0 0 1-.992.712c-.366.067-.677-.049-.83-.111a6.746 6.746 0 0 1-.511-.247L12 17.762l-3.597 1.86c-.17.088-.352.182-.51.247-.154.063-.464.178-.831.11a1.424 1.424 0 0 1-.992-.71c-.184-.334-.168-.672-.155-.836.014-.17.05-.372.082-.558l.005-.032.678-3.883-2.874-2.752-.023-.023c-.138-.131-.286-.273-.398-.402-.107-.123-.322-.385-.372-.762-.058-.43.085-.86.383-1.17.26-.27.584-.356.743-.394a6.762 6.762 0 0 1 .592-.1l3.987-.573 1.78-3.545.014-.03c.085-.168.176-.351.267-.496.088-.141.273-.418.614-.578ZM12 5.704l-1.571 3.13a1.477 1.477 0 0 0-.01.02c-.04.08-.134.274-.286.435a1.424 1.424 0 0 1-.443.317 1.782 1.782 0 0 1-.523.134l-3.48.5 2.505 2.4.017.015c.065.06.224.21.332.402.091.16.15.338.173.523.027.22-.013.436-.029.522a1.957 1.957 0 0 0-.004.022l-.595 3.41 3.139-1.623.02-.01c.08-.043.27-.143.484-.185.179-.034.363-.034.542 0 .214.042.404.142.483.184l.021.011 3.139 1.623-.595-3.41-.004-.022a1.745 1.745 0 0 1-.03-.522 1.41 1.41 0 0 1 .174-.523c.108-.192.267-.341.332-.402l.017-.016 2.505-2.4-3.48-.5a1.781 1.781 0 0 1-.524-.134 1.424 1.424 0 0 1-.442-.316c-.152-.16-.247-.355-.286-.435a1.423 1.423 0 0 0-.01-.02L12 5.703Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgStar;
