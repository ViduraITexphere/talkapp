import { Grid } from "@material-ui/core";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "./FilterBar.css";

function FilterBar() {
  const items = [
    { name: "Online Class" },
    { name: "Online Game" },
    { name: "Free Chat" },
    { name: "Group Chat" },
    { name: "Group Project" },
    { name: "Free Chat" },
    { name: "Individual Class" },
    { name: "Streaming" },
    { name: "Live Event" },
    { name: "Free Chat" },
    { name: "Group Chat" },
    { name: "Group Project" },
  ];

  return (
    <>
      <Grid style={{ marginTop: "20px" }}>
        <Swiper
          spaceBetween={50}
          slidesPerView={"auto"}
          freeMode={true}
          speed={500}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          style={{
            width: "100%",
            fontWeight: 400,
            zIndex: 1,
            cursor: "pointer",
          }}
          modules={[FreeMode]}
        >
          {items.map((item) => (
            <SwiperSlide> {item.name} </SwiperSlide>
          ))}
        </Swiper>
      </Grid>
    </>
  );
}

export default FilterBar;
