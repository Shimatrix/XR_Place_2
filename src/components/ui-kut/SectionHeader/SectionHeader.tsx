import css from './SectionHeader.module.scss'

interface ISectionHeader {
  theme: string
  title: string
}

const SectionHeader = ({ theme, title }: ISectionHeader) => {
  return (
    <div className={`${css.container}`}>
      <div className={`${css.theme}`}>{theme}</div>
      <h2 className={`${css.title}`}>{title}</h2>
    </div>
  )
}

export default SectionHeader
