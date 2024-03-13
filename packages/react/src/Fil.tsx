
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconFil = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="m12.923 10.824-.317 1.607 3.007.402-.21.753-2.955-.402c-.21.654-.316 1.357-.58 1.96-.264.703-.527 1.406-.844 2.06-.422.854-1.16 1.457-2.163 1.607-.58.101-1.212.05-1.688-.301-.158-.1-.316-.301-.316-.452 0-.201-.004-.437.264-.553.267-.116.378-.034.527.05.159.151.317.352.422.553.317.402.739.452 1.16.15.475-.401.74-.954.897-1.506.317-1.206.633-2.362.897-3.567v-.202l-2.796-.402.106-.753 2.901.402.369-1.557-3.007-.453.106-.803 3.112.402c.106-.302.159-.553.264-.804.264-.905.527-1.809 1.16-2.613s1.372-1.306 2.48-1.256c.474 0 .949.151 1.266.503.052.05.158.15.158.25 0 .202 0 .453-.159.604-.21.15-.474.1-.686-.1-.158-.151-.263-.302-.421-.453-.317-.402-.792-.452-1.16-.1a3.2 3.2 0 0 0-.686.954c-.37 1.055-.633 2.16-1.003 3.266l2.902.402-.211.753z"/>
        </>
      ) : (
        <>
          <path fill="#0090FF" d="m12.923 10.824-.316 1.607 3.007.402-.211.753-2.954-.402c-.211.654-.317 1.357-.58 1.96-.264.703-.528 1.406-.845 2.06-.422.854-1.16 1.457-2.162 1.607-.58.101-1.213.05-1.688-.301-.158-.1-.317-.301-.317-.452 0-.201-.004-.437.264-.553s.378-.034.528.05c.158.151.316.352.422.553.316.402.738.452 1.16.15.475-.401.739-.954.897-1.506.316-1.206.633-2.362.896-3.567v-.202l-2.795-.402.105-.753 2.902.402.368-1.557-3.006-.453.106-.803 3.112.402c.105-.302.158-.553.264-.804.263-.905.527-1.809 1.16-2.613s1.371-1.306 2.479-1.256c.475 0 .95.151 1.266.503.053.05.158.15.158.25 0 .202 0 .453-.158.604-.211.15-.475.1-.686-.1-.158-.151-.264-.302-.422-.453-.316-.402-.791-.452-1.16-.1a3.2 3.2 0 0 0-.686.954c-.37 1.055-.633 2.16-1.002 3.266l2.901.402-.211.753z"/>
        </>
      )}
    </BaseIcon>
));

IconFil.displayName = 'Fil';

export default IconFil;
