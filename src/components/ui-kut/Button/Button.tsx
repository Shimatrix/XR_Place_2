import { FC } from 'react'
import { TButtonProps } from './type'
import styles from './Button.module.scss'
import { ButtonIcon } from '../Button-icon/Button-icon'

export const Button: FC<TButtonProps> = ({
  onClick,
  label,
  type = 'primary',
  size,
  disabled = false,
  children,
}) => {
  const buttonClass = `${styles.btn} ${styles[type]} ${size === 'small' ? styles.small : ''} ${disabled ? styles.disabled : ''}`

  const iconStrokeCircle = type === 'primary' ? '#2D2D2D' : 'none'
  const iconStrokeLine = type === 'primary' ? '#2D2D2D' : '#171717'

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
    >
      {children}
      <ButtonIcon strokeCircle={iconStrokeCircle} strokeLine={iconStrokeLine} />
    </button>
  )
}
