const SecondStep = ({onChange, onClick}) => {

    return (
        <div className="flex flex-col gap-12">
            <div className="header-text">
                <h1>Select your plan</h1>  
                <p>You have the option of monthly or yearly billing.</p>
            </div>
            <input id="name" name="last-name" onChange={onChange}></input>
            <label htmlFor="last-name">Last Name</label>
        </div>
    )
};

export default SecondStep;