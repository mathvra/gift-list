import Image from 'next/image'
import styles from '../styles/Header.module.css'

export default function Header(){
    return(
        <div className={styles.container}>
            <header>
                <Image
                    className={styles.logo}
                    src="/banner-site.png"
                    height={'100%'}
                    width={350}
                    alt="EmillyEMax" />
            </header>
        </div>
    )
}