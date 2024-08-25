import { useContext, createContext } from "react";

interface formContext {
    currentStep: number;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  }
  
  export const Context = createContext<formContext | undefined>(undefined);

  export const useFormContext = () => {
    const context = useContext(Context)
    if (!context) {
        throw new Error("data is undefined")
    }
    return context;
}