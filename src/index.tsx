import * as React from 'react'
import Swiper from 'react-id-swiper'
import './dist/index.css'
export interface IProps {
  children?: React.ReactNode
}
export const Slider = ({ children }: IProps) => {
  const params = {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: true,
    breakpoints: {
      1024: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 1,
      },
      320: {
        slidesPerView: 1,
      },
    },
  }

  return <Swiper {...(params as any)}>{children}</Swiper>
}
