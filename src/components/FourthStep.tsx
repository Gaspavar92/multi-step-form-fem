import { useFormContext } from "./context/Context";

const FourthStep = () => {

    const {currentStep} = useFormContext()


    const save = (e: React.MouseEvent) => {
        e.preventDefault();
    };


    return (
        <div className={`${currentStep === 3 ? "block" : "hidden"} flex flex-col gap-8`}>
            <input id="name" name="address"></input>
            <label htmlFor="address">Name</label>
            <button onClick={save}>Address</button>
        </div>
    )
};

export default FourthStep;