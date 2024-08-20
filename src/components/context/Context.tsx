import { useContext, createContext } from "react";

interface formContext {
    stepCount: number;
    currentStep: number;
    setStepCount: React.Dispatch<React.SetStateAction<number>>;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
    formData: object;
    setFormData: React.Dispatch<React.SetStateAction<object>>;
  }
  
  export const Context = createContext<formContext | undefined>(undefined);

  export const useFormContext = () => {
    const context = useContext(Context)
    if (!context) {
        throw new Error("data is undefined")
    }
    return context;
}