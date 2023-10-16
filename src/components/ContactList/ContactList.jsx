import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectIsLoading, selectError, selectFilter } from '../../redux/selectors';
import { fetchContacts, deleteContact } from '../../redux/operations';
import {
  ContactInfo,
  ContactItem,
  ContactListContainer,
  DeleteButton,
  StyledHeading,
  StyledParagraph,
} from 'components/ContactList/ContactList.styed';
import Loader from 'components/Loader/Loader';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => selectFilter(state));
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      {isLoading && <Loader />}
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <ContactListContainer>
          {filteredContacts.map(({ id, name, phone }) => (
            <ContactItem key={id}>
              <ContactInfo>
                <StyledHeading>
                  {name}:
                  <StyledParagraph>{phone}</StyledParagraph>
                </StyledHeading>
              </ContactInfo>
              <DeleteButton
                type="button"
                onClick={() => handleDeleteContact(id)}
              >
                {isLoading ? '...' : 'Delete'}
              </DeleteButton>
            </ContactItem>
          ))}
        </ContactListContainer>
      )}
    </>
  );
};
