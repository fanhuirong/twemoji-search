import Head from 'next/head'
import emojis from 'emojibase-data/en/data.json';
import styles from '../styles/Home.module.scss'

import EmojiCard from '../components/EmojiCard';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Twemoji Search</title>
      </Head>
      <h1>Twemoji Search</h1>
      {emojis.map((item,index) =>{
        return (<EmojiCard key={index} emoji={item}/>)
      })}
    </div>
  )
}
