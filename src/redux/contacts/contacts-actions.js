// import { v4 as uuidv4 } from "uuid";
import { createAction } from '@reduxjs/toolkit'

 
export const addContactRequest = createAction('contacts/addContactRequest')
export const addContactSuccess = createAction('contacts/addContactSuccess')
export const addContactError = createAction('contacts/addContactError')


export const deleteContactRequest = createAction('contacts/deleteContactRequest')
export const deleteContactSuccess = createAction('contacts/deleteContactSuccess')
export const deleteContactError = createAction('contacts/deleteContactError')

// export const deleteContact = createAction('contact/delete')
export const changeFilter = createAction('contact/changeFilter')


// const addContact = createAction('contact/add', ({name, number}) => ({
//      payload: {
//         id: uuidv4(),
//         name,
//         number,
//       },
//  }))