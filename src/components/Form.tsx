import { useRef, useState, useEffect } from "react";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import FourthStep from "./FourthStep";
import { useFormContext } from "./context/Context";

const Form = () => {

    const steps = [
        FirstStep,
        SecondStep,
        ThirdStep,
        FourthStep
    ]

    const { currentStep, setCurrentStep } = useFormContext()
    const CurrentStep = steps[currentStep]

    const [formData, setFormData] = useState({});

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

    const confirm = (e: React.MouseEvent) => {
        e.preventDefault()
        console.log(formData)
    }

    return (
        <form className="col-span-2 p-8 flex flex-col content-center flex-wrap">
            <div className="steps w-2/3 h-full relative">
                <CurrentStep onChange={handleChange} />
                {currentStep > 0 && <button className="back absolute left-0 bottom-0" onClick={back}>Go Back</button>}
                <button type='submit' className="next absolute right-0 bottom-0 text-white" onClick={currentStep === (steps.length - 1) ? confirm : next}>{currentStep === (steps.length - 1) ? "Confirm" : "Next Step"}</button>
            </div>
        </form>
    );
};

export default Form;
