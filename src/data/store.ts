/* Imports from packages */
import { applyMiddleware, createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import { PersistPartial } from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import thunk from "redux-thunk";

/* Imports from local files */
import rootReducer, { RootState } from './reducers'
import organizations from './sample_data/organizations'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const DEFAULT_STATE: RootState = {
  organizations :{
    suggested:[],
    matched:[],
    all: organizations
  },
  // volunteers: {
  //   suggested:[],
  //   matched:[],
  //   all: []
  // },
  // activist: null,
};

export const store = createStore<RootState & PersistPartial, any, any, any>(persistedReducer, DEFAULT_STATE, applyMiddleware(thunk))
export const persistor = persistStore(store)
