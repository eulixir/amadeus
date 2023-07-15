import styles from './Chat.module.css'
import { AiOutlineUser } from 'react-icons/ai'

export const Chat = () => {
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

  return (
    <div className={styles.messagesContainer}>
      {chatHistory.map((chat) => {
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
