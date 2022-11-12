import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/operations';
import { selectGetFilterValue, selectGetItemsContacts } from 'redux/selector';
import s from './ContactsList.module.css';

export function ContactsList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectGetItemsContacts);
  const filter = useSelector(selectGetFilterValue);
  const currentContacts = contacts.filter(item => item.name.toLowerCase().includes(filter));

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (currentContacts.length > 0) {
    return (
      <ul className={s.contactsList}>
        {currentContacts.map(({ id, name, number }) => (
          <li key={id}>
            <div className={s.contact}>
              <p className={s.text}>Name: {name}</p>
              <p className={s.text}>Phone: {number}</p>
            </div>
            <button type="button" onClick={() => dispatch(deleteContact(id))} className={s.button}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
