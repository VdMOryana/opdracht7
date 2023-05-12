import useNetwork from '@/data/network';
import {useRouter} from 'next/router';
import styles from '@/styles/Stations.module.css';

export default function Home(){
    const {network, isLoading, isError} = useNetwork()
    const router = useRouter()

    if (isLoading) return <div>Loading ...</div>
    if (isError) return <div>Error ...</div>

    const station = network.stations.find(station => station.id === router.query.stationId);

    return (    
        <div className={styles.station}>
            <h1>{station.name}</h1>
            <p>{station.free_bikes}</p>
        </div>
      )
}