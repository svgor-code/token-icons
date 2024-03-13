
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconArix = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        <path fill="url(#ARIX__a)" d="m12.15 9.287.171-.703c-1.868 0-4.753.527-5.091 2.803-.27 1.822 1.924 3.557 3.056 4.2-.172-.407-.51-1.68-.51-3.501 0-1.822 1.585-2.623 2.374-2.799"/><path fill="#38296A" d="M7.753 13.269c.081-1.046.45-2.512 1.513-3.283a5.36 5.36 0 0 1 3-1.063l.077-.339c-1.864 0-4.749.527-5.091 2.803-.069.669.11 1.34.501 1.886z"/><path fill="#4E2B85" d="M12.15 11.914c-.54-.141-1.242-.643-1.525-.878-.815 1.123-.566 3.27-.343 4.2.818.424 1.701.411 2.04.355z"/><path fill="#692B90" d="M10.286 20.143c1.084-1.26 1.586-7.299 1.697-10.157l1.697 7.53c-.544.981-2.485 2.16-3.394 2.627"/><path fill="#4C2365" d="m12.493 18.741-.514-8.755 1.7 7.53a3.4 3.4 0 0 1-1.186 1.225"/><path fill="#7D278A" d="m13.17 18.741-1.188-8.755 3.223 6.48c-.407.84-1.525 1.868-2.035 2.275"/><path fill="#6A2C75" d="m15.205 16.466-3.223-6.48 2.713 7.178c.275-.278.399-.467.515-.698z"/><path fill="#AD3398" d="m15.205 17.34-3.223-7.354 4.586 4.727c0 .703-.908 2.044-1.363 2.627"/><path fill="#7A246D" d="M16.564 14.713 11.98 9.986l4.242 5.777c.275-.42.343-.874.343-1.05"/><path fill="#DC3390" d="m17.074 12.437-5.092-2.451 4.586 5.605c.673-.84.617-2.451.506-3.154"/><path fill="url(#ARIX__b)" d="m12.322 8.584-.849-.523c.172-.12.527-.385.527-.527v-.698c.112-.12.386-.386.66-.527.116.235.407.737.682.874.27.141.338.527.338.703a2.2 2.2 0 0 0-.51-.352c-.27-.141-.454-.643-.51-.874-.111.116-.338.386-.338.523 0 .086.043.176.085.266a.6.6 0 0 1 .086.257c0 .145-.343.295-.514.355.231.056.686.245.686.523v1.05c.11-.171.402-.488.677-.347.338.172.677.523.677 1.05l.848-.175-.51-.733h-.338v-.493l-.343-.352c.116-.055.343-.137.343 0 0 .142.227.176.343.176v.351l.334.172.343.527.338.527c.112-.291.407-.913.678-1.05C15.715 8.996 15 8.34 15 8.061V6.66c-.566-.527-1.658-1.646-1.658-1.929v-.874l-.515.874-.505-.698v1.226c-.112.407-.51 1.26-1.187 1.401-.85.171-4.072.874-4.243 3.677-.138 2.242.171 2.915.342 2.975-.06-1.458.879-4.445 5.088-4.728m2.035-2.1c0 .116.069.42.343.699v.351c-.06 0-.205-.068-.343-.351z"/><defs><linearGradient id="ARIX__a" x1="11.811" x2="8.091" y1="8.76" y2="14.258" gradientUnits="userSpaceOnUse"><stop stopColor="#5E338F"/><stop offset=".59" stopColor="#6E2B92"/><stop offset="1" stopColor="#D438A3"/></linearGradient><linearGradient id="ARIX__b" x1="14.867" x2="7.187" y1="6.133" y2="12.9" gradientUnits="userSpaceOnUse"><stop stopColor="#B23593"/><stop offset=".36" stopColor="#80318C"/><stop offset=".74" stopColor="#772F93"/><stop offset="1" stopColor="#B82E8E"/></linearGradient></defs>
    </BaseIcon>
));

IconArix.displayName = 'Arix';

export default IconArix;
