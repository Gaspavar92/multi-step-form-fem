import AddOns from "./AddOns";

const ThirdStep = () => {

    return (
        <div className="flex flex-col gap-12">
            <div className="header-text">
                <h1>Pick add-ons</h1>  
                <p>Add-ons help enhance your gaming experience.</p>
            </div>
            <AddOns />
        </div>
    )
};

export default ThirdStep;