import { useContext, createContext } from "react";

  export const Context = createContext(undefined);

  export const useFormContext = () => {
    const context = useContext(Context)
    if (!context) {
        throw new Error("data is undefined")
    }
    return context;
}