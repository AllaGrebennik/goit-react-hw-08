import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import PageTitle from "../components/PageTitle/PageTitle";
import ContactList from '../components/ContactList/ContactList'
import ContactForm from '../components/ContactForm/ContactForm';
import SearchBox from '../components/SearchBox/SearchBox';
import Loader from "../components/Loader/Loader";
import Error from "../components/Error/Error";
import { fetchContacts } from "../redux/contacts/operations";
import { selectError, selectLoading } from "../redux/contacts/selectors";

function Contacts() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <PageTitle>Phonebook</PageTitle>
      <ContactForm />
      <SearchBox />
      {error && <Error />}
      {loading && <Loader />}
      <ContactList />
      <Toaster position="top-right" />
    </>
  );
};

export default Contacts;