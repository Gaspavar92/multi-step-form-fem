import { useFormContext } from "./context/Context";

const SecondStep = () => {

    const {currentStep, setCurrentStep} = useFormContext();


    const next = (e: React.MouseEvent) => {
        e.preventDefault()
        setCurrentStep((prev: number) => {
            return prev+1;
        })
    }

    return (
        <div className={`${currentStep === 1 ? "visible" : "invisible"} absolute`}>
            <input id="name" name="last-name"></input>
            <label htmlFor="last-name">Last Name</label>
            <button onClick={next}>Next step</button>
        </div>
    )
};

export default SecondStep;