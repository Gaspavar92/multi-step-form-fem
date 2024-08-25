const FourthStep = ({onChange}) => {

    return (
        <div className="flex flex-col gap-12">
            <div className="header-text">
                <h1>Finishing up</h1>  
                <p>Double-check everything looks OK before confirming.</p>
            </div>
            <input id="name" name="address" onChange={onChange}></input>
            <label htmlFor="address">Address</label>
        </div>
    )
};

export default FourthStep;