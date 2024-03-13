
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconBrwl = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        <path fill="url(#BRWL__a)" d="M19.285 12a7.286 7.286 0 1 1-14.57 0 7.286 7.286 0 0 1 14.57 0"/><path fill="url(#BRWL__b)" d="M12 18.857a6.857 6.857 0 1 0 0-13.713 6.857 6.857 0 0 0 0 13.713m0 .429a7.286 7.286 0 1 0 0-14.572 7.286 7.286 0 0 0 0 14.572" fillRule="evenodd" clipRule="evenodd"/><path fill="#fff" d="M12.188 8.143c.124 0 .184.159.099.248L9.51 11.32c-.086.094-.026.248.098.248h1.007c.09 0 .159.09.133.184l-.711 2.713a.14.14 0 0 1-.133.107H7.388c-.06 0-.103-.05-.103-.11v-.027l.399-1.581a.1.1 0 0 1 .098-.082h.472c.064 0 .12-.042.133-.107l.583-2.408c.025-.095-.043-.184-.133-.184h-.27a.107.107 0 0 1-.103-.1l.004-.038.437-1.71a.1.1 0 0 1 .099-.081z"/><path fill="#fff" d="M13.157 11.143c.124 0 .184.159.098.248l-2.785 2.932a.15.15 0 0 0-.043.098c0 .078.055.15.141.15h2.657a.12.12 0 0 0 .095-.042l1.097-1.085a.36.36 0 0 0 .094-.163l.279-1.007c.051-.171.265-.214.364-.068l.086.116a.3.3 0 0 1 .042.257L15 13.68a.37.37 0 0 1-.099.167l-1.14 1.089a.2.2 0 0 1-.141.06H8.155a.21.21 0 0 0-.184.111.195.195 0 0 0 .03.236l.339.471a.14.14 0 0 0 .094.039h6a.14.14 0 0 0 .098-.043l1.106-1.2q.061-.069.086-.159l.321-1.225a.15.15 0 0 0-.034-.142l-.437-.441a.15.15 0 0 1-.039-.103.14.14 0 0 1 .043-.103l.857-.887a.34.34 0 0 0 .09-.163l.18-.686a.23.23 0 0 0-.051-.214l-.343-.364a.277.277 0 0 0-.471.15l-.052.291a.3.3 0 0 1-.077.146l-.874.857a.132.132 0 0 1-.202 0l-.223-.257a.15.15 0 0 1 .005-.206l.835-.784a.37.37 0 0 0 .095-.171l.175-.699a.23.23 0 0 0-.051-.21L14.455 8.17a.1.1 0 0 0-.073-.03h-1.551a.13.13 0 0 0-.133.107l-.681 2.708c-.022.095.043.185.133.185h1.007z"/><defs><linearGradient id="BRWL__a" x1="12" x2="12" y1="6.133" y2="19.286" gradientUnits="userSpaceOnUse"><stop stopColor="#DD4076"/><stop offset=".52" stopColor="#AF3466"/><stop offset="1" stopColor="#471840"/></linearGradient><linearGradient id="BRWL__b" x1="12" x2="12" y1="4.714" y2="19.286" gradientUnits="userSpaceOnUse"><stop stopColor="#F42776"/><stop offset="1" stopColor="#E92776"/></linearGradient></defs>
    </BaseIcon>
));

IconBrwl.displayName = 'Brwl';

export default IconBrwl;
