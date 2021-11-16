import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import React, { useState } from 'react'
import ThisLink from '../components/thisLink'

const object1 = ['Matt Johnson', 'Bart Paden', 'Ryan Doss', 'Jared Malcom']
const object2 = ['Matt Johnson', 'Bart Paden', 'Jodan Heigle', 'Tyler Viles']


export default function Home() {
  const [clicked, setClicked] = useState(false);

  const removeDupes = () => {
    let comboArray = object1.concat(object2);
    let newArray = [];
    for (let i = 0; i < comboArray.length; i++) {
      if (!newArray.includes(comboArray[i])) {
        newArray.push(comboArray[i]);
      }
    }
    setClicked(true);
    alert(newArray);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>

      <main className={styles.main}>
        <div>
          <div className={styles.header}>
            <Image 
              src='/images/logo.png' 
              alt='Midwestern Logo' 
              className={styles.logo}
              width={350}
              height={73}
              
            />
            <Link href='/contact'>
              <a>contact</a>
            </Link>              
          </div>
          <div className={styles.triple}>
            <div className={styles.bodies}>
              <div className={styles.image}>
                <Image 
                  src='/images/Talkie.png'
                  alt='talkie'
                  width={57.34}
                  height={120}
                />
              </div>
              <h2>Heading Two</h2>
              <p>Interger accumson molesite nist, id faucibus uma accumson quis. Proin vulputale, mauris semper maximus.</p>
              <button className={styles.button2}>Learn More</button>
            </div>
            <div className={styles.bodies}>
              <div className={styles.image}>
                <Image
                  src='/images/Rabbit.png' 
                  alt='rabbit' 
                  width={100}
                  height={75}
                />
              </div>
              <h2>Heading Two</h2>
              <p>Interger accumson molesite nist, id faucibus uma accumson quis. Proin vulputale, mauris semper maximus.</p>
              <button className={styles.button2}>Learn More</button>
            </div>
            <div className={styles.bodies}>
              <div className={styles.image}>
                <Image 
                  src='/images/Shield.png'
                  alt='shield'
                  width={120}
                  height={120}
                />
              </div>
              <h2>Heading Two</h2>
              <p>Interger accumson molesite nist, id faucibus uma accumson quis. Proin vulputale, mauris semper maximus.</p>
              <button className={styles.button2}>Learn More</button>
            </div>
          </div>
          <div className={styles.head1}>
            <h1>Heading One</h1>
            <hr />
            <p>Remove the duplicated in 2 Javascript objects and output the list of distinct names in a unordered list when  
            <ThisLink />
            is clicked. if the operation has been completed already notify the user that this has already been done.</p>
          </div>
        </div>
        )
      </main>
    </div>
  )
}
