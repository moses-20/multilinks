import { CssBaseline, ThemeProvider } from "@mui/material";
import Pages from "./pages";
import theme from "./theme";
import HomeContextProvider from "./contexts/home.context";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import getFirebaseApp from "./services/firebase.init";

function App() {
  const app = getFirebaseApp();

  if (process.env.NODE_ENV !== "production") {
    connectAuthEmulator(getAuth(app), "http://localhost:9099", {
      disableWarnings: true,
    });
  }

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
