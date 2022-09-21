import {
  Box,
  Toolbar,
  Typography,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import Pages from "./pages";
import theme from "./theme";
import Page from "./material/page";
import Main from "./material/main";
import AppProviders from "./contexts";

function App() {
  return (
    <AppProviders>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Page>
          <Toolbar component="header">
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6">Multilinks</Typography>
            </Box>
          </Toolbar>
          <Main>
            <Pages />
          </Main>
          <Box sx={{ py: 5 }}>
            <Typography textAlign="center">&copy; 2022 Multilinks</Typography>
          </Box>
        </Page>
      </ThemeProvider>
    </AppProviders>
  );
}

export default App;
