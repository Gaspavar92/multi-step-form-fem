import { useFormContext } from "./context/FormContext";

const FourthStep = () => {

    const { formData, change } = useFormContext();

        const length = formData.recurrence.length;
        let plan = formData.recurrence[0].toUpperCase();
        let i = 1;
        while (i < length) {
            plan+=formData.recurrence[i];
            i++;
        }


    return (
        <div className="flex flex-col gap-12">
            <div className="header-text">
                <h1>Finishing up</h1>  
                <p>Double-check everything looks OK before confirming.</p>
            </div>
            <div className="final-info flex flex-col gap-4 bg-[#fafbff] p-6 rounded-md">
                <div className="final-plan-info flex justify-between">
                    <div className="chosen-plan">
                        <h2>{formData.plan} ({plan})</h2>
                        <button className="hover:underline" onClick={change}>Change</button>
                    </div>
                    <p className="plan-price">${formData.price}{formData.recurrence === "monthly" ? "/mo" : "/yr"}</p>
                </div>
            {formData.addOns && 
                <div className="final-add-ons border-t pt-4 flex flex-col gap-2">
                        {formData.addOns.map(addOn => {
                                return (
                                    <div key={addOn.name} className="selected-add-ons flex justify-between">
                                        <h3 className="add-on-name">{addOn.name}</h3>
                                        <p className="add-on-price">+${addOn.price}{formData.recurrence === "monthly" ? "/mo" : "/yr"}</p>
                                    </div>
                                )
                        })}
                    </div>}
            </div>
                    <div className="total px-6 flex justify-between">
                        <div className="h3">Total ({formData.recurrence === "monthly" ? "per month" : "per year"})</div>
                        <p>+${formData.total}{formData.recurrence === "monthly" ? "/mo" : "/yr"}</p>
                    </div> 
        </div>
    )
};

export default FourthStep;