import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", 
    },
    secondary: {
      main: "#1976d2",
    },
    background: {
      default: "#E1F5FE", 
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    h4: {
      fontWeight: 700, 
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;

