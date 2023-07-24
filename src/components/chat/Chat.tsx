import styles from './Chat.module.css'
import { AiOutlineUser } from 'react-icons/ai'
import { getChatHistory } from '../../services/history/getChatHistory'
import { useEffect, useState } from 'react'

interface ChatProps {
  sender: string
  message: string
  id: number
  timestamp: string
}

export function Chat() {
  const [messages, setMessages] = useState(getChatHistory)

  useEffect(() => {
    setMessages(getChatHistory)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setMessages(getChatHistory)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.messagesContainer}>
      {messages.map((chat: ChatProps) => {
        return (
          <>
            {chat.sender === 'Amadeus' ? (
              <div className={styles.amadeusChatContainer} key={chat.id}>
                <span>{chat.timestamp}</span>
                <div className={styles.amadeusImg} />
                <div className={styles.message}>{chat.message}</div>
              </div>
            ) : (
              <div className={styles.userChatContainer} key={chat.id}>
                <span>{chat.timestamp}</span>
                <div className={styles.userImg}>
                  <AiOutlineUser size="32px" />
                </div>
                <div className={styles.message}>{chat.message}</div>
              </div>
            )}
          </>
        )
      })}
    </div>
  )
}
