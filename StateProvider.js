import { createContext, useContext, useReducer } from "react";
const State = createContext();
const StateProvider = ({ reducer, state, children }) => {
  return (
    <State.Provider value={useReducer(reducer, state)}>
      {children}
    </State.Provider>
  );
};
const useStateValue = () => useContext(State);
export { StateProvider, useStateValue };
