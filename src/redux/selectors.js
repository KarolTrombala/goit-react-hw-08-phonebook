import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = (state) => state.contacts.contacts;
// export const selectFilter = (state) => state.filter.filter;
export const selectFilterValue = (state) => state.filters
export const selectIsLoading = (state) => state.contacts.isLoading;
export const selectError = (state) => state.contacts.error;

export const selectVisibleContacts = createSelector(
    [selectContacts, selectFilterValue],
    (contacts, filterValue) => {
        if (filterValue === '') {
            return contacts
        } else {
            return contacts.filter(
                (contact) =>
                    contact.name
                        .toLowerCase()
                        .includes(filterValue.filter.toLowerCase()) ?? []
            )
        }
    }
)

// export const selectVisibleContacts = createSelector(
//     [selectContacts, selectFilter],
//     (contacts, filteredContacts) => {
//         if (filteredContacts === '') {
//             return contacts
//         } else {
//             return contacts.filter(
//                 (contact) =>
//                     contact.name
//                         .toLowerCase()
//                         .includes(filteredContacts.toLowerCase()) ?? []
//             )
//         }
//     }
// );
