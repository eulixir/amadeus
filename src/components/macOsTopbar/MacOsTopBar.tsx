import { useEffect } from 'react'
import { useState } from 'react'
import styles from './MacOsTopBar.module.css'

import {
  IoIosWifi,
  IoIosBatteryCharging,
  IoIosSwitch,
  IoIosSearch,
  IoIosMoon,
} from 'react-icons/io'

import { AiFillApple } from 'react-icons/ai'
import { getCurrentDate } from '../../helpers/getCurrentDate'
import { getCurrentTime } from '../../helpers/getCurrentTime'

export const MacOsTopBar = () => {
  const currentDate = getCurrentDate()
  const currentTime = getCurrentTime()

  const [date, setDate] = useState(currentDate)
  const [time, setTime] = useState(currentTime)

  function setTimestamps() {
    setDate(currentDate)
    setTime(currentTime)

    return
  }

  useEffect(() => {
    const timer = setInterval(() => setTimestamps(), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.appInfoContainer}>
        <div className={styles.customControlContainer}>
          <AiFillApple size={20} />
          <p>Amadeus</p>
          <p>File</p>
          <p>Edit</p>
          <p>View</p>
          <p>Window</p>
          <p>Help</p>
        </div>
      </div>
      <div className={styles.appInfoContainer}>
        <div className={styles.optionContainer}>
          <IoIosMoon size={19} />
          <IoIosBatteryCharging size={19} />
          <IoIosWifi size={19} />
          <IoIosSearch size={19} />
          <IoIosSwitch size={17} />
        </div>
        <div className={styles.dateContainer}>
          <p>{date}</p>
          <p>{time}</p>
        </div>
      </div>
    </div>
  )
}
