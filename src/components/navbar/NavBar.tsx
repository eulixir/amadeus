import styles from './NavBar.module.css'

import { IoIosArrowForward, IoIosChatboxes } from 'react-icons/io'

import { useEffect, useState } from 'react'
import { Chat } from '../chat/Chat'

import { getChatHistory } from '../../services/history/getChatHistory'

export const NavBar = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false)

  const [messages, setMessages] = useState(getChatHistory)

  useEffect(() => {
    setMessages(getChatHistory)
  }, [])

  const showSidebar = () => setSideBarOpen(!sideBarOpen)

  return (
    <>
      <div className={styles.navbar}>
        <IoIosChatboxes onClick={showSidebar} size="2rem" />
      </div>
      <nav className={sideBarOpen ? styles.navMenuActive : styles.navMenu}>
        <div className={styles.navbarToggle}>
          <div>
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
