
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconBrg = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M9.664 4.714a2.387 2.387 0 0 0-2.378 2.4v2.238c0 .685.505 2.262.505 2.262A3.84 3.84 0 0 1 9 10.217V6.43h3.214c1.633 0 3.189 1.607 3.189 3.257 0 1.585-1.217 2.978-2.859 2.978-.754 0-1.543-.342-1.946-.535-.514.3-.977 1.157-.977 1.585.755.425 1.997.857 2.923.857 2.537 0 4.599-1.997 4.599-4.56v-.66c0-2.562-2.057-4.637-4.599-4.637z"/><path fill="currentColor" d="M7.286 16.886c0 1.328 1.067 2.4 2.378 2.4h2.88c2.22 0 3.665-1.393 4.269-3.215.386-1.16.377-2.344.077-3.514a4.4 4.4 0 0 1-1.487 1.586v.343c-.137 1.517-1.646 3.085-3.189 3.085H9V14.65a3.446 3.446 0 0 1 3.544-3.506c.592 0 1.102.188 1.586.514.214-.085.848-.943.848-1.585a4.7 4.7 0 0 0-2.434-.72 5.28 5.28 0 0 0-5.258 5.297z"/>
        </>
      ) : (
        <>
          <path fill="#F7B718" d="M9.665 4.714a2.387 2.387 0 0 0-2.379 2.4v2.238c0 .685.506 2.262.506 2.262A3.84 3.84 0 0 1 9 10.217V6.43h3.215c1.633 0 3.188 1.607 3.188 3.257 0 1.585-1.217 2.978-2.858 2.978-.755 0-1.543-.342-1.946-.535-.514.3-.977 1.157-.977 1.585.754.425 1.997.857 2.923.857 2.537 0 4.598-1.997 4.598-4.56v-.66c0-2.562-2.057-4.637-4.598-4.637z"/><path fill="#F7B718" d="M7.286 16.886c0 1.328 1.067 2.4 2.379 2.4h2.88c2.22 0 3.664-1.393 4.268-3.215.386-1.16.378-2.344.078-3.514a4.4 4.4 0 0 1-1.488 1.586v.343c-.137 1.517-1.645 3.085-3.188 3.085H9V14.65a3.446 3.446 0 0 1 3.545-3.506c.591 0 1.101.188 1.585.514.215-.085.849-.943.849-1.585a4.7 4.7 0 0 0-2.434-.72 5.28 5.28 0 0 0-5.259 5.297z"/>
        </>
      )}
    </BaseIcon>
));

IconBrg.displayName = 'Brg';

export default IconBrg;
