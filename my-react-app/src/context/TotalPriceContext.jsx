import { createContext, useContext, useReducer } from "react";

const TotalPriceContext = createContext(null); // save this state

const TotalPriceDispatchContext = createContext(); // save the action

const totalPriceReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE": {
      return {
        total: action.payload.total,
      };
    }
    default: {
      throw Error("Unkwon action: " + action.type);
    }
  }
};

export function TotalPriceProvider({ children }) {
  const [TotalPrice, dispatch] = useReducer(totalPriceReducer, { total: 0 });
  return (
    <TotalPriceContext.Provider value={TotalPrice}>
      <TotalPriceDispatchContext.Provider value={dispatch}>
        {children}
      </TotalPriceDispatchContext.Provider>
    </TotalPriceContext.Provider>
  );
}


export function useTotalPrice(){
     return useContext(TotalPriceContext);
}

export function useTotalPriceDispatch(){
     return useContext(TotalPriceDispatchContext);
}