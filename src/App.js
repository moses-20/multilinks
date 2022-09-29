import { CssBaseline, ThemeProvider } from "@mui/material";
import Pages from "./pages";
import theme from "./theme";
import HomeContextProvider from "./contexts/home.context";

function App() {
  return (
    <HomeContextProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Pages />
      </ThemeProvider>
    </HomeContextProvider>
  );
}

export default App;
