import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Contact.module.css'
import Link from 'next/link'

export default function Contact() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Contact</title>
            </Head>

            <main className={styles.main}>
                <div>
                    <div className={styles.header}>
                        <Image 
                            src='/images/logo.png' 
                            alt='Midwestern Logo' 
                            width={350}
                            height={73}
                        />
                        <Link href='/'>
                            <a>home</a>
                        </Link>              
                    </div>
                    <div className={styles.contact}>
                        <div className={styles.left}>
                            <h1>Heading One</h1>
                            <hr />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do dos eiusmod tempor incididunt ut labore et trace dolore magna aleque.</p>
                            <br />
                            <p>Proin sagittis nisl rhocus mattis rhoncus. At augue eget acrcu dictum varius duis at consectetur lorem.</p>
                        </div>
                        <div className={styles.right}>
                            <h2>Heading Two</h2>
                            <form /*onSubmit={handleSubmit}*/>
                                <label>
                                    <input
                                        type='text'
                                        placeholder='First Name'
                                        // value={name}
                                        // onChange={(e)=> setName(e.target.value)}
                                        />
                                </label>
                                <label>
                                    <input
                                        type='text'
                                        placeholder='Last Name'
                                        />
                                </label>
                                <label>
                                    <input
                                        type='text'
                                        placeholder='Title'
                                        />
                                </label>
                                <label>
                                    <input
                                        type='text'
                                        placeholder='Email'
                                        />
                                </label>
                                <label className="message">
                                    <input
                                        type='textarea'
                                        placeholder='Message'
                                        />
                                </label>
                                <button type='submit'>submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}