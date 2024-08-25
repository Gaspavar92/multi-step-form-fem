const FirstStep = ({onChange}) => {
    
    return (
        <div className="flex flex-col gap-12">
            <div className="header-text">
                <h1>Personal Info</h1>  
                <p>Please provide your name, email address, and phone number.</p>
            </div>

            <div className="flex flex-col gap-4">
                <div className="name form-section flex flex-col">
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" onChange={onChange}></input>
                </div>
                <div className="email form-section flex flex-col">
                    <label htmlFor="email">Email Address</label>
                    <input id="email" name="email" onChange={onChange}></input>
                </div>
                <div className="number form-section flex flex-col">
                    <label htmlFor="number">Phone Number</label>
                    <input id="number" name="number" onChange={onChange}></input>
                </div>
            </div>
        
        </div>
    )
};

export default FirstStep;