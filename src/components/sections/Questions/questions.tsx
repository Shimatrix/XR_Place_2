import SectionHeader from '../../ui-kut/SectionHeader/SectionHeader'
import DropdownList from '../../ui-kut/Dropdown/DropdownList'
import style from './question.module.scss'
import { mockService } from '../../../services/mockService'

export interface IQuestionsItems {
  title: string
  id?: number
  description: string
}

let mockArr: IQuestionsItems[] = []

mockService.getDemoData().then((res) => (mockArr = res))

const Questions = () => {
  return (
    <section className={style.container}>
      <SectionHeader theme="Вопросы" title="Вопросы нашей команде" />
      <DropdownList items={mockArr} />
    </section>
  )
}

export default Questions
