import { useState, FC, KeyboardEvent, useEffect } from 'react'
import styles from './styles/App.module.css'
import kurisu from './assets/bg_character_.png'
import { motion } from 'framer-motion'

import { AiOutlineClose } from 'react-icons/ai'
import { BsFillSendFill } from 'react-icons/bs'
import { IoIosSearch } from 'react-icons/io'
import { PiTextTBold } from 'react-icons/pi'

import { TopBar } from './components/topBar/TopBar'

import { MacOsTopBar } from './components/macOsTopbar/MacOsTopBar'
import { NavBar } from './components/navbar/NavBar'

import { getLastKurisuMessage } from './services/history/getLastKurisuMessage'

import { insertMessageToHistory } from './services/history/insertNewMessageToHistory'
import { processMessageToChatGPT } from './services/sendMessageToAPI'
import Modal from 'react-modal'

export const App = () => {
  const [currentKirisuMessage, setCurrentKirisuMessage] = useState('')
  const [typingMessage, setTypingMessage] = useState('')
  const [isThinking, setIsThinking] = useState(false)
  const [modalIsOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setCurrentKirisuMessage(getLastKurisuMessage())
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
      setIsOpen(false)
      insertMessage()

      setIsThinking(true)

      setCurrentKirisuMessage('Thinking...')

      await processMessageToChatGPT()

      setIsThinking(false)

      setCurrentKirisuMessage(getLastKurisuMessage())
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
              {isThinking ? (
                <p className={styles.loading}>Thinking</p>
              ) : (
                <p>"{currentKirisuMessage}"</p>
              )}
            </div>
            <div className={styles.kurisuNameContainer}>
              <div className={styles.nameLine} />
              Makise Kurisu
              <div className={styles.nameLine} />
            </div>
            <div>
              <PiTextTBold
                onClick={() => setIsOpen(true)}
                className={styles.openModalButton}
                size={32}
              />
            </div>
            <Modal
              isOpen={modalIsOpen}
              overlayClassName={styles.modalOverlay}
              className={styles.modalContainer}
            >
              <div draggable={false} className={styles.modalContentContainer}>
                <div className={styles.inputContainer}>
                  <div className={styles.searchContainer}>
                    <IoIosSearch
                      className={styles.serchIcon}
                      onClick={() => setTypingMessage('')}
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Send a message to Kurisu..."
                    onChange={(e) => setTypingMessage(e.target.value)}
                    value={typingMessage}
                    onKeyDown={(e) => applyEffects(e)}
                  />
                  <div
                    className={styles.sendMessageContainer}
                    onClick={() => insertMessage()}
                  >
                    <BsFillSendFill />
                  </div>
                </div>
                <AiOutlineClose
                  className={styles.closeModalButton}
                  size="32"
                  onClick={() => setIsOpen(false)}
                />
              </div>
            </Modal>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
