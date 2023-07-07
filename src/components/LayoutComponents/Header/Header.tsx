import {
  AppBar,
  Box,
  Divider,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import ProfileSection from "./Header-components/ProfileSection";

const useStyles = makeStyles((theme) => ({
  AppBar: {
    boxShadow: "none",
  },
  logo: {
    width: "40px",
    height: "40px",
  },
  Toolbar: {
    zIndex: theme.zIndex.drawer + 1,
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },

  Divider: {
    backgroundColor: "#ebebeb",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="sticky" className={classes.AppBar}>
        <Toolbar className={classes.Toolbar}>
          <Box>
            <img
              className={classes.logo}
              src="https://i.postimg.cc/WpCQjXzV/letter-c.png"
              alt="logo"
            />
          </Box>

          <ProfileSection />
        </Toolbar>
        <Divider className={classes.Divider} />
      </AppBar>
    </>
  );
};

export default Header;
