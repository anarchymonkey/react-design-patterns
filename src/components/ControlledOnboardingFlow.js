import React from "react";


export const ControlledOnboradingFlow = ({
    children,
    onNext,
    currentIndex,
    onFinish,
}) => {
    
    const currentStepChildren = React.Children.toArray(children)[currentIndex]; 
    
    const goToNext = (data = {}) => {
        if (currentIndex >= React.Children.toArray(children).length - 1) {
            onFinish(data);
            return;
        }
        onNext(data);
    }

    if (React.isValidElement(currentStepChildren)) {
        return React.cloneElement(currentStepChildren, { goToNext })
    }
    return (
        <div>
            {currentStepChildren}
        </div>
    )
}