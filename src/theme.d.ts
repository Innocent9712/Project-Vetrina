import {ThemeOptions} from '@mui/material/styles'

declare module '@mui/material/styles' {
    interface ThemeOptions {
        typography: {
            fontFamily: string[];
        }
    }

    interface Theme {
        typography: {
            fontFamily: string;
        }
    }
}