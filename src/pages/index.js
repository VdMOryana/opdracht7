import Head from 'next/head';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ButtonGroup from '@/components/Buttons';
import useNetwork from '@/data/network';
import Link from 'next/link';
import {useState} from 'react';

import styles from '@/styles/Home.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Home() {
  const [ filter, setFilter ] = useState('');
  const { network, isLoading, isError } = useNetwork()
 
  if (isLoading) return <div>Loading ...</div>
  if (isError) return <div>Error ...</div>

  const stations = network.stations.filter(station => station.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0);

  function handleFilterChange(e){
    setFilter(e.target.value);
  }

  return (
    <>
      <Head>
        <title>Antwerpen Rollers</title>
      </Head>

      <main>

        <div>
        <input type='text' value={filter} onChange={handleFilterChange}/>
          {stations.map(station => <Link href={`/stations/${station.id}`} key={station.id}>{station.name}</Link>)}
        </div>

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
            <div className={styles.SwiperSlide}>
              <div class="slide-content">
              <h2> Dagpas </h2>
              <p> Krijg 24 uur lang toegang tot Velo. </p>
              <p> €5 </p>
              <button>Knop tekst</button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide> 
          <div className={styles.SwiperSlide}>
            <div class="slide-content">
              <h2> Weekpas </h2>
              <p> Krijg 7 dagen lang toegang tot Velo. </p>
              <p> €12 </p>
              <button>Knop tekst</button>
            </div>
          </div>

          </SwiperSlide>
          <SwiperSlide>
          <div className={styles.SwiperSlide}>
            <div class="slide-content">
              <h2> Jaarkaart </h2>
              <p> Krijg 1 jaar lang toegang tot Velo. </p>
              <p> €58 </p>
              <button>Knop tekst</button>
              </div>
            </div>
          </SwiperSlide>

          <p> 30 minuten per rit inbegrepen. Rit 30 - 60 minuten +€0,50. Rit 60 - 90 minuten +€1,50. Rit meer dan 90 minuten +€5 / begonnen uur</p>
        </Swiper>

        <ButtonGroup/>

      </main>
    </>
  )
}