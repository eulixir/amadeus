import styles from './Chat.module.css'

interface ChatProps {
  messages: MessageProps[]
}

interface MessageProps {
  sender: string
  message: string
  id: number
  timestamp: string
}

export function Chat({ messages }: ChatProps) {
  return (
    <div className={styles.messagesContainer}>
      {messages.map((chat: MessageProps) => {
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
                <div className={styles.userImg} />
                <div className={styles.message}>{chat.message}</div>
              </div>
            )}
          </>
        )
      })}
    </div>
  )
}
