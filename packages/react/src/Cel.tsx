
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconCel = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M16.989 7.071c.124.189.133.566-.06.845-.197.278-.729.458-1.157.043-1.119-1.08-2.833-1.29-3.635-1.29A5.35 5.35 0 0 0 6.63 12c.043 2.211 1.539 5.331 5.507 5.331 1.115 0 2.983-.48 3.926-1.465.163-.172.746-.065.952.192.21.258.15.858-.086 1.06a7.54 7.54 0 0 1-4.796 1.74c-3.857 0-6.99-3.07-6.99-6.858 0-3.789 3.129-6.857 6.994-6.857 3.215 0 4.77 1.804 4.852 1.928"/><path fill="currentColor" d="M18.429 11.143a1.286 1.286 0 1 0 0-2.572 1.286 1.286 0 0 0 0 2.572"/><path fill="currentColor" d="M18.429 10.286a.429.429 0 1 0 0-.858.429.429 0 0 0 0 .858"/>
        </>
      ) : (
        <>
          <path fill="#4055A6" d="M16.988 7.071c.125.189.133.566-.06.845-.197.278-.728.458-1.157.043-1.118-1.08-2.833-1.29-3.634-1.29A5.35 5.35 0 0 0 6.63 12c.043 2.211 1.538 5.331 5.507 5.331 1.114 0 2.983-.48 3.926-1.465.162-.172.745-.065.951.192.21.258.15.858-.086 1.06a7.54 7.54 0 0 1-4.795 1.74c-3.858 0-6.99-3.07-6.99-6.858 0-3.789 3.128-6.857 6.994-6.857 3.214 0 4.77 1.804 4.851 1.928"/><path fill="#4055A6" d="M18.428 11.143a1.286 1.286 0 1 0 0-2.572 1.286 1.286 0 0 0 0 2.572"/><path fill="#4055A6" d="M18.428 10.286a.429.429 0 1 0 0-.858.429.429 0 0 0 0 .858"/>
        </>
      )}
    </BaseIcon>
));

IconCel.displayName = 'Cel';

export default IconCel;
