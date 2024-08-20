import { useFormContext } from "./context/Context";

const FirstStep = () => {

    const {currentStep, setCurrentStep} = useFormContext();

    const next = (e: React.MouseEvent) => {
        e.preventDefault()
        setCurrentStep((prev: number) => {
            return prev+1;
        })
    }
    
    return (
        <div className={`${currentStep === 0 ? "visible" : "invisible"} absolute`}>
            <div className="name form-section">
                <label htmlFor="name">Name</label>
                <input id="name" name="name"></input>
            </div>
            <div className="email form-section">
                <label htmlFor="email">Email Address</label>
                <input id="email" name="email"></input>
            </div>
            <div className="number form-section">
                <label htmlFor="number">Phone Number</label>
                <input id="number" name="number"></input>
            </div>
            <button onClick={next}>Next step</button>
        </div>
    )
};

export default FirstStep;