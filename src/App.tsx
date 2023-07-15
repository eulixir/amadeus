import { useState, FC } from 'react'
import styles from './styles/App.module.css'
import kurisu from './assets/bg_character_.png'
// import { processMessageToChatGPT } from './services/sendMessageToAPI'
import { TopBar } from './components/topBar/TopBar'
// import { BsFillSendFill } from 'react-icons/bs'
// import { AiOutlineClose } from 'react-icons/ai'
import { MacOsTopBar } from './components/macOsTopbar/MacOsTopBar'

// const API_KEY = "";

// const username = ' USER '

export const App: FC<{}> = () => {
  const [currentKirisuMessage, setCurrentKirisuMessage] = useState(
    'Hello, he probaply went to see.'
  )
  //   const [messages, setMessages] = useState([
  //     {
  //       message: 'Hello!',
  //       sentTime: 'just now',
  //       sender: 'Amadeus',
  //     },
  //   ])
  const [typingMessage, setTypingMessage] = useState('')

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
  //         <div className="messageInputChatting">
  //           <input
  //             type="text"
  //             placeholder="メッセージを入れて下さい"
  //             onKeyDown={(e) => {
  //               if (e.key === 'Enter') {
  //                 handleSend(e.target.value)
  //                 e.target.value = ''
  //               }
  //             }}
  //           />
  //         </div>
  //       </div>
  //     </>
  //   )
  // }

  return (
    <div className={styles.appContainer}>
      <MacOsTopBar />
      <div className={styles.appInterfaceContainer}>
        <TopBar />
        <div className={styles.kurisuContainer}>
          <img
            className={styles.kurisu}
            id="kurisu"
            src={kurisu}
            alt="Kurisu"
          />
          <div className={styles.chatContainer}>
            <div>
              <p>"{currentKirisuMessage}"</p>

              <div className={styles.kurisuNameContainer}>
                <div className={styles.nameLine} />
                Makise Kurisu
                <div className={styles.nameLine} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
