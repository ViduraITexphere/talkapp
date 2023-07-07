import { Outlet } from "react-router-dom";
import { Grid } from "@material-ui/core";

// project imports

import Header from "../../components/LayoutComponents/Header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Grid style={{ padding: "0px 20px" }}>
        <Outlet />
      </Grid>
    </>
  );
};

export default Layout;
