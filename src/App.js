import { CssBaseline, ThemeProvider } from "@mui/material";
import Pages from "./pages";
import theme from "./theme";
import AppProviders from "./contexts";

function App() {
  return (
    <AppProviders>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Pages />
      </ThemeProvider>
    </AppProviders>
  );
}

export default App;
