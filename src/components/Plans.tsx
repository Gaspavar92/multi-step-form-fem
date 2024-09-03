import { useEffect } from "react";
import { useFormContext } from "./context/FormContext";

const Plans = () => {

    const { recurrence, handlePlan, selectedPlan, setInvalid } = useFormContext();

    const plans = {
        monthly: [
            {name: "Arcade", price: "9"},
            {name: "Advanced", price: "12"},
            {name: "Pro", price: "15"}
        ],
        yearly: [
            {name: "Arcade", price: "90"},
            {name: "Advanced", price: "120"},
            {name: "Pro", price: "150"}
        ]
    };

    useEffect(() => {
        if (selectedPlan) {
            setInvalid(false)
        } else {
            setInvalid(true);
        }
    })
    
    return (
        <div className={`plans ${recurrence} flex gap-8 justify-between`}>
            {(recurrence === "monthly" || recurrence === "yearly") && plans[recurrence].map(plan => {
                const isSelected = selectedPlan === plan.name;
                return (
                    <div key={plan.name} className={`plan ${plan.name} p-4 flex flex-col w-1/3 border-2 border-[#f0f6ff] hover:border-[#473dff] rounded-md cursor-pointer duration-200`} data-value={plan.name} data-checked={isSelected} onClick={() => {handlePlan(plan.name, plan.price)}}>
                        <img src={`../../assets/images/icon-${plan.name}.svg`} className="h-10 w-10 mb-10"></img>
                        <h2>{plan.name}</h2>
                        <p className="text-[#9699ab] text-sm">{`$${plan.price}${recurrence === "monthly" ? "/mo" : "/yr"}`}</p>
                    </div>
                );
            })}
        </div>
    )
};

export default Plans;