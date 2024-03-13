
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconBora = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M6.984 5h5.589c2.19 0 6.094 2.104 6.141 6.613.03 2.828-1.534 7.101-6.878 7.101C8.707 18.714 5 16.4 5 12.45V7.104C5 6.427 5.643 5 6.984 5m1.68 2.143c.476 0 .622.343.622.514v1.119c.407-.279 1.65-.772 2.751-.772 1.397 0 4.106 1.175 4.106 4.016 0 2.837-2.194 4.076-4.106 4.123-1.911.043-3.536-1.174-4.011-2.456-.052-.214-.06-.72.325-.926.378-.205.84.073.935.36.175.536 1.311 1.736 2.751 1.736 1.642 0 2.82-1.17 2.82-2.837 0-1.671-1.346-2.734-2.82-2.734s-2.396.943-2.854 1.907c-.124.27-.356.42-.66.257-.172-.09-.523-.343-.523-.66V7.657c0-.201.193-.514.664-.514m4.479 4.928a1.071 1.071 0 1 1-2.143 0 1.071 1.071 0 0 1 2.143 0" fillRule="evenodd" clipRule="evenodd"/>
        </>
      ) : (
        <>
          <path fill="url(#BORA__a)" d="M6.984 5h5.589c2.19 0 6.094 2.104 6.141 6.613.03 2.828-1.534 7.101-6.878 7.101C8.707 18.714 5 16.4 5 12.45V7.104C5 6.427 5.643 5 6.984 5m1.68 2.143c.476 0 .622.343.622.514v1.119c.407-.279 1.65-.772 2.751-.772 1.397 0 4.106 1.175 4.106 4.016 0 2.837-2.194 4.076-4.106 4.123-1.911.043-3.536-1.174-4.011-2.456-.052-.214-.06-.72.325-.926.378-.205.84.073.935.36.175.536 1.311 1.736 2.751 1.736 1.642 0 2.82-1.17 2.82-2.837 0-1.671-1.346-2.734-2.82-2.734s-2.396.943-2.854 1.907c-.124.27-.356.42-.66.257-.172-.09-.523-.343-.523-.66V7.657c0-.201.193-.514.664-.514m4.479 4.928a1.071 1.071 0 1 1-2.143 0 1.071 1.071 0 0 1 2.143 0" fillRule="evenodd" clipRule="evenodd"/><defs><linearGradient id="BORA__a" x1="5" x2="16.049" y1="5.868" y2="17.83" gradientUnits="userSpaceOnUse"><stop stopColor="#7B6BE8"/><stop offset=".5" stopColor="#5480EF"/><stop offset="1" stopColor="#2CA6F2"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

IconBora.displayName = 'Bora';

export default IconBora;
