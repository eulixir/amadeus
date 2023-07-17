import styles from './NavBar.module.css'

import { IoIosArrowForward, IoIosChatboxes, IoIosTrash } from 'react-icons/io'

import { useEffect, useState } from 'react'
import { Chat } from '../chat/Chat'

import { getChatHistory } from '../../services/history/getChatHistory'
import { clearHistory } from '../../services/history/clearHistory'

export const NavBar = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false)

  const [messages, setMessages] = useState(getChatHistory)

  useEffect(() => {
    setMessages(getChatHistory)
  }, [])

  function showSidebar() {
    setSideBarOpen(!sideBarOpen)

    useState(getChatHistory)
    return
  }

  const handleClearHistory = () => {
    clearHistory()
    useState(getChatHistory)
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
            <IoIosTrash size="2rem" onClick={() => handleClearHistory()} />
            <IoIosArrowForward
              size="2rem"
              onClick={() => setSideBarOpen(false)}
            />
          </div>
          <div className={styles.chatHistoryContainer}>
            <Chat messages={messages} />
          </div>
        </div>
      </nav>
    </>
  )
}
