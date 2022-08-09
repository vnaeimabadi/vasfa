//CountMethods.js
import { Text } from 'dripsy'
import React, { useEffect, useState, useRef } from 'react'

//setInterval
export const CountSetInterval = (props: any) => {
  const intervalRef = useRef()
  const countRef = useRef()

  // label of counter
  // number to increment to
  // duration of count in seconds
  const { number, duration,label } = props

  // number displayed by component
  const [count, setCount] = useState('0')

  // calc time taken for computation
  const [timeTaken, setTimeTaken] = useState(Date.now())

  useEffect(() => {
    let start = 0
    // first three numbers from props
    const end = parseInt(number)
    // if zero, return
    if (start === end) return

    // find duration per increment
    let totalMilSecDur = parseInt(duration)
    let incrementTime = (totalMilSecDur / end) * 1000

    // timer increments start counter
    // then updates count
    // ends if start reaches end
    let timer = setInterval(() => {
      start += 1

      //update uisng state
      setCount(String(start))

      //update using ref
      //   countRef.current.innerHTML = start;

      if (start === end) {
        clearInterval(timer)
        const diff = Date.now() - timeTaken
        setTimeTaken(diff / 1000)

        //uncomment this when using ref
        // setCount(String(start));
      }
    }, incrementTime)

    // dependency array
  }, [number, duration])

  return <Text>{count}{label}</Text>
}
