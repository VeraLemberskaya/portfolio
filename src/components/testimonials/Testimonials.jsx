import React from "react";
import "./testimonials.css";
import AVTR1 from "../../asserts/avatar1.png";
import AVTR2 from "../../asserts/avatar2.png";
import AVTR3 from "../../asserts/avatar3.png";
import AVTR4 from "../../asserts/avatar4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

//UseEffect may be used to fetch this data
const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo nisi quidem aut dolores incidunt cumque. Enim, omnis excepturi! Ut facilis, explicabo quis laudantium unde mollitia nobis necessitatibus veritatis eaque aspernatur!",
  },
  {
    avatar: AVTR2,
    name: "Shatta Wale",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo nisi quidem aut dolores incidunt cumque. Enim, omnis excepturi! Ut facilis, explicabo quis laudantium unde mollitia nobis necessitatibus veritatis eaque aspernatur!",
  },
  {
    avatar: AVTR3,
    name: "Kname Despite",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo nisi quidem aut dolores incidunt cumque. Enim, omnis excepturi! Ut facilis, explicabo quis laudantium unde mollitia nobis necessitatibus veritatis eaque aspernatur!",
  },
  {
    avatar: AVTR4,
    name: "Maya Instead",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo nisi quidem aut dolores incidunt cumque. Enim, omnis excepturi! Ut facilis, explicabo quis laudantium unde mollitia nobis necessitatibus veritatis eaque aspernatur!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials-container"
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client-avatar">
                <img src={avatar} alt="Avatar" />
              </div>
              <h5 className="client-name">{name}</h5>
              <small className="client-review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
