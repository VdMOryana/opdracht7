import Image from 'next/image';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ButtonGroup from '@/components/Buttons';
import useNetwork from '@/data/network';
import {useState} from 'react';
import Link from 'next/link';
import Telefoon from '../../public/Telefoon.png';

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
      <main >

        <div>
          <h1 className={styles.TussenTitels}> Zoek een Velo- station of adres </h1>
          <Link href="/filter">
            <button className={styles.SearchButton} > Search </button>
          </Link>
        </div>

        <h1 className={styles.TussenTitels}> Tarieven </h1>

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          style={{
            '--swiper-navigation-color': '#BF0500',
            '--swiper-navigation-color-prev': '#BF0500',
            '--swiper-navigation-color-next': '#BF0500',
          }}
        >

          <SwiperSlide> 
            <div className={styles.SwiperSlide}>
              <div className="slide-content">
              <h2 className={styles.TitelSwiper}> Dagpas * </h2>
              <p className={styles.InfoSwiper}> Krijg 24 uur lang toegang tot Velo. </p>
              <p className={styles.PrijsSwiper}> €5 </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide> 
          <div className={styles.SwiperSlide}>
            <div className="slide-content">
              <h2 className={styles.TitelSwiper}> Weekpas * </h2>
              <p className={styles.InfoSwiper}> Krijg 7 dagen lang toegang tot Velo. </p>
              <p className={styles.PrijsSwiper}> €12 </p>
            </div>
          </div>

          </SwiperSlide>
          <SwiperSlide>
          <div className={styles.SwiperSlide}>
            <div className="slide-content">
              <h2 className={styles.TitelSwiper}> Jaarkaart * </h2>
              <p className={styles.InfoSwiper}> Krijg 1 jaar lang toegang tot Velo. </p>
              <p className={styles.PrijsSwiper}> €58 </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <p className={styles.Onderschrift}> * 30 minuten per rit inbegrepen. <br />
            Rit 30 - 60 minuten +€0,50. <br />
            Rit 60 - 90 minuten +€1,50. <br />
            Rit meer dan 90 minuten +€5 / begonnen uur </p>

        <div className={styles.HelpContainer}>
          <h1 className={styles.TussenTitels}>Help</h1>
          <Image className={styles.Telefoon}
            src ={Telefoon} 
            alt="Telefoon"
          />
        </div>

        <ButtonGroup/>

      </main>
    </>
  )
}