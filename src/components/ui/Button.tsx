import { Box, ButtonBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    width: "200px",
    height: "50px",
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    padding: "0.3rem 1rem",
    borderRadius: "0.3rem",
    fontSize: "0.9rem",
    fontWeight: 500,
    fontFamily: "Inter, sans-serif",
    cursor: "pointer",
    gap: "0.5rem",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));

const PrimaryButton = (props: any) => {
  const classes = useStyles();
  return (
    <ButtonBase className={classes.button}>
      <Box>{props.icon}</Box> {props.title}
    </ButtonBase>
  );
};

export default PrimaryButton;
