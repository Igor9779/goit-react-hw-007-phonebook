import { createSelector } from 'reselect';

const selectContactsData = (state) => state.contacts;
const selectFilterValue = (state) => state.filter.inputValue;

export const selectContacts = createSelector(
  [selectContactsData],
  (contacts) => contacts.items
);

export const selectFilter = createSelector(
  [selectFilterValue],
  (inputValue) => (inputValue ? inputValue.toLowerCase() : "")
);


export const selectIsLoading = createSelector(
  [selectContactsData],
  (contacts) => contacts.isLoading
);

export const selectError = createSelector(
  [selectContactsData],
  (contacts) => contacts.error
);

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
