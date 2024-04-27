import * as React from "react";
import { SVGProps } from "react";
const SvgShoppingBag = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
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
      d="M7.25 7.256a7.353 7.353 0 0 1 .53-1.62c.338-.716.832-1.387 1.552-1.877C10.058 3.265 10.948 3 12 3c1.255 0 2.248.441 2.994 1.135.723.673 1.17 1.54 1.45 2.349.09.256.164.512.227.764.677.068 1.246.175 1.768.444.623.32 1.182.832 1.555 1.424.435.69.57 1.523.75 2.624l.418 2.555c.138.843.252 1.54.295 2.114.044.599.022 1.157-.173 1.706a4.062 4.062 0 0 1-1.65 2.054c-.49.306-1.021.45-1.605.535-.559.081-1.244.119-2.07.165l-.044.002c-1.33.073-2.726.129-3.915.129s-2.585-.056-3.915-.129l-.044-.002c-.826-.046-1.511-.084-2.07-.165-.584-.086-1.115-.229-1.605-.535a4.062 4.062 0 0 1-1.65-2.054c-.195-.549-.217-1.107-.173-1.706.043-.574.157-1.27.295-2.114l.418-2.555c.18-1.101.315-1.934.75-2.624a4.087 4.087 0 0 1 1.555-1.424c.502-.259 1.046-.367 1.69-.436Zm2.105-.16c.066-.212.143-.416.233-.606.224-.473.51-.833.87-1.077C10.81 5.173 11.296 5 12 5c.745 0 1.252.246 1.631.6.391.363.69.883.906 1.49C13.662 7.037 12.777 7 12 7c-.81 0-1.735.04-2.645.096Zm-2.342 2.21C7.003 9.547 7 9.78 7 10a1 1 0 1 0 2 0c0-.29.007-.584.024-.878C10.056 9.052 11.114 9 12 9c.881 0 1.933.05 2.96.121.04.445.04.774.04.879a1 1 0 1 0 2 0v-.005c0-.094 0-.342-.021-.69.247.041.402.091.546.165.304.157.595.423.777.712.19.303.274.696.497 2.062l.382 2.33c.147.898.245 1.508.281 1.985.035.463 0 .708-.063.887a2.064 2.064 0 0 1-.825 1.027c-.164.102-.391.187-.834.252-.459.066-1.054.1-1.936.149A72.383 72.383 0 0 1 12 19c-1.135 0-2.49-.053-3.804-.126-.882-.049-1.477-.082-1.936-.15-.443-.064-.67-.149-.834-.251a2.064 2.064 0 0 1-.825-1.027c-.064-.179-.098-.424-.063-.887.036-.477.134-1.087.281-1.984l.382-2.331c.223-1.366.307-1.76.497-2.062.182-.289.473-.555.777-.712.142-.073.295-.123.538-.164Z"
      fill={props.color || "#000"}
    />
  </svg>
);
export default SvgShoppingBag;