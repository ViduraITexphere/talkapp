import RoomButton from "../RoomButton";
import { makeStyles, Grid } from "@material-ui/core";
import DropDown from "../../../../components/ui/DropDown";

const useStyles = makeStyles((theme) => ({
  header_wrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "2rem",
  },
  dropdown: {
    flexGrow: 1,
    zIndex: 2,
    [theme.breakpoints.up("md")]: {
      padding: "0 1rem",
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: "0.5rem",
    },
  },
}));

function Index() {
  const classes = useStyles();
  return (
    <Grid container spacing={0} className={classes.header_wrapper}>
      <RoomButton />
      <Grid className={classes.dropdown}>
        <DropDown />
      </Grid>
    </Grid>
  );
}

export default Index;
