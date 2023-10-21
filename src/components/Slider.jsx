import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import PropTypes from "prop-types";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slider = ({ sliderImg }) => {
  return (
    <div className=" flex justify-center items-center">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="h-[60vh] md:h-[80vh]"
      >
        <SwiperSlide>
          <img className="w-full h-full rounded-md" src={sliderImg[0]} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-full rounded-md" src={sliderImg[1]} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-full rounded-md" src={sliderImg[2]} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
Slider.propTypes = {
  sliderImg: PropTypes.array,
};

export default Slider;
