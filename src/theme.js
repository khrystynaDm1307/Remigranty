import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1300,
    },
  },
  palette: {
    primary: {
      main: "#F2CB48",
      contrastText: "#03073E",
    },
    secondary: {
      main: "#03073E",
      light: "#0A17B7",
      contrastText: "#FFFFFF",
    },
    info: {
      main: "#F7981A",
      contrastText: "#03073E",
    },
    warning:{
      main:"#ffffff"
    }
  },
  typography: {
    fontSize: 16,
    fontFamily: "Hind",

    h1: {
      fontWeight: 600,
      fontSize: 49,
      fontFamily: "Montserrat",
      color: "#03073E",
    },
    h2: {
      fontWeight: 600,
      fontSize: 39,
      color: "#03073E",
      fontFamily: "Montserrat",
    },
    h3: {
      fontWeight: 600,
      fontSize: 31,
    },
    p: {
      color: "#03073E",
      fontFamily: "Hind",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          borderRadius: 15,
          padding: "16px 32px",
          fontWeight: 600,
          boxShadow: "none",
          border: 0,
          textTransform: "none",
        },
      },
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            backgroundColor: ({ theme }) => theme.palette.primary.main,
            "&:hover": {
              background: `linear-gradient(90deg, #FDC82D 43.75%, #0A17B7 100%)`,
              boxShadow: "none",
            },
          },
        },
        {
          props: { variant: "contained", color: "info" },
          style: {
            backgroundColor: ({ theme }) => theme.palette.primary.info.main,
            "&:hover": {
              background: `linear-gradient(90deg, #F7981A 30.73%, #F7C218 77.08%);`,
              boxShadow: "none",
            },
          },
        },
      ],
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          // border:"3px solid rgba(247, 152, 26, 1)",
          borderRadius:"15px",
          outline:0
        },
      },
    },
  },
});

export default theme;
