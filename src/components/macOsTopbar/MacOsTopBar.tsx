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

export function MacOsTopBar() {
  const [date, setDate] = useState(new Date())

  const [dateString, setDateString] = useState(date.toDateString())
  const [day, setDay] = useState(date.getDate())

  const [month, setMonth] = useState(dateString.split(' ')[1])
  const [weekDay, setWeekDay] = useState(dateString.split(' ')[0])

  const [hours, setHours] = useState(date.getHours())
  const [minutes, setMinutes] = useState(date.getMinutes())

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    setDateString(date.toDateString())
    setDay(date.getDate())
    setMonth(dateString.split(' ')[1])
    setWeekDay(dateString.split(' ')[0])
    setHours(date.getHours())
    setMinutes(date.getUTCMinutes())
  }, [date])

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
          <IoIosMoon size={20} />
          <IoIosBatteryCharging size={20} />
          <IoIosWifi size={20} />
          <IoIosSearch size={20} />
          <IoIosSwitch size={20} />
        </div>
        <div className={styles.dateContainer}>
          <p>
            {weekDay} {day} {month}
          </p>
          <p>
            {hours}:{minutes > 9 ? minutes : `0${minutes}`}
          </p>
        </div>
      </div>
    </div>
  )
}
