import { useFormContext } from "./context/Context";
import '../App.css';

const Sidebar = () => {

    const {currentStep} = useFormContext();

    return (
        <div className="sidebar bg-[url('/Users/gaspavar/multi-step-form-vite/assets/images/bg-sidebar-desktop.svg')] bg-cover bg-center bg-no-repeat h-full rounded-xl p-8 flex flex-col gap-8">
            <div className="first flex gap-6">
                <div className={`${currentStep === 0 ? "bg-number number-col" : "bg-transparent text-white"} flex content-center justify-center flex-wrap border border-solid border-white rounded-full h-12 w-12`}>1</div>
                <div className="flex flex-col">
                    <p className="step">STEP 1</p>
                    <p className="text-white">YOUR INFO</p>
                </div>
            </div>
            <div className="second flex gap-6">
                <div className={`${currentStep === 1 ? "bg-number number-col" : "bg-transparent text-white"} flex content-center justify-center flex-wrap border border-solid border-white rounded-full h-12 w-12`}>2</div>
                <div className="step flex flex-col">
                    <p className="step">STEP 2</p>
                    <p className="text-white">SELECT PLAN</p>
                </div>
            </div>
            <div className="third flex gap-6">
                <div className={`${currentStep === 2 ? "bg-number number-col" : "bg-transparent text-white"} flex content-center justify-center flex-wrap border border-solid border-white rounded-full h-12 w-12`}>3</div>
                <div className="step flex flex-col">
                    <p className="step">STEP 3</p>
                    <p className="text-white">ADD-ONS</p>
                </div>
            </div>
            <div className="fourth flex gap-6">
                <div className={`${currentStep === 3 ? "bg-number number-col" : "bg-transparent text-white"} flex content-center justify-center flex-wrap border border-solid border-white rounded-full h-12 w-12`}>4</div>
                <div className="step flex flex-col">
                    <p className="step">STEP 4</p>
                    <p className="text-white">SUMMARY</p>
                </div>
            </div>
        </div>
    )
};

export default Sidebar;