import { useAppContext } from "./context/AppContext";
import '../App.css';

const Sidebar = () => {

    const { currentStep, setCurrentStep, invalid } = useAppContext();

    const steps = [
        {number: 1, step: "STEP 1", text: "YOUR INFO"},
        {number: 2, step: "STEP 2", text: "SELECT PLAN"},
        {number: 3, step: "STEP 3", text: "ADD-ONS"},
        {number: 4, step: "STEP 4", text: "SUMMARY"}
    ]

    return (
        <div className="sidebar bg-[url('/bg-sidebar-desktop.svg')] fixed h-[30vh] md:h-full w-full md:static top-0 left-0 bg-cover md:bg-center bg-[100%_80%] bg-no-repeat md:rounded-xl p-8 flex justify-center md:justify-start md:flex-col gap-0 md:gap-4 md:z-0 -z-40">

            {steps.map((step, index) => {
                return (
                <button key={step.step} disabled={invalid} onClick={() => setCurrentStep(step.number - 1)} className="first content-center flex-wrap md:flex-nowrap flex gap-6 h-1/2 cursor-pointer">
                    <div className={`duration-500 ${currentStep === index ? "bg-number number-col" : "bg-transparent text-white"} flex content-center justify-center flex-wrap border border-solid border-white rounded-full h-16 w-16 md:h-12 md:w-12`}>{step.number}</div>
                    <div className="flex flex-col">
                        <h2 className="step hidden md:block">{step.step}</h2>
                        <p className="text-white hidden md:block">{step.text}</p>
                    </div>
                </button>
                )
            })}

        </div>
    )
};

export default Sidebar;