import {css} from 'styled-components';

const boxShadowCss = css`
  box-shadow: 3px 3px 3px 2px #424242;
`

export const lightTheme = {
    bodyBackground: '#fff',
    mainBackground: '#1565c0',
    mainBorder:'3px solid #0d47a1',
    boxShadow: boxShadowCss,
    itemBackground: '#eee',
    buttonsColor: '#01579b',
    buttonBackgroundActive: '#bbdefb',
    buttonBackgroundDisabled: '#e0e0e0',
    buttonBackgroundHover: '#81d4fa',
    avatarBackground: '#1E88E5',
    avatarColor: '#eee',
    inputBackground: '#eee',
    sendBackground: '#388E3C',
    clearBackground: '#D32F2F'
}
export const darkTheme = {
    bodyBackground: '#424242',
    mainBackground: '#212121',
    mainBorder:'3px solid #000',
    boxShadow: boxShadowCss,
    itemBackground: '#757575',
    buttonsColor: '#000',
    buttonBackgroundActive: '#78909C',
    buttonBackgroundDisabled: '#B0BEC5',
    buttonBackgroundHover: '#607D8B',
    avatarBackground: '#757575',
    avatarColor: '#BDBDBD',
    inputBackground: '#BDBDBD',
    sendBackground: '#1B5E20',
    clearBackground: '#B71C1C'
}

