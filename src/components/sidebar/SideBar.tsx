import styles from './SideBar.module.css'

import { IoIosArrowForward, IoIosChatboxes, IoIosTrash } from 'react-icons/io'

import { useEffect, useRef, useState } from 'react'
import { Chat } from '../chat/Chat'

import { clearHistory } from '../../services/history/clearHistory'
interface SideBarProps {
  messages: MessageProps[]
}
interface MessageProps {
  sender: string
  message: string
  id: number
  timestamp: string
}

export function SideBar({ messages }: SideBarProps) {
  const [sideBarOpen, setSideBarOpen] = useState(false)

  function showSidebar() {
    setSideBarOpen(!sideBarOpen)

    return
  }

  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
    })
  }, [])

  function HandleClearHistory() {
    clearHistory()

    setSideBarOpen(false)
    return
  }

  return (
    <>
      <div className={styles.sidebar}>
        <button onClick={showSidebar}>
          <IoIosChatboxes size="2rem" />
        </button>
      </div>
      <nav className={sideBarOpen ? styles.sideMenuActive : styles.sideMenu}>
        <div className={styles.sidebarToggle}>
          <div>
            <IoIosTrash size="2rem" onClick={HandleClearHistory} />
            <IoIosArrowForward
              size="2rem"
              onClick={() => setSideBarOpen(false)}
            />
          </div>
          <div className={styles.chatHistoryContainer} ref={scrollRef}>
            <Chat messages={messages} />
          </div>
        </div>
      </nav>
    </>
  )
}
