const ThirdStep = ({onChange}) => {


    return (
        <div className="flex flex-col gap-12">
            <div className="header-text">
                <h1>Pick add-ons</h1>  
                <p>Add-ons help enhance your gaming experience.</p>
            </div>
            <input id="name" name="address" onChange={onChange}></input>
            <label htmlFor="address">Name</label>
        </div>
    )
};

export default ThirdStep;