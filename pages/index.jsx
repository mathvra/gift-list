import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Item from '../components/Item'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'

export default function Home() {


  const [gifts, setGifts] = useState([])

  useEffect(() => {
    callGifts()
    function callGifts() {
      fetch('/api/gifts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(response => response.json())
        .then(async (response) => {
          setGifts(await response)
        })
    }
  }, [setGifts])


  return (
    <div>
      <title>Emilly e Max ♥</title>
      <Header />
      <div className={styles.containerBannerMain}>
        <Image
          className={styles.bannerMain}
          src="/emillymax2.webp"
          height={2000}
          width={3000}
          alt="Emilly e Max" />
      </div>
      <div className={styles.bottomBanner}></div>
      <div className={styles.container}>
        <div className={styles.mapsChurch}>
          <Image
            className={styles.flowerTitle}
            src="/flowers.png"
            height={57}
            width={200}
            alt="flowers" />
          <h1>Cerimônia</h1>
          <Image
            className={styles.ImgChurch}
            src="/santo_afonso.png"
            height={608}
            width={1080}
            alt="Santo Afonso" />
          <p className={styles.legendImage}>Igreja Santo Afonso</p>
          <p className={styles.textCall}>Gostaríamos muito de contar com a presença de todos vocês no momento em que nossa união será abençoada diante de Deus! Contamos com vocês!</p>
          <iframe className={styles.iframeChurch} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.0888128323318!2d-35.20947508405657!3d-5.843106159216033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b2ff791ac68411%3A0x9eaba592f340dca3!2sIgreja%20de%20Santo%20Afonso!5e0!3m2!1spt-BR!2sbr!4v1661043239913!5m2!1spt-BR!2sbr" style={{ border: '0', width: '100%', height: '250px' }} loading="lazy"></iframe>
        </div>

        <div className={styles.mapsBuffet}>
          <Image
            className={styles.flowerTitle}
            src="/flowers.png"
            height={57}
            width={200}
            alt="flowers" />
          <h1>Recepção</h1>
          <Image
            className={styles.ImgBuffet}
            src="/solar_imperial.jpg"
            height={608}
            width={1080}
            alt="Santo Afonso" />
          <p className={styles.legendImage}>Solar Imperial</p>
          <p className={styles.textCall}>Os noivos convidam para recepção no Solar Imperial após cerimônia religiosa.</p>
          <iframe className={styles.iframeBuffet} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.2308549559193!2d-35.21705708405683!3d-5.823035459039341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b255601fdc0ec9%3A0xc530dde69af66eba!2sSolar%20Imperial%20%7C%20Recep%C3%A7%C3%B5es%20%7C%20Natal!5e0!3m2!1spt-BR!2sbr!4v1661219886014!5m2!1spt-BR!2sbr" style={{ border: '0', width: '100%', height: '250px' }} loading="lazy"></iframe>
        </div>

        <div className={styles.listGifts}>
          <Image
            className={styles.flowerTitle}
            src="/flowers.png"
            height={57}
            width={200}
            alt="flowers" />
          <h1>
            Lista de presentes
          </h1>

          <p>
            Escolha um presente desejado
          </p>

          <div className={styles.message}>

            <p>
              Alguns itens da lista possuem um link de sugestão. <br />
              Caso prefira, pode ficar a vontade para procurar em outras lojas.
            </p>
            <p>
              <b>
                Endereço para entrega:
              </b><br />
              Rua das Verbenas, 65, Capim Macio, Natal/RN <br />
              CEP: 59078-090
            </p>
          </div>
          <div className={styles.signedList}>
            {gifts.map((gift, index) => (
              gift.name != '' ?
                <Item
                  key={index}
                  gift={gift}
                  update={setGifts}
                  sign={true}
                />
                : null
            ))}
          </div>
          <div className={styles.list}>
            {gifts.map((gift, index) => (
              gift.name == '' ?
                <Item
                  key={index}
                  gift={gift}
                  update={setGifts}
                />
                : null
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
