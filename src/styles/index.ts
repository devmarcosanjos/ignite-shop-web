import { createStitches } from '@stitches/react';
 
export const {
    config,
    createTheme,
    css,
    styled,
    globalCss,
    theme,
    getCssText,
    keyframes,
} = createStitches({
    theme: {
        colors: {
            rocketseat: '#8257e6',
            white: '#FFF',
      
            gray900: '#121214',
            gray800: '#202024',
            gray300: '#c4c4cc',
            gray100: '#e1e1e6',
      
            green500: '#00875f',
            green300: '#00b37e',
        }
    }
})