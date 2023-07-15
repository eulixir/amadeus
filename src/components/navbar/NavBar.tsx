import styles from './NavBar.module.css'

import { AiOutlineClose } from 'react-icons/ai'
import { BsFillSendFill } from 'react-icons/bs'
import { IoIosArrowForward, IoIosChatboxes } from 'react-icons/io'

import { useState } from 'react'

export const NavBar = () => {
  const [typingMessage, setTypingMessage] = useState('')

  const chatHistory = [
    {
      sender: 'Amadeus',
      message: 'Hello, I am Amadeus. How can I help you?',
    },
    {
      sender: 'User',
      message: 'I want to book a flight',
    },
    {
      sender: 'Amadeus',
      message: 'Sure, where do you want to go?',
    },
    {
      sender: 'User',
      message: 'I want to go to London',
    },
    {
      sender: 'Amadeus',
      message: 'When do you want to go?',
    },
    {
      sender: 'User',
      message: 'I want to go next week',
    },
    {
      sender: 'Amadeus',
      message: 'Okay, I found a flight for you',
    },
    {
      sender: 'User',
      message: 'Great, thank you!',
    },
  ]

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
            {chatHistory.map((item, index) => {
              return <span key={index}>{item.sender}</span>
            })}
          </div>
          <label>Message:</label>
          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder="メッセージを入れて下さい"
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
