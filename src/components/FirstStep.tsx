import { useEffect, useState } from "react";
import { useFormContext } from "./context/FormContext";

const FirstStep = () => {

    const { handleChange, errors, setInvalid } = useFormContext();
    const [nameInputValid, setNameInputValid] = useState(false);
    const [emailInputValid, setEmailInputValid] = useState(false);
    const [numberInputValid, setNumberInputValid] = useState(false);
    
    useEffect(() => {
        if (nameInputValid && emailInputValid && numberInputValid) {
            if (!errors.name && !errors.email && !errors.number) {
                setInvalid(false);
            } else {
                setInvalid(true);
            }
        }
    }, [nameInputValid, emailInputValid, numberInputValid, errors, setInvalid])
    
    return (
        <div className="flex flex-col gap-12">
            <div className="header-text">
                <h1>Personal Info</h1>  
                <p>Please provide your name, email address, and phone number.</p>
            </div>

            <div className="flex flex-col gap-4">
                    <label className="name form-section flex flex-col" htmlFor="name">
                        Name
                        <input id="name" name="name" onChange={(e) => {handleChange(e); setNameInputValid(e.target.value.length > 0 ? true : false)}} className={`${errors.name ? "border-red-600 focus-visible:border-red-600 active:border-red-600 border-2" : "border"} focus:outline-none`} placeholder="e.g. Stephen King"></input>
                        {errors.name && <p className="text-red-700">{errors.name}</p>}
                    </label>
                    <label className="email form-section flex flex-col" htmlFor="email">
                        Email Address
                        <input id="email" name="email" onChange={(e) => {handleChange(e); setEmailInputValid(e.target.value.length > 0 ? true : false)}}  className={`${errors.email ? "border-red-600 focus-visible:border-red-600 active:border-red-600 border-2" : "border"} focus:outline-none`} placeholder="e.g. stephenking@lorem.com"></input>
                        {errors.email && <p className="text-red-700">{errors.email}</p>}
                    </label>

                    <label className="number form-section flex flex-col" htmlFor="number">
                        Phone Number
                        <input id="number" name="number" onChange={(e) => {handleChange(e); setNumberInputValid(e.target.value.length > 0 ? true : false)}}  className={`${errors.number ? "border-red-600 focus-visible:border-red-600 active:border-red-600 border-2" : "border"} focus:outline-none`} placeholder="e.g. +1 234 567 890"></input>
                        {errors.number && <p className="text-red-700">{errors.number}</p>}
                    </label>
            </div>
        
        </div>
    )
};

export default FirstStep;