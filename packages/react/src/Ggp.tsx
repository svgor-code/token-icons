
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconGgp = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M7.286 15V9h4.003c.154 0 .283-.142.283-.3V7.14a.283.283 0 0 0-.283-.283H5.426a.285.285 0 0 0-.283.283v9.72c0 .158.129.283.283.283h5.863a.285.285 0 0 0 .283-.283V11.4c0-.159-.129-.257-.283-.257H8.4c-.158 0-.257.098-.257.257v1.56c0 .158.099.325.257.325H9.43V15zM12.429 7.131c0-.15.133-.274.3-.274h2.4c.167 0 .3.124.3.274v.137c0 .155-.133.275-.3.275h-1.577v.685h1.577c.167 0 .3.129.3.275v.137c0 .154-.133.274-.3.274h-1.577V9.6h1.577c.167 0 .3.124.3.274v.137c0 .15-.133.275-.3.275h-2.4c-.167 0-.3-.125-.3-.275zm3.428 0c0-.15.133-.274.3-.274h2.4c.168 0 .3.124.3.274v.137c0 .155-.133.275-.3.275h-1.572v.685h1.572c.168 0 .3.129.3.275v.137c0 .154-.133.274-.3.274h-1.572V9.6h1.568c.171 0 .3.124.3.274v.137c0 .15-.129.275-.3.275h-2.4c-.163 0-.296-.125-.296-.275zM13.5 15.548v.369a.17.17 0 0 0 .172.171h.728a.17.17 0 0 0 .172-.171v-.369a.17.17 0 0 0-.172-.171h-.728a.17.17 0 0 0-.172.171m0-3.175v.368c0 .09.073.172.172.172h.368a.17.17 0 0 0 .172-.172v-.368a.17.17 0 0 0-.172-.172h-.368a.17.17 0 0 0-.172.172m-1.071-.947c0-.16.128-.283.287-.283v.004H15c.159 0 .287.128.287.283v.776h.026a.3.3 0 0 0 .18-.065.535.535 0 0 1 .836.591.533.533 0 0 1-.686.322.5.5 0 0 1-.15-.077.3.3 0 0 0-.18-.069h-.026v.776a.284.284 0 0 1-.287.283h-1.358a.14.14 0 0 0-.142.141v.073c0 .077.065.142.142.142h1.714c.159 0 .287.124.287.278v.527a.6.6 0 0 0-.377.009.619.619 0 0 0-.223 1.063.63.63 0 0 0 .6.133v.527a.283.283 0 0 1-.287.283h-2.64a.283.283 0 0 1-.287-.283v-2.4a.14.14 0 0 1 .141-.137h.073a.14.14 0 0 0 .141-.142v-.073a.14.14 0 0 0-.14-.141h-.074a.14.14 0 0 1-.141-.142zm4.286 1.315v-.368c0-.095.077-.172.17-.172h.73c.098 0 .17.073.17.172v.368a.17.17 0 0 1-.17.172h-.73a.17.17 0 0 1-.17-.172m-.785-1.598a.286.286 0 0 0-.287.282v.528a.64.64 0 0 1 .806.492.634.634 0 0 1-.806.712v.527c0 .154.129.279.287.279h1.145v.03a.3.3 0 0 1-.07.18.5.5 0 0 0-.076.145.48.48 0 0 0 .026.403c.094.176.278.3.48.3a.53.53 0 0 0 .53-.527.5.5 0 0 0-.033-.176.5.5 0 0 0-.082-.145.3.3 0 0 1-.064-.18v-.03h.784a.28.28 0 0 0 .283-.279v-2.258a.283.283 0 0 0-.283-.283zm1.145 4.774v-.369c0-.094.077-.171.17-.171h.374c.094 0 .171.077.171.171v.369a.17.17 0 0 1-.171.171h-.373a.17.17 0 0 1-.171-.171m.968-1.594a.634.634 0 1 1-1.217 0h-.54a.283.283 0 0 0-.287.278v.776h-.026a.3.3 0 0 1-.18-.064.5.5 0 0 0-.15-.078.5.5 0 0 0-.407.022.56.56 0 0 0-.309.48.53.53 0 0 0 .716.489.5.5 0 0 0 .15-.078.28.28 0 0 1 .18-.064H16v.771c0 .16.128.283.287.283h2.284a.286.286 0 0 0 .287-.278V14.6a.283.283 0 0 0-.287-.283h-.527z"/>
        </>
      ) : (
        <>
          <path fill="#9826FF" d="M7.285 15V9h4.003c.155 0 .283-.142.283-.3V7.14a.283.283 0 0 0-.283-.283H5.425a.285.285 0 0 0-.282.283v9.72c0 .158.128.283.282.283h5.863a.285.285 0 0 0 .283-.283V11.4c0-.159-.128-.257-.283-.257H8.4c-.159 0-.257.098-.257.257v1.56c0 .158.098.325.257.325h1.028V15z"/><path fill="url(#GGP__a)" d="M12.428 7.131c0-.15.133-.274.3-.274h2.4c.167 0 .3.124.3.274v.137c0 .155-.133.275-.3.275h-1.577v.685h1.577c.167 0 .3.129.3.275v.137c0 .154-.133.274-.3.274h-1.577V9.6h1.577c.167 0 .3.124.3.274v.137c0 .15-.133.275-.3.275h-2.4c-.167 0-.3-.125-.3-.275zm3.429 0c0-.15.133-.274.3-.274h2.4c.167 0 .3.124.3.274v.137c0 .155-.133.275-.3.275h-1.573v.685h1.573c.167 0 .3.129.3.275v.137c0 .154-.133.274-.3.274h-1.573V9.6h1.569c.171 0 .3.124.3.274v.137c0 .15-.129.275-.3.275h-2.4c-.163 0-.296-.125-.296-.275z"/><path fill="url(#GGP__b)" d="M13.5 15.548v.369a.17.17 0 0 0 .171.171h.729a.17.17 0 0 0 .171-.171v-.369a.17.17 0 0 0-.171-.171h-.729a.17.17 0 0 0-.171.171m0-3.175v.368c0 .09.073.172.171.172h.369a.17.17 0 0 0 .171-.172v-.368a.17.17 0 0 0-.171-.172h-.369a.17.17 0 0 0-.171.172m-1.072-.947c0-.16.129-.283.287-.283v.004H15c.158 0 .287.128.287.283v.776h.026a.3.3 0 0 0 .18-.065.535.535 0 0 1 .836.591.533.533 0 0 1-.686.322.5.5 0 0 1-.15-.077.3.3 0 0 0-.18-.069h-.026v.776a.284.284 0 0 1-.287.283H13.64a.14.14 0 0 0-.141.141v.073c0 .077.064.142.141.142h1.714c.159 0 .288.124.288.278v.527a.6.6 0 0 0-.378.009.619.619 0 0 0-.222 1.063.63.63 0 0 0 .6.133v.527a.283.283 0 0 1-.288.283h-2.64a.283.283 0 0 1-.287-.283v-2.4a.14.14 0 0 1 .142-.137h.073a.14.14 0 0 0 .141-.142v-.073a.14.14 0 0 0-.141-.141h-.073a.14.14 0 0 1-.142-.142zm4.286 1.315v-.368c0-.095.077-.172.171-.172h.729c.099 0 .171.073.171.172v.368a.17.17 0 0 1-.171.172h-.729a.17.17 0 0 1-.171-.172m-.784-1.598a.286.286 0 0 0-.287.282v.528a.64.64 0 0 1 .805.492.634.634 0 0 1-.805.712v.527c0 .154.128.279.287.279h1.144v.03a.3.3 0 0 1-.069.18.5.5 0 0 0-.077.145.48.48 0 0 0 .026.403c.094.176.279.3.48.3a.53.53 0 0 0 .531-.527.5.5 0 0 0-.034-.176.5.5 0 0 0-.081-.145.3.3 0 0 1-.065-.18v-.03h.785a.28.28 0 0 0 .283-.279v-2.258a.283.283 0 0 0-.283-.283zm1.144 4.774v-.369c0-.094.077-.171.171-.171h.373c.095 0 .172.077.172.171v.369a.17.17 0 0 1-.172.171h-.373a.17.17 0 0 1-.171-.171m.969-1.594a.634.634 0 1 1-1.217 0h-.54a.283.283 0 0 0-.288.278v.776h-.025a.3.3 0 0 1-.18-.064.5.5 0 0 0-.15-.078.5.5 0 0 0-.408.022.56.56 0 0 0-.308.48.53.53 0 0 0 .716.489.5.5 0 0 0 .15-.078.28.28 0 0 1 .18-.064h.025v.771c0 .16.129.283.287.283h2.285a.286.286 0 0 0 .287-.278V14.6a.283.283 0 0 0-.287-.283h-.527z"/><defs><linearGradient id="GGP__a" x1="12" x2="12" y1="6.857" y2="17.143" gradientUnits="userSpaceOnUse"><stop stopColor="#8E34E3"/><stop offset="1" stopColor="#7865E2"/></linearGradient><linearGradient id="GGP__b" x1="15.643" x2="15.643" y1="11.143" y2="17.143" gradientUnits="userSpaceOnUse"><stop stopColor="#6B6BF3"/><stop offset="1" stopColor="#31C4FA"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

IconGgp.displayName = 'Ggp';

export default IconGgp;
