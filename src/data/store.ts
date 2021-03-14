/* Imports from packages */
import { applyMiddleware, createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import { PersistPartial } from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import thunk from "redux-thunk";

/* Imports from local files */
import rootReducer, { RootState } from './reducers'
import sampleOrganizations from './sample_data/organizations'
import sampleActivist from './sample_data/activist'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

console.log(sampleOrganizations)
console.log(sampleActivist)

const DEFAULT_STATE: RootState = {
  organizations :{
    data: sampleOrganizations
  },
  // volunteers: {
  //   suggested:[],
  //   matched:[],
  //   all: []
  // },
  activist: {
    data: sampleActivist
  },
};

export const store = createStore<RootState & PersistPartial, any, any, any>(persistedReducer, DEFAULT_STATE, applyMiddleware(thunk))
export const persistor = persistStore(store)
