import { useEffect, useRef, useState } from 'react'
import style from './Dropdown.module.scss'

interface IDropdownItem {
  title: string
  id?: number
  text: string
}

const DropdownItem = ({ title, text }: IDropdownItem) => {
  const [isOpen, setIsopen] = useState(false)
  const [height, setHeight] = useState('0px')
  const ref = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (ref.current) {
      setHeight(`${isOpen ? ref.current.scrollHeight : 0}px`)
    }
  }, [isOpen])

  return (
    <div className={style.container} onClick={() => setIsopen(!isOpen)}>
      <div className={style.dropdownItem}>
        <p>{title}</p>
        <div className={`${style.icon} ${isOpen && style.open}`}></div>
      </div>
      <p
        ref={ref}
        style={{ maxHeight: height }}
        className={`${style.description}`}
      >
        {text}
      </p>
    </div>
  )
}
export default DropdownItem
