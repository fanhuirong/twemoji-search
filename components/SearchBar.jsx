import React from 'react'
import styles from '../styles/SearchBar.module.scss'

export const SearchBar = ({onSearch}) => {

  return (
    <div>
      <input
        className={styles.input}
        type="text"
        name="searchBar"
        id="searchBar"
        placeholder="Search Twemoji"
        onChange={e =>onSearch(e.target.value)}
      />
    </div>
  )
}
