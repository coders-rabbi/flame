import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FC761F",
      contrastText: "#fff",
    },
    secondary: {
      main: "#2D3748",
    },
    background: {
      default: "#DFD7D0",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },
  },
  typography: {
    body1: {
      color: "#2D3748",
    },
  },
});

theme.shadows[1] = "0px 1px 3px rgba(0, 0, 0, 0.2)";
