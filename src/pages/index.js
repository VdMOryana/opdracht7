import Head from 'next/head';
import NavigationBar from '@/components/Navigation';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from '@/styles/Home.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Antwerpen Rollers</title>
      </Head>

      <main>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide> 
            <div class="slide-content">
            <h2>Titel van de slide</h2>
            <p>Tekst van de slide</p>
            <button>Knop tekst</button>
            <br/>
            <br/>
            <br/>
            </div>
          </SwiperSlide>

          <SwiperSlide> Slide 2 </SwiperSlide>
          <SwiperSlide> Slide 3 </SwiperSlide>
          <SwiperSlide> Slide 4 </SwiperSlide>
        </Swiper>

        <NavigationBar/>
      </main>
    </>
  )
}