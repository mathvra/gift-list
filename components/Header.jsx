import Image from 'next/image'
import styles from '../styles/Header.module.css'

export default function Header(){
    return(
        <div className={styles.container}>
            <header>
                <Image
                    className={styles.logo}
                    src="/logotipoEmillyEMax.svg"
                    height={'100%'}
                    width={350}
                    alt="EmillyEMax" />
                <Image
                    className={styles.logo}
                    src="/karolegesio.jpg"
                    height={'100%'}
                    width={'100%'}
                    alt="EmillyEMax" />
            </header>
        </div>
    )
}