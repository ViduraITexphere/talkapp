import { makeStyles } from "@material-ui/core";
import PrimaryButton from "../../../components/ui/Button";
import AddIcon from "@mui/icons-material/Add";

const useStyles = makeStyles((theme) => ({
  primaryButton: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const RoomButton = () => {
  const classes = useStyles();
  return (
    <PrimaryButton
      className={classes.primaryButton}
      title="Create New Room"
      icon={<AddIcon fontSize="large" />}
    />
  );
};

export default RoomButton;
