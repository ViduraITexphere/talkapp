import { createTheme } from "@material-ui/core";
import { grey } from "@mui/material/colors";
import { blue } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: blue[700],
    },
    secondary: {
      main: grey[800],
    },
  },
});
