import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'
import {contactApi} from './contacts/contactSlice'

export const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactApi.middleware,
  ],
  devTools: process.env.NODE_ENV === 'development'
})

setupListeners(store.dispatch)

// ======================== old ========================== // 
// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import contactsReducer from './contacts/contacts-reducers'
// import logger from 'redux-logger'
// import { 
//   // persistStore, 
//   // persistReducer, 
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER, } 
//   from 'redux-persist'

// // import storage from 'redux-persist/lib/storage'

// // const contactsPersistConfig = {
// //   key: 'contact',
// //   storage,
// //   blacklist: ['filter']
// // }

// const middleware = [...getDefaultMiddleware({
//   serializableCheck: {
//     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//   },
// }), logger]

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     // contacts: persistReducer(contactsPersistConfig, contactsReducer)
//   },
//   middleware,
//   devTools: process.env.NODE_ENV === 'development'
// })

// export default store
// // export const persistor = persistStore(store)