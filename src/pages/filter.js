import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import useNetwork from '@/data/network';
import styles from '@/styles/Stations.module.css';
import Logo from '../../public/Logo.png';


export default function Filter() {
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
    <main>
      <div className={styles.Header}>
          <Image className={styles.Logo}
            src ={Logo} 
            alt="Logo"
          />
        </div>

        <div>
          <h1 className={styles.TussenTitels}> Zoek een Velo- station of adres </h1>
          <input className={styles.SearchBalk} type='text' value={filter} onChange={handleFilterChange}/>
          <Link href="/filter">
            <button className={styles.SearchButton} > Search </button>
          </Link>
        </div>

        <div> 
        {stations.map(station => {return (
        <div key={station.id}>
            <Link 
            className={styles.StationList}
            href={`/stations/${station.id}`}>
            {station.name}
            </Link>
        </div>
        )})} 
        </div>
    </main>
    </>
  )
}