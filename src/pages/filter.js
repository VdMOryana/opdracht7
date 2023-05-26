import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import useNetwork from '@/data/network';
import styles from '@/styles/Stations.module.css';

import Green from '../../public/Green.png';
import Red from '../../public/Red.png';


export default function Filter() {
    const [ filter, setFilter ] = useState('');
    const { network, isLoading, isError } = useNetwork()
   
    if (isLoading) return <div>Loading ...</div>
    if (isError) return <div>Error ...</div>
  
    const stations = network.stations;
    const filteredStations = stations.filter(station => station.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0);

    const notFilteredStations = stations.filter(station => !filteredStations.includes(station));

    function handleFilterChange(e){
        setFilter(e.target.value);
      }
      
return (
    <>  
    <main>
    <div>
      <h1 className={styles.TussenTitels}>Zoek een Velo-station of adres</h1>
      <input className={styles.SearchBalk} type="text" value={filter} onChange={handleFilterChange} />
    </div>
      {filteredStations.map(station => {
        const Beschikbaarheid = filter && (station.free_bikes > 5 ? <Image className={styles.Beschikbaarheid} src={Green} alt="Groen"/> : <Image className={styles.Beschikbaarheid} src={Red} alt="Rood"/>);
        return (
          <div key={station.id}>
            <Link className={styles.StationList} href={`/stations/${station.id}`}>
              {Beschikbaarheid}
              <div className='Info'>
                <div>{station.name}</div>
                <div>{station.extra.address}</div>
              </div>
            </Link>
          </div>
        );
      })}

      {filter && (
        <>
          <h1 className={styles.TussenTitels}>Overige stations</h1>
          {notFilteredStations.map(station => {
            return (
              <div key={station.id}>
                <Link className={styles.StationList} href={`/stations/${station.id}`}>
                  {station.name}
                </Link>
              </div>
            );
          })}
        </>
      )}
</main>
    </>
  )
}