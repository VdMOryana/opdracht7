import useNetwork from '@/data/network';
import {useRouter} from 'next/router';
import styles from '@/styles/Stations.module.css';

export default function Home(){
    const {network, isLoading, isError} = useNetwork()
    const router = useRouter()

    if (isLoading) return <div>Loading ...</div>
    if (isError) return <div>Error ...</div>

    const station = network.stations.find(station => station.id === router.query.stationId);
    console.log(station)
    
    return (    
        <div className={styles.station}>
            <h1 className={styles.TussenTitels}>{station.name}</h1>
            <h2 className={styles.OnderTitels}>{station.extra.address}</h2>
            <p className={styles.Text}>Free bikes: {station.free_bikes}</p>
            <p className={styles.Text}>Empty slots: {station.empty_slots}</p>

        </div>
      )
}