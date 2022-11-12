import { useSelector } from 'react-redux';
import { selectIsAuth } from 'redux/selector';
import { ContactsList } from '../ContactsList/ContactsList';
import { Filter } from '../Filter/Filter';
import { InputForm } from '../InputForm/InputForm';
import s from './Contacts.module.css';

export function Contacts() {
  const isAuth = useSelector(selectIsAuth);

  if (isAuth) {
    return (
      <div className={s.wrapper}>
        <div className={s.lables}>
          <Filter />
          <InputForm />
        </div>
        <ContactsList />
      </div>
    );
  } else {
    return <p className={s.title}>Log in to join the service!</p>;
  }
}
