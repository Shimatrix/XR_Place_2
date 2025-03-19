export type TButtonProps = {
  onClick?: () => void
  label: string
  type?: 'primary' | 'secondary'
  size?: 'small'
  disabled?: boolean
  children?: React.ReactNode
}
