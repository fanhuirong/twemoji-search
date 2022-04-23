import Head from 'next/head'
import { useState } from "react";
import emojis from 'emojibase-data/en/data.json';
import styles from '../styles/Home.module.scss'

import EmojiCard from '../components/EmojiCard';
import { SearchBar } from '../components/SearchBar';

export default function Home() {
  const [searchText, setSearchText] = useState('');
  const searchTwemoji = (v) =>{
    setSearchText(v);
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Twemoji Search</title>
      </Head>
      <div className={styles.title}>
        <h1>Twemoji Search</h1>
        <SearchBar onSearch={(v) =>searchTwemoji(v)}/>
      </div>
      <main className={styles.list}>
        {emojis
          .filter(item => item.label.includes(searchText))
          .map((item,index) =>{
            return (<EmojiCard key={index} emoji={item}/>)
          })}
      </main>
    </div>
  )
}
