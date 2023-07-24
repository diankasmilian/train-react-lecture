import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { rootReducer } from "./reduces";
const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
