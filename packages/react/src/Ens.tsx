
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconEns = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M6.9 10.526c.154.33.527.973.527.973l4.329-7.213L7.534 7.26a1.86 1.86 0 0 0-.6.664 3.1 3.1 0 0 0-.03 2.602zM5.19 12.9a4.89 4.89 0 0 0 1.886 3.531l4.676 3.283s-2.919-4.243-5.383-8.473a4.3 4.3 0 0 1-.497-1.44 2.3 2.3 0 0 1 0-.69l-.189.365a5.6 5.6 0 0 0-.501 1.628c-.052.6-.043 1.2.012 1.8zm11.91.574q-.247-.495-.527-.973l-4.324 7.213 4.221-2.97c.249-.171.454-.398.6-.668a3.1 3.1 0 0 0 .026-2.602zm1.71-2.374a4.88 4.88 0 0 0-1.886-3.531L12.25 4.286s2.918 4.243 5.383 8.473c.248.445.415.934.492 1.44.035.227.035.462 0 .69l.189-.365c.253-.514.42-1.063.506-1.628.051-.6.043-1.2-.013-1.8z"/>
        </>
      ) : (
        <>
          <path fill="url(#ENS__a)" d="M6.9 10.526c.154.33.527.973.527.973l4.329-7.213L7.534 7.26a1.86 1.86 0 0 0-.6.664 3.1 3.1 0 0 0-.03 2.602zM5.19 12.9a4.89 4.89 0 0 0 1.886 3.531l4.676 3.283s-2.919-4.243-5.383-8.473a4.3 4.3 0 0 1-.497-1.44 2.3 2.3 0 0 1 0-.69l-.189.365a5.6 5.6 0 0 0-.501 1.628c-.052.6-.043 1.2.012 1.8zm11.91.574q-.247-.495-.527-.973l-4.324 7.213 4.221-2.97c.249-.171.454-.398.6-.668a3.1 3.1 0 0 0 .026-2.602zm1.71-2.374a4.88 4.88 0 0 0-1.886-3.531L12.25 4.286s2.918 4.243 5.383 8.473c.248.445.415.934.492 1.44.035.227.035.462 0 .69l.189-.365c.253-.514.42-1.063.506-1.628.051-.6.043-1.2-.013-1.8z"/><defs><linearGradient id="ENS__a" x1="7.962" x2="18.572" y1="5.939" y2="18.505" gradientUnits="userSpaceOnUse"><stop stopColor="#7C97FA"/><stop offset="1" stopColor="#53B1EF"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

IconEns.displayName = 'Ens';

export default IconEns;
