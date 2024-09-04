import { useContext, createContext } from "react";

interface AppContextType {
    currentStep: number;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
    invalid: boolean;
    setInvalid: React.Dispatch<React.SetStateAction<boolean>>;
}

  export const AppContext = createContext<AppContextType | undefined>(undefined);

  export const useAppContext = () => {
    const context = useContext(AppContext)
    if (!context) {
        throw new Error("data is undefined")
    }
    return context;
}