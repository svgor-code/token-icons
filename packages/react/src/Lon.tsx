
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconLon = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M12.041 5.143a7 7 0 0 0-.736.04c-3.464.365-6.162 3.279-6.162 6.819 0 3.786 3.087 6.856 6.898 6.855h.016a6.9 6.9 0 0 0 3.154-.765c.279-.144.158-.563-.155-.554h-.013c-2.759.07-5.331-1.12-6.34-3.27-.518-1.1-.708-1.994-.27-3.41.145-.58.487-1.119.886-1.536q.045-.054.099-.103a1 1 0 0 1 .072-.065l.03-.03.024-.02a.4.4 0 0 1 .058-.046c.68-.551 1.524-.918 2.4-.915 2.058 0 3.856 1.68 3.856 3.653 0 .678-.311 1.39-.689 1.957 1.646-.565 2.811-2.137 2.811-3.909A3.96 3.96 0 0 0 16.963 7.2a7 7 0 0 0-.863-.744l-.003-.002a6.9 6.9 0 0 0-4.044-1.31z" fillRule="evenodd" clipRule="evenodd"/><path fill="currentColor" d="M17.945 9.86a4.08 4.08 0 0 1-2.69 3.846 4.057 4.057 0 0 1-4.904-1.814c-.172-.3-.306-.808-.398-1.241a.478.478 0 0 0-.86-.172c-.358.517-.356 1.292-.294 1.886q0 .009.002.018.032.323.116.637.1.414.276.802c.859 1.917 2.791 3.136 5.323 2.932.25-.021.488-.098.734-.148 2.089-.439 3.595-2.326 3.607-4.548 0-1.782-.663-3.535-1.888-4.838.63.736.975 1.672.976 2.64" fillRule="evenodd" clipRule="evenodd"/>
        </>
      ) : (
        <>
          <path fill="url(#LON__a)" d="M12.04 5.143a7 7 0 0 0-.735.04c-3.464.365-6.162 3.279-6.162 6.819 0 3.786 3.087 6.856 6.898 6.855h.015a6.9 6.9 0 0 0 3.155-.765c.278-.144.158-.563-.156-.554h-.012c-2.76.07-5.332-1.12-6.34-3.27-.518-1.1-.709-1.994-.27-3.41.144-.58.487-1.119.886-1.536q.045-.054.098-.103a1 1 0 0 1 .072-.065l.03-.03.025-.02a.4.4 0 0 1 .058-.046c.68-.551 1.523-.918 2.4-.915 2.057 0 3.856 1.68 3.856 3.653 0 .678-.312 1.39-.689 1.957 1.645-.565 2.811-2.137 2.81-3.909A3.96 3.96 0 0 0 16.963 7.2a7 7 0 0 0-.863-.744l-.002-.002a6.9 6.9 0 0 0-4.045-1.31z" fillRule="evenodd" clipRule="evenodd"/><path fill="url(#LON__b)" d="M17.944 9.86a4.08 4.08 0 0 1-2.69 3.846 4.057 4.057 0 0 1-4.904-1.814c-.171-.3-.306-.808-.397-1.241a.478.478 0 0 0-.861-.172c-.358.517-.356 1.292-.294 1.886q0 .009.002.018.033.323.116.637.101.414.277.802c.858 1.917 2.79 3.136 5.323 2.932.25-.021.488-.098.734-.148 2.088-.439 3.594-2.326 3.607-4.548 0-1.782-.664-3.535-1.888-4.838.629.736.975 1.672.975 2.64" fillRule="evenodd" clipRule="evenodd"/><defs><linearGradient id="LON__a" x1="5.147" x2="18.861" y1="18.914" y2="18.914" gradientUnits="userSpaceOnUse"><stop stopColor="#2D2D4B"/><stop offset="1" stopColor="#1D1D3A"/></linearGradient><linearGradient id="LON__b" x1="8.776" x2="18.857" y1="16.735" y2="16.735" gradientUnits="userSpaceOnUse"><stop stopColor="#858EB7"/><stop offset="1" stopColor="#705E94"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

IconLon.displayName = 'Lon';

export default IconLon;
