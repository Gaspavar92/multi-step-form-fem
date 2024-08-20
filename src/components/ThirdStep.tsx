import { useFormContext } from "./context/Context";

const ThirdStep = () => {

    const {currentStep, setCurrentStep} = useFormContext()


    const next = (e: React.MouseEvent) => {
        e.preventDefault()
        setCurrentStep((prev: number) => {
            return prev+1;
        })
    }

    return (
        <div className={`${currentStep === 2 ? "visible" : "invisible"} absolute`}>
            <input id="name" name="address"></input>
            <label htmlFor="address">Name</label>
            <button onClick={next}>Next step</button>
        </div>
    )
};

export default ThirdStep;