import React, { useState } from "react";


export const UncontrolledOnboardingFlow = ({
    children,
    onFinish,
}) => {
    console.log({ len: children.length });
    const [onBoardingData, setOnBoardingData] = useState({});
    const [currentStep, setCurrentStep] = useState(0);


    const reset = () => {
        setCurrentStep(0);
    }

    const goToNext = (data = {}) => {
        const nextStep = currentStep + 1;

        const newOnboardingData = {
            ...onBoardingData,
            ...data,
        }

        if (nextStep > children.length - 1) {
            onFinish(newOnboardingData, reset)
        setOnBoardingData(newOnboardingData)

            return;
        }

        setCurrentStep(nextStep);
        setOnBoardingData(newOnboardingData)
    }

    const currentStepChildren = React.Children.toArray(children)[currentStep]; 

    if (React.isValidElement(currentStepChildren)) {
        return React.cloneElement(currentStepChildren, { goToNext })
    }
    return (
        <div>
            {currentStepChildren}
            <button onClick={() => setCurrentStep(prevStep => prevStep + 1)}>Next</button>
        </div>
    )
}