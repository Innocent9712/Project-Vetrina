import { ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./Layout/Layout";
// import  PersistentDrawerLeft  from "./Layout/LayoutTest";

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
        {/* <LayoutTest /> */}
        {/* <PersistentDrawerLeft /> */}
      </BrowserRouter>
    </ThemeProvider>
      
  );
}

export default App;
