
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconMork = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M13.779 5.357c.342.111.818.219 1.144.377a6.83 6.83 0 0 1 3.844 5.015 6.77 6.77 0 0 1-.87 4.598.16.16 0 0 1-.141.082H15.92l-.017-.01a.03.03 0 0 1-.013-.033 5.167 5.167 0 0 0-1.478-8.147 5.3 5.3 0 0 0-2.374-.58.04.04 0 0 1-.039-.038V4.48q0-.194.193-.193H13.5c.15 0 .214.073.214.218v.772c0 .038.026.064.065.077zM10.213 18.63c-.326-.12-.802-.223-1.114-.373A6.86 6.86 0 0 1 6.05 8.636a.13.13 0 0 1 .112-.065H7.98a.04.04 0 0 1 .034.026.04.04 0 0 1-.004.043 5.23 5.23 0 0 0-.184 6.617 5.3 5.3 0 0 0 4.088 2.066c.035 0 .086.03.086.068v2.16c0 .043-.039.086-.069.116a.17.17 0 0 1-.115.047h-1.32c-.15 0-.215-.073-.21-.223v-.771c0-.039-.043-.077-.073-.086z"/><path fill="currentColor" d="m15.549 12.857-.686-.081v-.009l.008-.026.013-.008.729-.06a.13.13 0 0 0 .116-.095c.184-.522.312-1.165.214-1.705a2.02 2.02 0 0 0-.964-1.414 2.02 2.02 0 0 0-2.028.004 2.04 2.04 0 0 0-.994 1.748 1.988 1.988 0 0 1-3.883.609 1 1 0 0 0-.047-.129q-.082-.174-.043.018a4.17 4.17 0 0 0 1.547 2.695q.01.02.009.043l-.111.96c-.018.146.042.232.188.257.3.056.63.095.986.129.278.017.287-.296.291-.51V15.2c.009-.094.056-.128.15-.107l.077.022c.069.017.108.06.108.133v.102c-.009.189-.018.433.227.438h1.054a.184.184 0 0 0 .184-.19v-.342c0-.077.043-.124.112-.137l.141-.03q.096-.013.116.077l.107.493a.18.18 0 0 0 .223.137l1.05-.291a.184.184 0 0 0 .128-.219l-.192-.801a.12.12 0 0 1 .042-.129c.507-.38.91-.88 1.17-1.457a.04.04 0 0 0-.021-.039.04.04 0 0 0-.021-.004m-.986-1.071a.844.844 0 0 0-.918-1.372.84.84 0 0 0-.514.78.844.844 0 0 0 .836.84.84.84 0 0 0 .596-.244z" fillRule="evenodd" clipRule="evenodd"/><path fill="currentColor" d="M14.031 11.627a.444.444 0 0 0 .386-.493.44.44 0 0 0-.51-.364.45.45 0 0 0-.386.497.45.45 0 0 0 .515.36zm-4.067-.163a.27.27 0 0 0 0-.54.27.27 0 0 0 0 .54"/>
        </>
      ) : (
        <>
          <path fill="#1C1C1B" d="M13.78 5.357c.342.111.818.219 1.143.377a6.83 6.83 0 0 1 3.845 5.015 6.77 6.77 0 0 1-.87 4.598.16.16 0 0 1-.142.082h-1.834l-.017-.01a.03.03 0 0 1-.013-.033 5.167 5.167 0 0 0-1.479-8.147 5.3 5.3 0 0 0-2.374-.58.04.04 0 0 1-.038-.038V4.48q0-.194.192-.193h1.308c.15 0 .214.073.214.218v.772c0 .038.026.064.064.077zM10.212 18.63c-.325-.12-.801-.223-1.114-.373a6.86 6.86 0 0 1-3.047-9.621.13.13 0 0 1 .111-.065H7.98a.04.04 0 0 1 .035.026.04.04 0 0 1-.005.043 5.23 5.23 0 0 0-.184 6.617 5.3 5.3 0 0 0 4.089 2.066c.034 0 .086.03.086.068v2.16c0 .043-.04.086-.07.116a.17.17 0 0 1-.115.047h-1.32c-.15 0-.214-.073-.21-.223v-.771c0-.039-.043-.077-.073-.086z"/><path fill="#007295" d="m15.55 12.857-.687-.081v-.009l.009-.026.013-.008.728-.06a.13.13 0 0 0 .116-.095c.184-.522.313-1.165.214-1.705a2.01 2.01 0 0 0-.964-1.414 2.02 2.02 0 0 0-2.027.004 2.04 2.04 0 0 0-.994 1.748 1.988 1.988 0 0 1-3.883.609 1 1 0 0 0-.047-.129q-.083-.174-.043.018a4.17 4.17 0 0 0 1.547 2.695q.01.02.008.043l-.11.96c-.018.146.042.232.188.257.3.056.63.095.985.129.279.017.287-.296.292-.51V15.2q.01-.14.15-.107l.077.022q.105.024.107.133v.102c-.008.189-.017.433.227.438h1.055a.184.184 0 0 0 .184-.19v-.342c0-.077.043-.124.111-.137l.142-.03q.096-.013.115.077l.107.493a.18.18 0 0 0 .223.137l1.05-.291a.184.184 0 0 0 .129-.219l-.193-.801a.12.12 0 0 1 .043-.129c.506-.38.909-.88 1.17-1.457a.04.04 0 0 0-.006-.022.04.04 0 0 0-.016-.017.04.04 0 0 0-.02-.004m-.987-1.071a.843.843 0 0 0-.917-1.372.84.84 0 0 0-.514.78.844.844 0 0 0 .836.84.84.84 0 0 0 .595-.244z" fillRule="evenodd" clipRule="evenodd"/><path fill="#1C1C1B" d="M14.032 11.627a.444.444 0 0 0 .386-.493.44.44 0 0 0-.51-.364.45.45 0 0 0-.386.497.45.45 0 0 0 .514.36zm-4.067-.163a.27.27 0 0 0 0-.54.27.27 0 0 0 0 .54"/>
        </>
      )}
    </BaseIcon>
));

IconMork.displayName = 'Mork';

export default IconMork;
