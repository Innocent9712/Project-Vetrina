import { ThemeProvider, createTheme } from "@mui/material";
import { Layout } from "./Layout/Layout";

const theme = createTheme({
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
      <div>
        <Layout />
      </div>
    </ThemeProvider>
      
  );
}

export default App;
