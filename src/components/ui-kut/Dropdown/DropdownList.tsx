import { IQuestionsItems } from '../../sections/Questions/questions'
import DropdownItem from './DropdownItem'

interface IDropdownList {
  items: IQuestionsItems[]
}

const DropdownList = ({ items }: IDropdownList) => {
  return items.map((e) => (
    <DropdownItem key={e.id} title={e.title} text={e.description} />
  ))
}
export default DropdownList
