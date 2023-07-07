import Index from "./home-header/room-search/Index";
import { Divider } from "@material-ui/core";
import FilterBar from "./home-header/filter-bar/FilterBar";

const Home = () => {
  return (
    <>
      <Index />
      <Divider style={{ marginTop: "30px" }} />
      <FilterBar />
    </>
  );
};

export default Home;
