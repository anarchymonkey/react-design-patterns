import axios from "axios"
import { Layout } from "./components/Layout"
import { Mapper } from "./components/Mapper"
import { LeftPane } from "./components/Shared/LeftPane"
import { RightPane } from "./components/Shared/RightPane"
import { UserListItem } from "./components/Shared/UserListItem"
import { useEffect, useState } from "react"
import { DataConfigLoader } from "./components/DataConfigLoader"
import { UncontrolledForm } from "./components/Shared/UncontrolledForm"
import { ControlledForm } from "./components/ControlledForm"
import { UncontrolledOnboardingFlow } from "./components/UncontrolledOnboardingFlow"
import { ControlledOnboradingFlow } from "./components/ControlledOnboardingFlow"

const getUsers = async () => {
    const response = await axios.get('https://dummyjson.com/users')
    console.log({ response: response.data });
    return response.data.users;
}

const getUserById = async (id) => {
    const response = await axios.get(`https://dummyjson.com/users/${id}`)
    console.log({ response: response.data });
    return response.data;
}

const Step1 = ({ goToNext }) => {

    return (
        <>
            <div>Step 1</div>
            <button onClick={() => goToNext({ name: "Aniket" })}>Next step</button>
        </>
    )
}

const Step2 = ({ goToNext }) => {

    return (
        <>
            <div>Step 2</div>
            <button onClick={() => goToNext({ age: 61 })}>Next</button>
        </>
    )
}

const Step3 = ({ goToNext }) => {

    return (
        <>
            <div>Step 3</div>
            <button onClick={() => goToNext({ hairColor: "Black" })}>Next</button>
        </>
    )
}

const Step4 = ({ goToNext }) => {

    return (
        <>
            <div>Step 4</div>
            <button onClick={() => goToNext({ voice: "deep" })}>Finish</button>
        </>
    )
}

export const App = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [onboardingData, setOnboardingData] = useState({});
    // const [users, setUsers] = useState([]);

    // useEffect(() => {
    //     (async () => {
    //         const resp = await getUsers();
    //         setUsers(resp)
    //     })()
    // }, []);

    const handleFinish = (finalData) => {
        console.log("final data after flow finishes", onboardingData);
        setCurrentIndex(0);
    }
    
    const handleNext = (data) => {
        console.log({ data, onboardingData });
        const newOnboardingData = {
            ...onboardingData,
            ...data,
        }
        setCurrentIndex((prevIndex) => prevIndex + 1);
        setOnboardingData(newOnboardingData);
    }
    return (
        <>
            {/* Tutorial 1: Setting up layouts*/}
            {/* <Layout leftAspect={1} rightAspect={5} leftBg="red" rightBg="green">
                <LeftPane />
                <RightPane />
            </Layout> */}
            {/* Tutorial 2: Setting up iterators */}
            {/* <Mapper items={users} resourceName="user" ItemComponent={UserListItem} /> */}
            {/* Tutorial 3: Data Config Loader (Container Components) */}
            {/* <DataConfigLoader getData={() => getUserById(4)} resourceName="user">
                <UserListItem />
            </DataConfigLoader> */}
            {/* Tutotial 4: Uncontrolled and Controlled Components */}
            {/* <UncontrolledForm /> */}
            {/* <ControlledForm /> */}
            {/* Tutotial 5: Uncontrolled Onboarding flow */}
            {/* <UncontrolledOnboardingFlow onFinish={handleFinish}>
                <Step1 />
                <Step2 />
                <Step3 />
            </UncontrolledOnboardingFlow> */}
            <ControlledOnboradingFlow onFinish={handleFinish} onNext={handleNext} currentIndex={currentIndex}>
                <Step1 />
                <Step2 />
                {onboardingData.age > 60 && <Step3 />}
                <Step4 />
            </ControlledOnboradingFlow>

        </>
    )
}