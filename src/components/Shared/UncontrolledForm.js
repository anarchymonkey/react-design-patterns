import { useRef } from "react";


export const UncontrolledForm = () => {
    const nameRef = useRef(null);
    const ageRef = useRef(null);
    const emailRef = useRef(null);

    // We do not have any controll over the values that the form contain and we cant add validations
    const handleSubmit = e => {
        // preventing the default behaviour of the form
        e.preventDefault();
        console.log({
            name: nameRef.current.value,
            age: ageRef.current.value,
            email: emailRef.current.value,
        });
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" ref={nameRef} />
            <input type="number" name="age" placeholder="Age" ref={ageRef} />
            <input type="email" name="email" placeholder="Email" ref={emailRef} />
            <input type="submit" value="Submit" placeholder="Submit" />
        </form>
    )
}