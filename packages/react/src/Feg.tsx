
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconFeg = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        <path fill="#000" d="M7.072 11.657c.051.309.437.681.626.832-.459 1.127-.129 2.327-.129 2.51 0 .19-.159.292-.159.588 0 .292.352.502.459.613.086.094.107.171.107.197.223 1.166 1.076 1.573 1.474 1.629.198.051.36.158.489.27.184.158.326.343.549.454.621.321 1.782.531 2.627.964q.032-.392.154-.767c.09-.278.377-.128.463.15.407-.819 2.871-2.336 3.54-3.536.254-.56.35-1.18.278-1.791a5.7 5.7 0 0 0-.278-1.041 2.3 2.3 0 0 1-.112-.802 6.22 6.22 0 0 0-1.8-4.419c-.223-.222-.514-.282-.544-.514-.043-.381-.617-2.747-2.846-2.708-1.778.034-2.768 1.778-3.042 2.644-.116.386-.206.587-.502.836-.96.814-.926 1.628-.926 1.688 0 .064.009.21-.12.382a.63.63 0 0 0-.137.317v.338c0 .09-.034.107-.098.15-.125.086-.283.232-.287.386-.005.189.111.39.171.472.043.055.034.128.043.162z"/><path fill="#FFB133" d="M8.546 12.026c-.043.33.24.445.386.463.043.008.034.034.021.047-.227.218-.523.047-.625-.047-.12-.112-.163-.048-.236.064-.497.78-.343 2.087-.172 2.117l1.14-.519c-.128-.968.069-1.512.189-1.662v.128c-.013.394-.03 1.359.309 1.337l.291-.013c1.543-.055 2.156.215 2.271.369-1.028-.137-2.4-.064-3.222.278-.823.343-1.308.918-1.136 1.12.137.162.45.016.587-.074-.274 1.354.626 1.997 1.114 2.083a6 6 0 0 0-.115-.531 2.6 2.6 0 0 1-.108-.78l.708.463v-.545c.63.403 1.705.463 2.34-.038a1.56 1.56 0 0 0 .514-1.543c-.086.253-.536.296-.75.283.128-.107.386-.373.394-.575.004-.201-.321-.535-.484-.673.334-.055.643.125.75.215a1.95 1.95 0 0 0-.364-.776c.277.067.532.205.741.399-.249-.772-.797-1.132-1.08-1.32-.107-.069-.176-.116-.176-.15 0-.035.103-.052.214-.065.15-.021.322-.042.283-.128-.047-.112-.317-.112-.475-.112h-.112c-.051-.017-.021-.051 0-.068a2.17 2.17 0 0 0 .905-1.899c-.138-.004-.416.3-.416.399 0 .274-.116.861-.489 1.071-.27.15-.531.18-.728.202-.142.017-.249.03-.309.081s-.111.146-.167.244c-.073.129-.154.275-.27.356-.167.116-.27.107-.3.086-.043-.039.039-.12.103-.167s.386-.386.064-.763c-.231-.214-.673-.026-.733.27a1 1 0 0 0-.017.197c0 .073 0 .129-.026.133-.042.013-.098-.056-.137-.12-.163-.27-.643-.142-.677.163m1.11-.155a.3.3 0 0 1 .146.03c.026.013.043.03.06.047q.024.034.043.035c.15-.009.21-.399-.056-.395-.227 0-.253.288-.193.283m-.857.348c-.099-.185.017-.283.146-.292.115-.008.214 0 .145.137a.6.6 0 0 1-.111.167c-.056.056-.129.086-.18-.012" fillRule="evenodd" clipRule="evenodd"/><path fill="#F41B46" d="M10.749 6.634c-.546.292-.97.77-1.196 1.346-.013.034.026.056.052.03a3.34 3.34 0 0 1 1.842-.814c.07 0 .086-.086.022-.112-.334-.103-.686-.043-.909.034-.043.018-.085-.025-.055-.064l.278-.377a.03.03 0 0 0-.003-.033.03.03 0 0 0-.031-.01"/><path fill="#FA1243" d="M13.98 7.303a1.6 1.6 0 0 0-.055-.515c-.009-.03.025-.055.047-.034.103.086.184.193.24.27.021.034.068.03.073-.008.012-.103.012-.245.008-.369 0-.064.069-.086.09-.026.073.185.116.42.129.566 0 .043.025.086.056.111.137.112.248.228.325.318.03.042-.008.081-.051.055l-.262-.133a.03.03 0 0 0-.035.005.034.034 0 0 0-.012.034l.06.3c.013.043-.051.069-.085.03a2.3 2.3 0 0 0-.433-.377c-.073-.047-.103-.142-.095-.227m2.22 5.117c.047-.142.078-.334.095-.484.008-.047.068-.06.09-.018.072.168.128.343.154.425.051-.103.107-.274.15-.416.017-.051.077-.043.081.009.009.201 0 .441-.012.591 0 .043.012.094.042.129a.87.87 0 0 1 .21.441c0 .034-.043.043-.068.017a1.6 1.6 0 0 0-.287-.283c-.013-.008-.03 0-.026.013.043.206.026.33 0 .403-.017.043-.06.026-.073-.017a2.4 2.4 0 0 0-.33-.596.24.24 0 0 1-.026-.214m-1.864-2.156-1.697-.673c.043-.103.159-.103.214-.085l1.539.625a.073.073 0 1 1-.056.129z"/><path fill="#FFB133" d="M14.966 10.303c-.287.017-.437.321-.471.471.463-.137.823.086.823.137 0 .035-.018.06-.15.15-.129.086-.043.365-.018.622.022.21-.034.257-.064.253-.043 0-.094-.133-.129-.253-.03-.086-.055-.223-.17-.236-.087-.013-.155.073-.155.154 0 .146.218.27.244.386a.58.58 0 0 1-.051.403c-.039.064-.065.094-.018.167.065.103.215.077.313 0 .408-.321.39-1.161.378-1.5a1 1 0 0 0-.146-.531c-.086-.129-.215-.227-.386-.223"/><path fill="#F9B13C" d="M11.358 8.593a4.7 4.7 0 0 0-1.089.081 1.8 1.8 0 0 0-.583.236c-.158.111-.291.287-.291.484 0 .107.051.193.188.197.18.009.815-.231 1.175-.334.874-.24 1.118-.214 1.238-.214.116 0 .309.141.39.214.163.124.129-.069.103-.137-.193-.566-1.029-.973-1.054-.9-.035.081.145.107.235.253.073.115-.175.128-.308.12zm-2.259 1.08a.54.54 0 0 1-.047-.373c-.63.3-.154.728-.09.793.051.051.021.085 0 .09-.112.056-.06.128.034.111.052-.008.129-.021.18-.021.24-.043.172-.245.069-.386zm-1.264.12c-.245.175-.296.321-.27.424.043.172.15.129.27.077.205-.085.428-.146.574-.184.099-.026.111-.021.069-.12-.052-.129-.103-.202-.159-.24-.154-.116-.334-.043-.484.043"/><path fill="#F41B46" d="M8.212 11.914h-.043c-.06 0-.094 0-.111-.013-.035-.021.017-.06.068-.111q.287-.323.484-.707c.018.154 0 .454.095.171.107-.343.004-.685-.193-.685-.446.055-.789.21-.999.35-.193.134-.235.224-.193.442.146.763.592.802.81.712.15-.065.129-.163.082-.163z"/><path fill="#F4F5F9" d="M7.886 10.989c-.051-.01-.36.085-.39.385-.013.184.026.287.073.339.069.073.12.03.171-.039.163-.214.249-.685.146-.685"/><path fill="#F9B13C" d="M9.043 11.254c-.004.189.077.202.125.184.055-.02.107-.17.171-.257.086-.12.227-.214.227-.282 0-.043-.163-.352-.287-.3-.201.08-.227.42-.236.655"/><path fill="#F41B46" d="M10.269 10.993c.056.025.244.236.381.236.407-.01.96-.073 1.157-.493.1-.219.086-.493.043-.729-.043-.227-.128-.429-.295-.459-.189-.038-.395.022-.579.073-.343.095-.716.236-.913.296-.261.073-.3.33-.257.557.052.33.322.485.463.519"/><path fill="#F4F5F9" d="M10.089 10.491c.004.202.103.253.154.253.326 0 .472-.754.172-.728-.215.012-.335.223-.326.475"/>
    </BaseIcon>
));

IconFeg.displayName = 'Feg';

export default IconFeg;
