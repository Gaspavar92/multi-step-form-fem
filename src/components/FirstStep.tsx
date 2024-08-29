import { useFormContext } from "./context/Context";

const FirstStep = () => {

    const { handleChange } = useFormContext();
    
    return (
        <div className="flex flex-col gap-12">
            <div className="header-text">
                <h1>Personal Info</h1>  
                <p>Please provide your name, email address, and phone number.</p>
            </div>

            <div className="flex flex-col gap-4">
                    <label className="name form-section flex flex-col" htmlFor="name">
                        Name
                        <input id="name" name="name" onChange={handleChange}></input>
                    </label>
                    <label className="email form-section flex flex-col" htmlFor="email">
                        Email Address
                        <input id="email" name="email" onChange={handleChange}></input>
                    </label>

                    <label className="number form-section flex flex-col" htmlFor="number">
                        Phone Number
                        <input id="number" name="number" onChange={handleChange}></input>
                    </label>
            </div>
        
        </div>
    )
};

export default FirstStep;