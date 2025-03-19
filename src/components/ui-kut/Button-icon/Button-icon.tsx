import { FC } from 'react'
import { TIconProps } from './type'

export const ButtonIcon: FC<TIconProps> = ({
  width = 21,
  height = 21,
  fill = 'white',
  strokeCircle = '#2D2D2D',
  strokeLine = '#2D2D2D',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 22 22"
      fill="none"
    >
      <circle
        cx="10.9996"
        cy="10.9999"
        r="10.1708"
        fill={fill}
        stroke={strokeCircle}
        stroke-width="0.462311"
      />
      <path
        d="M5.68262 16.0854L16.3158 6.14575M16.3158 6.14575H5.68262M16.3158 6.14575V16.0854"
        stroke={strokeLine}
        stroke-width="0.693466"
      />
    </svg>
  )
}
