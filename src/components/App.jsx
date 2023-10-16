
import { AppContainer, AppTitle } from "./App.styled";
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <AppContainer>
      <AppTitle>Phonebook</AppTitle>
      <ContactForm />

      <AppTitle>Contacts</AppTitle>
      <Filter />
      <ContactList />
    </AppContainer>
  );
};
