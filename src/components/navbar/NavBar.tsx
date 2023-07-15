import styles from './NavBar.module.css'

import { AiOutlineClose } from 'react-icons/ai'
import { BsFillSendFill } from 'react-icons/bs'
import { IoIosArrowForward, IoIosChatboxes } from 'react-icons/io'

import { useState } from 'react'
import { Chat } from '../chats/Chat'

export const NavBar = () => {
  const [typingMessage, setTypingMessage] = useState('')

  const [sideBarOpen, setSideBarOpen] = useState(false)

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
            <Chat />
          </div>
          <label>Message:</label>
          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder="Send a message to Kurisu..."
              onChange={(e) => setTypingMessage(e.target.value)}
              value={typingMessage}
            />
            <div className={styles.erasePhraseContainer}>
              {typingMessage != '' ? (
                <AiOutlineClose
                  className={styles.activeEraseButton}
                  onClick={() => setTypingMessage('')}
                />
              ) : (
                <AiOutlineClose className={styles.inactiveEraseButton} />
              )}
            </div>
            <div className={styles.sendMessageContainer}>
              <BsFillSendFill color="white" />
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
