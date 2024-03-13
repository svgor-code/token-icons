
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconBanana = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        <path fill="#7D551F" d="M5.4 17.16a.257.257 0 0 1-.257-.257l.004-.257 1.556.017-.009.514z"/><path fill="#AC752C" d="M5.413 16.136a.257.257 0 0 0-.257.257l-.009.253 1.556.017.004-.514z"/><path fill="#FFCA28" d="M8.494 8.974c-.518 0-.257.768 1.295 1.787a5.54 5.54 0 0 1 2.07 2.56l2.07-1.535c-1.552-2.559-4.92-2.812-5.435-2.812"/><path fill="#FFD770" d="M13.221 5.16c0-1.041.506-1.303.776-1.303 3.236 0 2.614 6.485 2.19 8.079-1.115 4.17-6.472 5.734-7.817 5.734-1.35 0-1.886-.261-2.156-1.046C6 16 6.844 15.67 7.29 15.583c1.17-.343 3.831-1.667 5.125-4.17 1.616-3.129.806-4.95.806-6.253"/><path fill="#FFEA8C" d="M13.997 3.857c-.27 0-.771.257-.771 1.303 0 .291.038.604.085.956.15 1.225.36 2.871-.9 5.297-1.29 2.503-3.951 3.823-5.121 4.17-.446.086-1.295.416-1.076 1.041.253.729.737 1.008 1.899 1.042a1.5 1.5 0 0 1-.283-.519c-.215-.625.63-.955 1.08-1.041 1.165-.347 3.793-1.41 5.087-3.909 1.299-2.511 1.08-5.211.81-6.776-.154-.9-.81-1.564-.81-1.564"/><path fill="#FFB300" d="M15.921 12.716C14.395 16.303 9.63 17.67 8.37 17.67c-1.35 0-1.886-.261-2.156-1.046C6 16 6.844 15.67 7.29 15.583c.947-.279 2.871-1.2 4.255-2.867h4.376"/><path fill="#FFD54F" d="M13.732 12.716c-1.903 2.811-5.846 3.913-6.977 3.913-.202 0-.386 0-.549-.018-.193-.612.643-.938 1.084-1.024.948-.278 2.872-1.2 4.256-2.867h2.186z"/><path fill="#FFCA28" d="M17.571 15.424c0-2.841-2.901-3.823-6.009-2.717.952.424 2.743 1.5 3.16 2.717.35 1.02.11 2.829-.13 3.986-.042.218.198.386.382.257 1.543-1.08 2.597-2.867 2.597-4.239z"/>
    </BaseIcon>
));

IconBanana.displayName = 'Banana';

export default IconBanana;
