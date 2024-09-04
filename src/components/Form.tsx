/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import FourthStep from "./FourthStep";
import { useAppContext } from "./context/AppContext";
import { Context } from "./context/FormContext";
import ThankYou from "./ThankYou";
import { FormDataType } from "./context/FormContext";

const Form = () => {

    interface ErrorsType {
        [key: string]: string;
    }

    const steps = [
        FirstStep,
        SecondStep,
        ThirdStep,
        FourthStep
    ]

    const { currentStep, setCurrentStep } = useAppContext()
    const CurrentStep = steps[currentStep]
    
    const [recurrence, setRecurrence] = useState<string>("monthly");
    const [selectedPlan, setSelectedPlan] = useState<string>("");
    const [completed, setCompleted] = useState<boolean>(false);
    const [errors, setErrors] = useState<ErrorsType>({});
    const [invalid, setInvalid] = useState(true);

    const [formData, setFormData] = useState<FormDataType>({
        recurrence: "monthly",
        addOns: [],
        total: 0
    });

    const validateInput = (name: string, value:string) => {
            // form inputs validation

            if (name === "name") {
                if (value.length >= 1 && value.length <= 3) {
                setErrors(prev => {
                    return {...prev, name: "Name needs to be longer"}
                });
            } else {
                setErrors(prev => {
                    const { name: _, ...rest } = prev;
                    return {...rest}
                    })
                }
            }
            
            if (name === "email") {
                const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                if (value.length >= 1 && !emailRegex.test(value)) {
                    setErrors(prev => {
                        return {...prev, email: "Invalid email format"}
                    });
                } else {
                    setErrors(prev => {
                        const { email: _, ...rest } = prev;
                        return {...rest}
                    })
                }  
            } 

            if (name === "number") {
                const numRegEx = /^\+?\d?\d{10}$/;
                if (value.length >= 1 && !numRegEx.test(value)) {
                    setErrors(prev => {
                        return {...prev, number: "Invalid phone number"}
                    })
                } else {
                    setErrors(prev => {
                        const { number: _, ...rest } = prev;
                        return {...rest};
                    })
                }
            }
    }

    const next = (e: React.MouseEvent) => {
        e.preventDefault()
        setCurrentStep((prev: number) => {
            if (prev < (steps.length - 1)) {
                return prev+1;
            }
            return prev;
        })
    }

    const back = (e: React.MouseEvent) => {
        e.preventDefault()
        setCurrentStep((prev: number) => {
            if (prev <= (steps.length - 1)) {
                return prev-1;
            }
            return prev;
        })
    }

    const handleChange = (e: React.ChangeEvent) => {
        setFormData((prev) => {
            const { name, value } = e.target as HTMLInputElement;
            validateInput(name, value);
            console.log(name, value)
            return {...prev,
                [name]: value
            };
        })
    };

    const handleCheckboxChange = (e: React.ChangeEvent, price: string) => {
        const { name, checked } = e.target as HTMLInputElement;

        setFormData(prev => {
            if (checked) {
                return {
                    ...prev,
                    total: +prev.total + +price,
                    addOns: [
                        ...prev.addOns,
                        {name: name, price: price}
                    ]
                }
            } else {
                const updatedAddOns = prev.addOns.filter(addOn => addOn.name !== name);
                return {
                    ...prev,
                    total: +prev.total - +price,
                    addOns: updatedAddOns
                };
            }
        })
    };

    const handlePlan = (planName: string, planPrice: string) => {
        setSelectedPlan(planName)
        setFormData(prev => {
            return {...prev,
                total: planPrice,
                plan: planName,
                price: planPrice
            }
        })
    };

    const confirm = (e: React.MouseEvent) => {
        e.preventDefault()
        setCompleted(true);
    }

    const change = () => {
        setCurrentStep(1);
        setFormData(prev => {
            return {
                ...prev,
                addOns: []
            }
        })
    }

    return (
        <Context.Provider value={{handleChange, handlePlan, recurrence, setRecurrence, selectedPlan, setSelectedPlan, handleCheckboxChange, formData, change, errors, setInvalid, currentStep, setCurrentStep}}>
            <form className="md:col-span-2 h-full col-span-3 p-2 md:p-8 flex flex-col content-center flex-wrap">
                <div className="steps w-10/12 h-full md:relative flex flex-col md:block justify-center">
                    {!completed && <CurrentStep />}
                    <div className="buttons bg-white md:bg-transparent absolute -bottom-6 right-0 left-0 bg-white w-full flex justify-between p-4">
                        {!completed && currentStep > 0 && <button className="back absolute left-0 bottom-auto top-auto py-[10px] px-[30px]" onClick={back}>Go Back</button>}
                        {!completed && <button type='submit' className="disabled:bg-gray-400 next text-white ml-auto" onClick={currentStep === (steps.length - 1) ? confirm : next} disabled={invalid}>{currentStep === (steps.length - 1) ? "Confirm" : "Next Step"}</button>}
                    </div>
                    {completed && <ThankYou />}
                </div>
            </form>
        </Context.Provider>
    );
};

export default Form;
