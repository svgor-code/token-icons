
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconKas = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M10.397 4.748a5.1 5.1 0 0 0-2.07.712c-.621.386-2.588 2.301-2.991 2.914-.536.814-.583 1.029-.617 2.657-.026 1.539.042 2.452.248 3.172.236.822.48 1.165 1.8 2.537 1.35 1.401 1.783 1.766 2.4 2.014a6.6 6.6 0 0 0 4.222.322c2.258-.588 3.972-1.95 4.971-3.943q.493-1.079.844-2.212c.124-.437.103-1.723-.034-2.241-.437-1.646-1.016-2.739-2.001-3.763a7.5 7.5 0 0 0-3.772-2.074c-.994-.13-2-.162-3-.095m3.531 3.103L14.572 12c-.192 1.294-.497 2.781-.677 4.071l-1.526-.356c.223-1.41.43-2.76.403-2.785-.013-.013-.064 0-.111.043-.643.501-3.073 2.323-3.073 2.323l-.93-1.179c.446-.369 2.764-2.186 2.764-2.186L8.657 9.72l.862-1.17 3.257 2.378s-.33-2.515-.395-2.794l1.543-.283z"/>
        </>
      ) : (
        <>
          <path fill="#71C9BB" d="M10.398 4.748a5.1 5.1 0 0 0-2.07.712c-.622.386-2.589 2.301-2.992 2.914-.536.814-.583 1.029-.617 2.657-.026 1.539.043 2.452.249 3.172.235.822.48 1.165 1.8 2.537 1.35 1.401 1.782 1.766 2.4 2.014a6.6 6.6 0 0 0 4.221.322c2.259-.588 3.973-1.95 4.971-3.943q.494-1.079.845-2.212c.124-.437.103-1.723-.034-2.241-.438-1.646-1.016-2.739-2.002-3.763a7.5 7.5 0 0 0-3.771-2.074c-.995-.13-2-.162-3-.095m3.531 3.103L14.572 12c-.193 1.294-.497 2.781-.677 4.071l-1.526-.356c.223-1.41.429-2.76.403-2.785-.013-.013-.064 0-.111.043-.643.501-3.073 2.323-3.073 2.323l-.93-1.179c.445-.369 2.764-2.186 2.764-2.186L8.658 9.72l.861-1.17 3.257 2.378s-.33-2.515-.394-2.794l1.543-.283z"/>
        </>
      )}
    </BaseIcon>
));

IconKas.displayName = 'Kas';

export default IconKas;
