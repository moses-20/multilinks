import { createTheme } from "@mui/material";
import "@fontsource/mulish";

import ui from "./ui";
// import mixins from "./mixins";
// import palette from "./colors";
// import shadows from "./shadows";
// import typography from "./typography";

const theme = createTheme({
  components: ui,
  //   palette,
  //   typography,
  //   mixins,
  //   shadows,
  typography: {
    fontFamily: "'Mulish', sans-serif",
  },
});

export default theme;
