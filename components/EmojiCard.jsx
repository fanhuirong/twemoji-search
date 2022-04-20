// https://gist.github.com/chibicode/fe195d792270910226c928b69a468206?permalink_comment_id=3650172
import React, { memo } from "react"
import Image from "next/image"
import { getEmojiUrl } from "../utils"

const Twemoji = ({ emoji, size = 24 }) => {
  const image = getEmojiUrl(emoji.hexcode)
  return (
    <Image
        src={image}
        height={size}
        width={size}
        alt={emoji.emoji}
    />
  )
}

export default memo(Twemoji)