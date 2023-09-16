import { useEffect, useRef, useState } from "react";


export const ControlledForm = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState({
        name: null,
        age: null,
        email: null,
    });

    const onSubmit = (e) => {
        e.preventDefault();
        console.log({
            name,
            age,
            email,
            errorMessage,
        });
    }

    useEffect(() => {
        if (name.length < 2) {
            setErrorMessage((prev) => ({
                ...prev,
                name: 'Name cannot be less than two characters!!'
            }))
        } else {
            setErrorMessage((prev) => ({
                ...prev,
                name: null
            }))
        }

        if (age < 20) {
            setErrorMessage(prev => ({
                ...prev,
                age: "You cannnot be less than 20 years old",
            }))
        } else {
            setErrorMessage((prev) => ({
                ...prev,
                age: null,
            }));
        }

        if (!email) {
            setErrorMessage(prev => ({
                ...prev,
                email: "email cannot be blank!",
            }))
        } else {
            setErrorMessage((prev) => ({
                ...prev,
                email: null,
            }));
        }
    }, [name, age, email]);
    return (
        <form>
            <p>{Object.values(errorMessage).map((message) => (
                <h5>{message}</h5>
            ))}</p>
            <input type="text" name="name" placeholder="Name" value={name} onChange={(ev) => setName(ev.target.value)} />
            <input type="number" name="age" placeholder="Age" value={age} onChange={(ev) => setAge(ev.target.value)} />
            <input type="email" name="email" placeholder="Email" value={email} onChange={(ev) => setEmail(ev.target.value)} />
            <button type="submit" onClick={onSubmit}> Submit </button>
        </form>
    )
}