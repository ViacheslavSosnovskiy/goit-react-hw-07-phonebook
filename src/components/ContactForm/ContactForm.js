import {useState} from "react";
import s from "./contactForm.module.css";
import {useSelector, useDispatch} from 'react-redux'
import {getItems} from '../../redux/contacts/contacts-selectors'
// import contactsActions from '../../redux/contacts/contacts-actions'
import {addContact} from '../../redux/contacts/contacts-operations'
import { toast } from "react-toastify";


const initialState = {
    name: "",
    number: "",
}

export default function ContactForm() {
const [state, setState] = useState(initialState)
const contacts = useSelector(getItems)
const dispatch = useDispatch()

 const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    setState((prevState) => ({...prevState, [name]: value}))
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(contacts.some((contact) => contact.name === state.name)) {
      toast.error("This contact is already exist ! Try one more time, please!");
      return;
    }
    // dispatch(contactsActions.addContact(state))
    dispatch(addContact(state))
    resetForm();
  };

  const resetForm = () => {
    setState(initialState);
  };

    return (
      <>
        <form onSubmit={handleSubmit}>
          <label className={s.label}>
            Name
            <input
              maxLength="22"
              className={s.input}
              type="text"
              name="name"
              value={state.name}
              onChange={handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>

          <label className={s.label}>
            Number
            <input
              className={s.input}
              type="tel"
              name="number"
              value={state.number}
              onChange={handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </label>

          <button type="submit" className={s.button}>
            Add contact
          </button>
        </form>
      </>
    );
    }
