import styles from './Chat.module.css'
import { AiOutlineUser } from 'react-icons/ai'

interface ChatProps {
  messages: { sender: string; message: string }[]
}

export const Chat = ({ messages }: ChatProps) => {
  return (
    <div className={styles.messagesContainer}>
      {messages.map((chat) => {
        return (
          <>
            {chat.sender === 'Amadeus' ? (
              <div className={styles.amadeusChatContainer}>
                <div className={styles.amadeusImg} />
                <div className={styles.message}>{chat.message}</div>
              </div>
            ) : (
              <div className={styles.userChatContainer}>
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
