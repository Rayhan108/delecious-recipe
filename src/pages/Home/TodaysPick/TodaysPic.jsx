import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// import Swiper styles
import "swiper/css";
import "swiper/swiper-bundle.min.css";
const TodaysPic = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <LazyLoadImage
            style={{ width: "100%" }}
            className="d-block w-100  img-fluid"
            src="https://img.freepik.com/free-photo/side-lamb-ragout-with-fried-onion-carrot-tomato-sauce-greens-vegetable-salad-table_141793-4744.jpg?w=1060&t=st=1683189125~exp=1683189725~hmac=fbec4011694bbe3f7b0bacab7dc20c3e9020f1983cc990834cbfeaebd2cacbf8"
            alt="First slide"
          />
        </SwiperSlide>
        <SwiperSlide>
          <LazyLoadImage
            style={{ width: "100%" }}
            className="d-block w-100  img-fluid"
            src="https://img.freepik.com/free-photo/side-view-rice-garnish-with-fried-onion-carrot-greens-chili-pepper-table_141793-5069.jpg?w=1060&t=st=1683183211~exp=1683183811~hmac=2500d6aa9ddf36fd9c2c61dda6dff4ba6a94d6ac7905c9a8fda452e19e0a4b6b"
            alt="First slide"
          />
        </SwiperSlide>
        <SwiperSlide>
          <LazyLoadImage
            style={{ width: "100%" }}
            className="d-block w-100  img-fluid"
            src="https://img.freepik.com/free-photo/selection-food-tray_1340-23421.jpg?w=1060&t=st=1683046804~exp=1683047404~hmac=0958542f1506626cc0da32f7185337b57e6d7a906a79e7775d35927383fbbf4d"
            alt="First slide"
          />
        </SwiperSlide>

        <SwiperSlide>
          <LazyLoadImage
            style={{ width: "100%" }}
            className="d-block w-100  img-fluid"
            src="https://img.freepik.com/free-photo/flat-lay-indian-food-frame_23-2148747715.jpg?w=1060&t=st=1683189444~exp=1683190044~hmac=45223aa85c75fde57ab1886c4820cb2bf511c5db486cd721515e134e94b839a1"
            alt="First slide"
          />
        </SwiperSlide>
        <SwiperSlide>
          <LazyLoadImage
            style={{ width: "100%" }}
            className="d-block w-100  img-fluid"
            src="https://img.freepik.com/free-photo/plate-food-with-different-dishes-including-chicken-rice-other-food_1340-24267.jpg?w=1060&t=st=1683189530~exp=1683190130~hmac=caca1a163845706813da68507a39e913f4ca2d8c1a90882660c851b5e9d868a6"
            alt="First slide"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TodaysPic;
