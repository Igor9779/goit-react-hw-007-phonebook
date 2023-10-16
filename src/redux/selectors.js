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

