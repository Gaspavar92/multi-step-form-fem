import { useFormContext } from "./context/FormContext";
import Plans from "./Plans";

const SecondStep = () => {

    const { handleChange, recurrence, setRecurrence, setSelectedPlan } = useFormContext();

    return (
        <div className="flex flex-col gap-12">
            <div className="header-text">
                <h1>Select your plan</h1>  
                <p>You have the option of monthly or yearly billing.</p>
            </div>

            <Plans />
            <div className="change-recurrence w-full flex justify-center py-4 bg-[#f0f6ff] rounded-md gap-6">

                <p className={`monthly ${recurrence === "monthly" ? "monthly text-[#02295a]" : "text-[#9699ab]"} font-semibold`}>Monthly</p>

                <label htmlFor="recurrence" className="bg-[#02295a] h-6 md:h-8 w-[45px] md:w-[65px] flex content-center flex-wrap rounded-full p-1 cursor-pointer">
                    <input type="checkbox" checked={recurrence === "yearly"} value={recurrence} id="recurrence" name="recurrence" className="hidden" onChange={(e) => {
                    const newRecurrence = recurrence === "monthly" ? "yearly" : "monthly";
                    e.target.value = newRecurrence;
                    setRecurrence(newRecurrence);
                    setSelectedPlan("");
                    handleChange(e);
                    }}></input>
                    <div className="toggle h-4 md:h-6 w-4 md:w-6 rounded-full bg-white"></div>
                </label>

                <p className={`yearly ${recurrence === "yearly" ? "text-[#02295a]" : "text-[#9699ab]"} font-semibold`}>Yearly</p>

            </div>
        </div>
    )
};

export default SecondStep;