import { useState, FC, PointerEvent } from 'react'
import styles from './styles/App.module.css'
import kurisu from './assets/bg_character_.png'
import { motion } from 'framer-motion'
// import { processMessageToChatGPT } from './services/sendMessageToAPI'
import { TopBar } from './components/topBar/TopBar'

import { MacOsTopBar } from './components/macOsTopbar/MacOsTopBar'
import { NavBar } from './components/navbar/NavBar'
import { useTypingEffect } from './hooks/typingEffect'

import { translateText } from './services/translateText'

// const username = ' USER '

export const App: FC<{}> = () => {
  const [currentKirisuMessage, setCurrentKirisuMessage] = useState('Hello.')
  //   const [messages, setMessages] = useState([
  //     {
  //       message: 'Hello!',
  //       sentTime: 'just now',
  //       sender: 'Amadeus',
  //     },
  //   ])

  //   const lastMessageRef = useRef(null)

  //   const handleSend = async (message) => {
  //     console.log('User:', message)
  //     const sentTime = new Date().toLocaleString()
  //     const newMessage = {
  //       message,
  //       direction: 'outgoing',
  //       sender: 'user',
  //       username: username,
  //       sentTime: sentTime,
  //     }
  //     const newMessages = [...messages, newMessage]
  //     setMessages(newMessages)
  //     setIsTyping(true)
  //     await processMessageToChatGPT(newMessages, username)
  //   }

  //   useEffect(() => {
  //     lastMessageRef.current.scrollIntoView({ behavior: 'smooth' })
  //   }, [messages])

  //   useEffect(() => {
  //     if (lastMessageRef.current) {
  //       lastMessageRef.current.scrollIntoView({ behavior: 'smooth' })
  //     }
  //   }, [messages])

  //   return (
  //     <>
  //       <div className="App">
  //         <div className="chat">
  //           <div className="messageList" ref={lastMessageRef}>
  //             {isTyping && (
  //               <div className="typingIndicator">Amadeus is typing...</div>
  //             )}
  //             {messages.map((message, i) => (
  //               <div
  //                 key={i}
  //                 className={`message ${
  //                   message.sender === 'Amadeus' ? 'assistant' : 'user'
  //                 }`}
  //               >
  //                 {message.message}
  //               </div>
  //             ))}
  //           </div>
  //           <div className="messageInput">
  //             <input
  //               type="text"
  //               placeholder="Type message here"
  //               onKeyDown={(e) => {
  //                 if (e.key === 'Enter') {
  //                   handleSend(e.target.value)
  //                   e.target.value = ''
  //                 }
  //               }}
  //             />
  //           </div>
  //         </div>
  //         <img className="kurisu" id="kurisu" src={kurisu} alt="Kurisu"></img>
  //       </div>
  //       <div className="Chatting">
  //         <div className="messageList" ref={lastMessageRef}>
  //           <div className={`message assistant`}>
  //             {
  //               messages
  //                 .filter((message) => message.sender === 'Amadeus')
  //                 .slice(-1)[0]?.message
  //             }
  //           </div>
  //         </div>
  //       </div>
  //     </>
  //   )
  // }

  translateText('Hello, how are you?')

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
              <p>"{useTypingEffect(currentKirisuMessage, 100)}"</p>
            </div>
            <div className={styles.kurisuNameContainer}>
              <div className={styles.nameLine} />
              Makise Kurisu
              <div className={styles.nameLine} />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
