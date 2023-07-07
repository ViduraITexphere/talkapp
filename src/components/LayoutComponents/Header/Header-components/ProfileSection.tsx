import {
  Avatar,
  Box,
  IconButton,
  Typography,
  makeStyles,
} from "@material-ui/core";
import DehazeIcon from "@material-ui/icons/Dehaze";

const useStyles = makeStyles((theme) => ({
  ProfileSection: {
    display: "flex",
    alignItems: "center",
    color: theme.palette.secondary.main,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  userText: {
    fontSize: "0.9rem",
    fontWeight: 400,
    marginLeft: "0.5rem",
    fontFamily: "Inter, sans-serif",
  },
  sidebarIcon: {
    display: "none",
    color: theme.palette.secondary.main,
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
}));

function ProfileSection() {
  const classes = useStyles();
  return (
    <Box>
      <div className={classes.ProfileSection}>
        <IconButton>
          <Avatar style={{ width: 32, height: 32 }} />
        </IconButton>
        <Typography className={classes.userText}>Hello, User</Typography>
      </div>
      <DehazeIcon className={classes.sidebarIcon} />
    </Box>
  );
}

export default ProfileSection;
