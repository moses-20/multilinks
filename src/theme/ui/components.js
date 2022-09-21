const components = {
  MuiContainer: {
    styleOverrides: {
      root: {
        paddingLeft: "15px !important",
        paddingRight: "15px !important",
        maxWidth: "1600px",
      },
    },
  },

  MuiButton: {
    defaultProps: {
      disableRipple: false,
    },

    styleOverrides: {
      root: {
        minWidth: 120,
        textTransform: "none",
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none",
        },
      },
    },
  },
};

export default components;
