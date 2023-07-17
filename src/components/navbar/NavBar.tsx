import styles from './NavBar.module.css'

import { IoIosArrowForward, IoIosChatboxes, IoIosTrash } from 'react-icons/io'

import { useState } from 'react'
import { Chat } from '../chat/Chat'

import { clearHistory } from '../../services/history/clearHistory'

export const NavBar = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false)

  function showSidebar() {
    setSideBarOpen(!sideBarOpen)

    return
  }

  function HandleClearHistory() {
    clearHistory()

    setSideBarOpen(false)
    return
  }

  return (
    <>
      <div className={styles.navbar}>
        <IoIosChatboxes onClick={showSidebar} size="2rem" />
      </div>
      <nav className={sideBarOpen ? styles.navMenuActive : styles.navMenu}>
        <div className={styles.navbarToggle}>
          <div>
            <IoIosTrash size="2rem" onClick={() => HandleClearHistory()} />
            <IoIosArrowForward
              size="2rem"
              onClick={() => setSideBarOpen(false)}
            />
          </div>
          <div className={styles.chatHistoryContainer}>
            <Chat />
          </div>
        </div>
      </nav>
    </>
  )
}
