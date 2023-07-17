import { useState, FC, KeyboardEvent, useEffect } from 'react'
import styles from './styles/App.module.css'
import kurisu from './assets/bg_character_.png'
import { motion } from 'framer-motion'

import { AiOutlineClose } from 'react-icons/ai'
import { BsFillSendFill } from 'react-icons/bs'

import { TopBar } from './components/topBar/TopBar'

import { MacOsTopBar } from './components/macOsTopbar/MacOsTopBar'
import { NavBar } from './components/navbar/NavBar'

import { getLastKurisuMessage } from './services/history/getLastKurisuMessage'
import { playAudio } from './services/playAudio'

import { insertMessageToHistory } from './services/history/insertNewMessageToHistory'
import { processMessageToChatGPT } from './services/sendMessageToAPI'

export const App: FC<{}> = () => {
  const [currentKirisuMessage, setCurrentKirisuMessage] = useState('')
  const [typingMessage, setTypingMessage] = useState('')

  useEffect(() => {
    setCurrentKirisuMessage(getLastKurisuMessage())
    playAudio(currentKirisuMessage)
  }, [])

  function insertMessage() {
    insertMessageToHistory({
      sender: 'User',
      message: typingMessage,
    })

    setTypingMessage('')
  }

  async function applyEffects(
    e: KeyboardEvent<HTMLInputElement>
  ): Promise<void> {
    if (
      (e.key === 'Enter' && e.metaKey && typingMessage != '') ||
      (e.key === 'Enter' && e.ctrlKey && typingMessage != '')
    ) {
      insertMessage()

      setCurrentKirisuMessage(getLastKurisuMessage())

      await processMessageToChatGPT()

      return
    }

    return
  }

  return (
    <div className={styles.appContainer}>
      <MacOsTopBar />
      <motion.div
        drag
        dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
        className={styles.appInterfaceContainer}
      >
        <TopBar />
        <NavBar />
        <div className={styles.kurisuContainer}>
          <img
            draggable={false}
            className={styles.kurisu}
            id="kurisu"
            src={kurisu}
            alt="Kurisu"
          />
          <div className={styles.chatContainer}>
            <div>
              <p>"{currentKirisuMessage}"</p>
            </div>
            <div className={styles.kurisuNameContainer}>
              <div className={styles.nameLine} />
              Makise Kurisu
              <div className={styles.nameLine} />
            </div>
            <div className={styles.inputContainer}>
              <input
                type="text"
                placeholder="Send a message to Kurisu..."
                onChange={(e) => setTypingMessage(e.target.value)}
                value={typingMessage}
                onKeyDown={(e) => applyEffects(e)}
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
              <div
                className={styles.sendMessageContainer}
                onClick={() => insertMessage()}
              >
                <BsFillSendFill color="white" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
