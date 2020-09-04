import {createMuiTheme} from '@material-ui/core/styles';
import {PaletteColor, PaletteColorOptions} from '@material-ui/core/styles/createPalette';

    
Palette {
    accent: PaletteColor;
    primaryBackground: PaletteColor;
    secondary: PaletteColor;
    textColor: PaletteColor;
    joker: PaletteColor;
};


export const darkTheme = createMuiTheme({
    palette:{
        accent:{
            main:'#ff7433ff',
        },
        primaryBackground:{
            main:'#e3e9f2ff',
        },
        secondary:{
            main:'#5d5d81ff',
        },
        textColor:{
            main:'#fefcfdff',
        },
        joker:{
            main:'#3e3659ff',
        },
        
    }
})

