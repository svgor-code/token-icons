
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconLitt = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M10.83 6.857h2.379c.385-.043 1.105-.445.93-1.74-.005-.034-.056-.051-.086-.021-.268.28-.592.498-.952.643.043-.065.13-.283.13-.656 0-.369-.33-.814-.502-.99a1.18 1.18 0 0 1-.245-1.037.04.04 0 0 0-.012-.05.04.04 0 0 0-.052-.002 2.92 2.92 0 0 0-1.551 2.473 1.4 1.4 0 0 1-.39-.664c-.009-.043-.069-.056-.09-.017-.373.6-.729 1.706.441 2.061m-.703.665v.621c0 .043.056.129.257.184.202.052.322.317.33.442v2.7c0 .03-.025.081-.068.133a4.18 4.18 0 0 0-2.932 3.951c0 2.297 1.92 4.161 4.286 4.161s4.286-1.864 4.286-4.161a4.18 4.18 0 0 0-2.927-3.951c-.043-.052-.073-.103-.073-.138V8.77c.008-.125.137-.386.334-.442.202-.055.257-.145.257-.184v-.621a.234.234 0 0 0-.231-.236h-3.287a.23.23 0 0 0-.232.236m-1.671 7.521a1.894 1.894 0 0 1 1.928-1.509c.905 0 1.26.429 1.616.87.369.455.746.913 1.727.913.326-.005.647-.078.943-.214.33-.193.793-.129.827.356v.094c0 1.899-1.585 3.437-3.536 3.437a3.49 3.49 0 0 1-3.5-3.943zm1.83 1.243a.857.857 0 1 0 0-1.715.857.857 0 0 0 0 1.715m2.571.428a.429.429 0 1 0 0-.857.429.429 0 0 0 0 .857"/>
        </>
      ) : (
        <>
          <path fill="url(#LITT__a)" d="M10.83 6.857h2.378c.386-.043 1.106-.445.93-1.74-.004-.034-.056-.051-.086-.021-.268.28-.592.498-.951.643.043-.065.129-.283.129-.656 0-.369-.33-.814-.502-.99a1.18 1.18 0 0 1-.244-1.037.04.04 0 0 0-.013-.05.04.04 0 0 0-.051-.002 2.92 2.92 0 0 0-1.552 2.473 1.4 1.4 0 0 1-.39-.664c-.008-.043-.068-.056-.09-.017-.373.6-.728 1.706.442 2.061m-.703.665v.621c0 .043.055.129.257.184.201.052.321.317.33.442v2.7c0 .03-.026.081-.069.133a4.18 4.18 0 0 0-2.931 3.951c0 2.297 1.92 4.161 4.286 4.161s4.285-1.864 4.285-4.161a4.18 4.18 0 0 0-2.927-3.951c-.043-.052-.073-.103-.073-.138V8.77c.009-.125.137-.386.335-.442.201-.055.257-.145.257-.184v-.621a.234.234 0 0 0-.232-.236h-3.287a.23.23 0 0 0-.231.236m-1.672 7.521a1.894 1.894 0 0 1 1.929-1.509c.904 0 1.26.429 1.616.87.368.455.745.913 1.727.913.325-.005.647-.078.943-.214.33-.193.792-.129.827.356v.094c0 1.899-1.586 3.437-3.536 3.437a3.49 3.49 0 0 1-3.501-3.943zm1.83 1.243a.857.857 0 1 0 0-1.715.857.857 0 0 0 0 1.715m2.572.428a.429.429 0 1 0 0-.857.429.429 0 0 0 0 .857"/><defs><linearGradient id="LITT__a" x1="8.349" x2="19.18" y1="4.931" y2="12.204" gradientUnits="userSpaceOnUse"><stop stopColor="#33AAC2"/><stop offset=".51" stopColor="#47B6CA"/><stop offset="1" stopColor="#92E5EB"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

IconLitt.displayName = 'Litt';

export default IconLitt;
