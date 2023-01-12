import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";


export function Thanks() {


    return (
        <div className="hp-thanks">
            <h4 className="hp-thanks__title">Подяки</h4>
            <div className="hp-thanks__slider">
                <Swiper
                    pagination={{clickable: true}}
                    slidesPerView={1.5}
                    spaceBetween={20}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <iframe width="100%" height="478" src="https://www.youtube.com/embed/bMknfKXIFA8"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                    </SwiperSlide>
                    <SwiperSlide>
                        <iframe width="100%" height="478" src="https://www.youtube.com/embed/bMknfKXIFA8"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="hp-thanks__mobile">
                <iframe width="100%" height="478" src="https://www.youtube.com/embed/bMknfKXIFA8"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
                <iframe width="100%" height="478" src="https://www.youtube.com/embed/bMknfKXIFA8"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
            </div>
        </div>
    )
}
