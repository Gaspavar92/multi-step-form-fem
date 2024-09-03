import { useAppContext } from "./context/AppContext";
import '../App.css';

const Sidebar = () => {

    const { currentStep } = useAppContext();

    const steps = [
        {number: 1, step: "STEP 1", text: "YOUR INFO"},
        {number: 2, step: "STEP 2", text: "SELECT PLAN"},
        {number: 3, step: "STEP 3", text: "ADD-ONS"},
        {number: 4, step: "STEP 4", text: "SUMMARY"}
    ]

    return (
        <div className="sidebar bg-[url('/bg-sidebar-desktop.svg')] bg-cover bg-center bg-no-repeat h-full rounded-xl p-8 flex flex-col gap-8">

            {steps.map((step, index) => {
                return (
                <div key={step.step} className="first flex gap-6">
                    <div className={`duration-500 ${currentStep === index ? "bg-number number-col" : "bg-transparent text-white"} flex content-center justify-center flex-wrap border border-solid border-white rounded-full h-12 w-12`}>{step.number}</div>
                    <div className="flex flex-col">
                        <h2 className="step">{step.step}</h2>
                        <p className="text-white">{step.text}</p>
                    </div>
                </div>
                )
            })}

        </div>
    )
};

export default Sidebar;