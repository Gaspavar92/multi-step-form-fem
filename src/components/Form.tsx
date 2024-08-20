import { useEffect, useRef } from "react";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import FourthStep from "./FourthStep";
import { useFormContext } from "./context/Context";

const Form = () => {

    const formRef = useRef<HTMLFormElement>(null);
    const { setStepCount } = useFormContext()


    useEffect(() => {
            const childrenCount = formRef.current!.children.length;
            setStepCount(childrenCount);
    }, [setStepCount]);

    return (
        <form ref={formRef} className="col-span-2 p-8 flex flex-col content-center flex-wrap">
            <div className="steps w-2/3 h-full relative">
                <FirstStep />
                <SecondStep />
                <ThirdStep />
                <FourthStep />
            </div>
        </form>
    );
};

export default Form;
