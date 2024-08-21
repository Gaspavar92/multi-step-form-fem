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


    const next = (e: React.MouseEvent) => {
        e.preventDefault()
        setCurrentStep((prev: number) => {
            if (prev < (steps.length - 1)) {
                console.log(prev+1)
                return prev+1;
            }
            return prev;
        })
    }

    const save = (e: React.MouseEvent) => {
        e.preventDefault()
        console.log("saved")
    }

    return (
        <form className="col-span-2 p-8 flex flex-col content-center flex-wrap">
            <div className="steps w-2/3 h-full relative">
                <CurrentStep />
                <button onClick={steps.length ? next : save}>Next step</button>
            </div>
        </form>
    );
};

export default Form;
