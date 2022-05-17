import { ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./Layout/Layout";

export const theme = createTheme({
  typography: {
      fontFamily: ["Noto Sans","Source Sans Pro", "sans-serif"].join(',')
  },
  palette: {
    primary: {
      main: '#103B66',
      light: '#21B8F9'
    },
    secondary: {
      main: '#00C48C'
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </ThemeProvider>
      
  );
}

export default App;
