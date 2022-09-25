import { createTheme } from "@mui/material";
import "@fontsource/mulish";

import ui from "./ui";

const theme = createTheme({
  components: ui,
  typography: {
    fontFamily: "'Mulish', sans-serif",
  },
});

export default theme;
