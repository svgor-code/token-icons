
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconBurger = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M4.234 12.909a1.286 1.286 0 0 1 0-1.818l6.858-6.857a1.285 1.285 0 0 1 1.817 0l6.857 6.857a1.286 1.286 0 0 1 0 1.818l-6.857 6.857a1.286 1.286 0 0 1-1.817 0zm3.502-1.552c-.094-.921.591-2.773 4.071-2.811 4.196-.043 4.393 2.014 4.462 2.734l.008.077c0 .034-.068.103-.351.103-.279 0-.87-.129-1.132-.193-.068-.094-.248-.287-.415-.317-.155-.03-.245.099-.3.18-.03.034-.043.06-.06.06l-.172-.009c-.488-.03-1.911-.128-3.355.009-.013-.154-.116-.463-.455-.441-.334.02-.493.334-.531.488a12 12 0 0 0-1.77.12m1.723-2.031c.043.047.154.115.291 0 .154-.138.094-.215.069-.24V9.08c-.022-.021-.257-.073-.309 0s-.073.129-.051.245m1.23-.09c.077.162-.017.252-.077.278a.26.26 0 0 1-.219-.116c-.056-.068.056-.282.081-.291h.005v-.004c.034-.017.12-.056.214.128zm1.045.102c.06.035.215.069.339-.094.146-.184.056-.24.017-.257l-.004-.009c-.026-.017-.317.009-.36.099-.039.086-.052.15.008.257zm1.192-.364c-.129.163-.279.129-.339.09-.06-.107-.043-.171-.004-.257.039-.094.33-.116.356-.099h.008c.035.026.129.078-.021.266m.257.519c.073 0 .214-.056.231-.257.022-.24-.085-.236-.128-.236-.03 0-.262.18-.244.278.012.099.034.155.145.215zm1.054-.412c.206.026.257.172.253.24-.064.107-.124.129-.218.142-.099.013-.27-.227-.27-.257v-.009c0-.043 0-.146.235-.116m-3.197.039c.056.043.21.098.369-.039.188-.158.103-.223.068-.248l-.004-.005c-.026-.021-.334-.042-.394.043-.056.077-.086.133-.039.249m-3.163 3.694c1.847.184 6.069.412 8.195-.171.051-.017.154 0 .137.171-.017.206-1.192.665-4.487.6l-1.209-.025c-2.22-.043-2.614-.052-2.713-.155-.111-.12 0-.36.082-.42zm2.512.913c-.455.009-1.852-.069-2.495-.111-.205-.013-.141.313-.085.471.223.853 1.26 1.436 4.38 1.402 3.038-.04 3.63-.943 3.908-1.368l.022-.03a.523.523 0 0 0-.069-.698c-.446.257-3.021.377-4.256.398-.171.197-.587.588-.827.588s-.484-.433-.578-.652m-3.15-1.534c-.026-.043 0-.18.287-.352.364-.218 6.54-.784 9.116.107.107.052.214.215-.232.459-.33-.188-1.024-.544-1.148-.459l-.112.086c-.098.086-.184.159-.347.159a.5.5 0 0 1-.257-.086c-.086-.047-.163-.09-.274-.086-.095.005-.193.065-.3.12-.138.082-.283.163-.416.12a.8.8 0 0 1-.227-.137c-.142-.107-.283-.214-.459-.103a1.5 1.5 0 0 0-.18.133c-.081.069-.103.086-.231.039-.082-.03-.137-.095-.193-.15-.077-.086-.15-.159-.257-.107l-.129.068c-.128.077-.257.15-.471.133-.142-.008-.24-.069-.33-.12-.086-.056-.163-.098-.257-.086-.073.018-.18.09-.3.176-.189.142-.425.304-.626.283a.9.9 0 0 1-.36-.15c-.129-.077-.24-.146-.386-.103-.107.034-.171.077-.231.116-.086.051-.142.085-.257.051a.8.8 0 0 1-.198-.12c-.107-.085-.205-.158-.334-.115-.09.03-.197.085-.296.145-.128.069-.24.129-.308.129-.12 0-.287-.082-.287-.15" fillRule="evenodd" clipRule="evenodd"/>
        </>
      ) : (
        <>
          <path fill="#F6B744" d="M4.234 12.909a1.286 1.286 0 0 1 0-1.818l6.858-6.857a1.285 1.285 0 0 1 1.817 0l6.857 6.857a1.286 1.286 0 0 1 0 1.818l-6.857 6.857a1.286 1.286 0 0 1-1.817 0zm3.502-1.552c-.094-.921.591-2.773 4.071-2.811 4.196-.043 4.393 2.014 4.462 2.734l.008.077c0 .034-.068.103-.351.103-.279 0-.87-.129-1.132-.193-.068-.094-.248-.287-.415-.317-.155-.03-.245.099-.3.18-.03.034-.043.06-.06.06l-.172-.009c-.488-.03-1.911-.128-3.355.009-.013-.154-.116-.463-.455-.441-.334.02-.493.334-.531.488a12 12 0 0 0-1.77.12m1.723-2.031c.043.047.154.115.291 0 .154-.138.094-.215.069-.24V9.08c-.022-.021-.257-.073-.309 0s-.073.129-.051.245m1.23-.09c.077.162-.017.252-.077.278a.26.26 0 0 1-.219-.116c-.056-.068.056-.282.081-.291h.005v-.004c.034-.017.12-.056.214.128zm1.045.102c.06.035.215.069.339-.094.146-.184.056-.24.017-.257l-.004-.009c-.026-.017-.317.009-.36.099-.039.086-.052.15.008.257zm1.192-.364c-.129.163-.279.129-.339.09-.06-.107-.043-.171-.004-.257.039-.094.33-.116.356-.099h.008c.035.026.129.078-.021.266m.257.519c.073 0 .214-.056.231-.257.022-.24-.085-.236-.128-.236-.03 0-.262.18-.244.278.012.099.034.155.145.215zm1.054-.412c.206.026.257.172.253.24-.064.107-.124.129-.218.142-.099.013-.27-.227-.27-.257v-.009c0-.043 0-.146.235-.116m-3.197.039c.056.043.21.098.369-.039.188-.158.103-.223.068-.248l-.004-.005c-.026-.021-.334-.042-.394.043-.056.077-.086.133-.039.249m-3.163 3.694c1.847.184 6.069.412 8.195-.171.051-.017.154 0 .137.171-.017.206-1.192.665-4.487.6l-1.209-.025c-2.22-.043-2.614-.052-2.713-.155-.111-.12 0-.36.082-.42zm2.512.913c-.455.009-1.852-.069-2.495-.111-.205-.013-.141.313-.085.471.223.853 1.26 1.436 4.38 1.402 3.038-.04 3.63-.943 3.908-1.368l.022-.03a.523.523 0 0 0-.069-.698c-.446.257-3.021.377-4.256.398-.171.197-.587.588-.827.588s-.484-.433-.578-.652m-3.15-1.534c-.026-.043 0-.18.287-.352.364-.218 6.54-.784 9.116.107.107.052.214.215-.232.459-.33-.188-1.024-.544-1.148-.459l-.112.086c-.098.086-.184.159-.347.159a.5.5 0 0 1-.257-.086c-.086-.047-.163-.09-.274-.086-.095.005-.193.065-.3.12-.138.082-.283.163-.416.12a.8.8 0 0 1-.227-.137c-.142-.107-.283-.214-.459-.103a1.5 1.5 0 0 0-.18.133c-.081.069-.103.086-.231.039-.082-.03-.137-.095-.193-.15-.077-.086-.15-.159-.257-.107l-.129.068c-.128.077-.257.15-.471.133-.142-.008-.24-.069-.33-.12-.086-.056-.163-.098-.257-.086-.073.018-.18.09-.3.176-.189.142-.425.304-.626.283a.9.9 0 0 1-.36-.15c-.129-.077-.24-.146-.386-.103-.107.034-.171.077-.231.116-.086.051-.142.085-.257.051a.8.8 0 0 1-.198-.12c-.107-.085-.205-.158-.334-.115-.09.03-.197.085-.296.145-.128.069-.24.129-.308.129-.12 0-.287-.082-.287-.15" fillRule="evenodd" clipRule="evenodd"/>
        </>
      )}
    </BaseIcon>
));

IconBurger.displayName = 'Burger';

export default IconBurger;
