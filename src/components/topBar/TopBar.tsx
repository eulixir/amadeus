import styles from './TopBar.module.css'
import { FiMaximize2 } from 'react-icons/fi'
import { PiMinusThin } from 'react-icons/pi'
import { AiOutlineClose } from 'react-icons/ai'

export const TopBar = () => {
  return (
    <header className={styles.headerContainer}>
      <div>
        <div className={styles.circle}>
          <AiOutlineClose size="9px" />
        </div>
        <div className={styles.circle}>
          <PiMinusThin size="12px" />
        </div>
        <div className={styles.circle}>
          <FiMaximize2 size="7px" />
        </div>
      </div>
      <p>Amadeus</p>
    </header>
  )
}
