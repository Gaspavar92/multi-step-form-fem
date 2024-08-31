import { useFormContext } from "./context/Context";

const AddOns = () => {

    const addOns = {
        monthly: [
            {id: "on-ser", name: "Online service", description: "Access to multiplayer games", price: "1"},
            {id: "la-sto", name: "Larger storage", description: "Extra 1TB of cloud save", price: "2"},
            {id: "cu-pro", name: "Customizable profile", description: "Custom theme on your profile", price: "2"}
        ],
        yearly: [
            {id: "on-ser", name: "Online service", description: "Access to multiplayer games", price: "10"},
            {id: "la-sto", name: "Larger storage", description: "Extra 1TB of cloud save", price: "20"},
            {id: "cu-pro", name: "Customizable profile", description: "Custom theme on your profile", price: "20"}
        ]
    };

    const { recurrence, handleCheckboxChange } = useFormContext();

    return (
        <div className="add-ons flex flex-col gap-6">
            {addOns[recurrence].map(addOn => {
                return (
                    <div key={addOn.id} className="add-on flex">
                        <label htmlFor={`${addOn.id}-${recurrence}`} className="flex gap-10 w-full p-4 has-[:checked]:bg-[#e2e9ff] has-[:checked]:border-[#473dff] duration-300 rounded-xl cursor-pointer border hover:border-[#473dff]">
                            <input onChange={(e) => {
                                handleCheckboxChange(e, addOn.price)
                            }} type="checkbox" className="choice" id={`${addOn.id}-${recurrence}`} name={`${addOn.name}`}/>
                            <div className="add-on-info">
                                <h2>{addOn.name}</h2>
                                <p className="text-sm text-[#9699ab]">{addOn.description}</p>
                            </div>
                            <p className="ml-auto mt-auto mb-auto text-[#473dff]">{`+$${addOn.price}${recurrence === "monthly" ? "/mo" : "/yr"}`}</p>
                        </label>
                    </div>
                )
            })}
        </div>
    )

};

export default AddOns;