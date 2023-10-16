import { ContactInfo, ContactItem, ContactListContainer, DeleteButton, StyledHeading, StyledParagraph } from "components/ContactList/ContactList.styed"
import { useSelector } from 'react-redux';
import { getFilter } from '../../redux/filterSlice';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from '../../redux/contactsSlice';
import Loader from "components/Loader/Loader";

export const ContactList = () => {
  const filter = useSelector(getFilter);
  const { data: contacts, isFetching } = useGetContactsQuery();
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const findContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    if (contacts) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
  };

  const filteredContacts = findContacts();

  return (
    <>
      {isFetching && <Loader/>}
      {contacts && (
        <ContactListContainer>
          {filteredContacts.map(({ id, name, phone }) => {
            return (
              <ContactItem key={id}>
                <ContactInfo>
                  <StyledHeading>{name}:
                    <StyledParagraph>{phone}</StyledParagraph>
                  </StyledHeading>
                </ContactInfo>
                <DeleteButton
                  type="button"
                  onClick={() => {
                    deleteContact(id);
                  }}
                >
                  {isLoading ? '...' : 'Delete'}
                </DeleteButton>
              </ContactItem>
            );
          })}
        </ContactListContainer>
      )}
    </>
  );
};