import { useContext, createContext } from "react";

export interface FormDataType {
  name?: string,
  price?: string,
  email?: string,
  number?: string,
  plan?: string,
  recurrence: "monthly" | "yearly",
  addOns: {id?: string, name?: string, description?: string, price?: string}[],
  total: string | number;
}

interface FormContextType {
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handlePlan: (planName: string, planPrice: string) => void;
  recurrence: string;
  setRecurrence: React.Dispatch<React.SetStateAction<string>>;
  selectedPlan: string;
  setSelectedPlan: React.Dispatch<React.SetStateAction<string>>;
  handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>, price: string) => void;
  formData: FormDataType,
  change: () => void;
  errors: Record<string, string>;
  setInvalid: React.Dispatch<React.SetStateAction<boolean>>;
  currentStep: number,
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>
}

  export const Context = createContext<FormContextType | undefined>(undefined);

  export const useFormContext = () => {
    const context = useContext(Context)
    if (!context) {
        throw new Error("data is undefined")
    }
    return context;
}