import { useEffect, useRef, useState } from 'react'

export function useTypingEffect(textToType: string, delay: number) {
  const [currentPosition, setCurrentPostion] = useState(0)
  const currentPositionRef = useRef(0)

  useEffect(() => {
    const interval_id = setInterval(() => {
      setCurrentPostion((value) => value + 1)
      currentPositionRef.current += 1
      if (currentPositionRef.current > textToType.length) {
        clearInterval(interval_id)
      }
    }, delay)
    return () => {
      clearInterval(interval_id)
      setCurrentPostion(0)
    }
  }, [delay, textToType])

  return textToType.substring(0, currentPosition)
}
