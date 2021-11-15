import s from "./filter.module.css";
import {useSelector, useDispatch} from 'react-redux'
import {getFilter} from '../../redux/contacts/contacts-selectors'
import {changeFilter} from '../../redux/contacts/contacts-actions'

export default function Filter() {
const value = useSelector(getFilter)
const dispatch = useDispatch()

  return (
    <label>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </label>
  );
};
