import { useState } from 'react'

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false)
  const toggle = () => {
    setIsShowing(!isShowing)
    console.log(isShowing)
  }

  return { isShowing, toggle }
}

export default useModal
