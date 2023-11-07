import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";

import adminReducer from "./adminReducer";
import appReducer from "./appReducer";
import userReducer from "./userReducer";

import { persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";

const persistCommonConfig = {
  storage: storage,
  stateReconciler: autoMergeLevel2,
};

const adminPersistConfig = {
  ...persistCommonConfig,
  key: "admin",
  whitelist: ["isLoggedIn", "adminInfo"],
};

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    admin: persistReducer(adminPersistConfig, adminReducer),
    user: userReducer,
    app: appReducer,
  });
