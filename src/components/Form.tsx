import { useState } from "react";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import FourthStep from "./FourthStep";
import { useFormContext } from "./context/Context";
import { Context } from "./context/Context";

const Form = () => {

    const steps = [
        FirstStep,
        SecondStep,
        ThirdStep,
        FourthStep
    ]

    const { currentStep, setCurrentStep } = useFormContext()
    const CurrentStep = steps[currentStep]
    
    const [recurrence, setRecurrence] = useState("monthly");
    const [selectedPlan, setSelectedPlan] = useState("");

    const [formData, setFormData] = useState({
        recurrence: "monthly"
    });

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
            return {...prev,
                [e.target.name]: e.target.value
            }
        })
    };

    const handleCheckboxChange = (e: React.ChangeEvent, price) => {
        const { name, checked } = e.target;

        setFormData((prev) => {
            if (checked) {
                return {...prev,
                        [name]: price
                }
            } else {
                const { [name]: _, ...rest } = prev;
                return rest;
            }
        })
    };

    const handlePlan = (e: React.MouseEvent, planName, planPrice) => {
        setSelectedPlan(planName)
        setFormData((prev) => {
            return {...prev,
                "plan": planName,
                "price": planPrice
            }
        })
    };

    const confirm = (e: React.MouseEvent) => {
        e.preventDefault()
        console.log(formData)
    }

    return (
        <Context.Provider value={{handleChange, handlePlan, recurrence, setRecurrence, selectedPlan, setSelectedPlan, handleCheckboxChange}}>
            <form className="col-span-2 p-8 flex flex-col content-center flex-wrap">
                <div className="steps w-10/12 h-full relative">
                    <CurrentStep />
                    {currentStep > 0 && <button className="back absolute left-0 bottom-0" onClick={back}>Go Back</button>}
                    <button type='submit' className="next absolute right-0 bottom-0 text-white" onClick={currentStep === (steps.length - 1) ? confirm : next}>{currentStep === (steps.length - 1) ? "Confirm" : "Next Step"}</button>
                </div>
            </form>
        </Context.Provider>
    );
};

export default Form;
