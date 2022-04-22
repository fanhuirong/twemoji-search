// https://gist.github.com/chibicode/fe195d792270910226c928b69a468206?permalink_comment_id=3650172
import React, { memo } from "react"
import Image from "next/image"
import { getEmojiUrl } from "../utils"
import styles from '../styles/EmojiCard.module.scss'

const Twemoji = ({ emoji, size = 72 }) => {
  const image = getEmojiUrl(emoji.hexcode)
  return (
    <div className={styles.card}>
      <Image
        src={image}
        height={size}
        width={size}
        alt={emoji.emoji}
    />
    <h4 className={styles.title}>{emoji.label}</h4>
    <p>
        <span className={styles.info}>HEX:</span>
        <span className={styles.hexcode}>{emoji.hexcode}</span>
    </p>
    </div>
  )
}

export default memo(Twemoji)