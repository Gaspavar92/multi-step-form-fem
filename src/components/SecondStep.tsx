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

                <div className={`monthly ${recurrence === "monthly" ? "monthly text-[#02295a]" : "text-[#9699ab]"} font-semibold`}>Monthly</div>

                <label htmlFor="recurrence" className="bg-[#02295a] h-8 w-[65px] flex content-center flex-wrap rounded-full p-1 cursor-pointer">
                    <input type="checkbox" checked={recurrence === "yearly"} value={recurrence} id="recurrence" name="recurrence" className="hidden" onChange={() => {
                    
                    const newRecurrence = recurrence === "monthly" ? "yearly" : "monthly";
                    setRecurrence(newRecurrence);
                    setSelectedPlan("");
                    handleChange({
                        target: {
                            name: 'recurrence',
                            value: newRecurrence
                        },
                    });
                    }}></input>
                    <div className="toggle h-6 w-6 rounded-full bg-white"></div>
                </label>

                <div className={`yearly ${recurrence === "yearly" ? "text-[#02295a]" : "text-[#9699ab]"} font-semibold`}>Yearly</div>

            </div>
        </div>
    )
};

export default SecondStep;