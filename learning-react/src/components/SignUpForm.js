import { useState } from "react";

export default function SignUpForm() {

    // formData state
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        isSubscribed: false
    });

    // render state
    const [renderState, setRenderState] = useState({ render: false })

    // function that updates the formData
    function handleChange(event) {

        const { name, value, type, checked } = event.target

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }

    // function that submits the formData
    function handleSubmit(event) {

        event.preventDefault()

        setRenderState({ render: true })

        // submitToApi(formData)

        // setRenderState({ render: true }) <- bring back to false again after successfully submitting

        //--------------------------------------------
        // if (formData.password === formData.confirmPassword) {
        //     console.log('Successfully signed up')
        // } else {
        //     console.log('Password did not match')
        //     return
        // }

        // if (formData.isSubscribed) {
        //     console.log('Thanks for subscribing in our newsletter!')
        // }
    }

    // variables for conditional rendering
    let confirmSignUp;
    let isSubscribedText;

    // condition rendering
    if (formData.password !== "" && formData.confirmPassword !== "") {

        if (formData.password === formData.confirmPassword) {
            confirmSignUp = <p>Successfully signed up</p>
        } else {
            confirmSignUp = <p>Password did not match</p>
        }

        if (formData.isSubscribed) {
            isSubscribedText = <p>Thanks for subscribing in our newsletter!</p>
        }
    }

    return (
        <div style={{ padding: '0.5rem 5rem' }}>

            <h1>Sign Up (Display after submiting)</h1>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '30%' }} onSubmit={handleSubmit}>

                <input type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    name="email"
                    value={formData.email} required />

                <input type="password"
                    placeholder="Password"
                    onChange={handleChange}
                    name="password"
                    value={formData.password} required />

                <input type="password"
                    placeholder="Confirm Password"
                    onChange={handleChange}
                    name="confirmPassword"
                    value={formData.confirmPassword} required />

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <input type="checkbox"
                        id="isSubscribed"
                        onChange={handleChange}
                        name="isSubscribed"
                        checked={formData.isSubscribed} />
                    <label htmlFor="isSubscribed">I want to join the newsletter</label>
                </div>

                <button>Sign Up</button>
            </form>

            {
                renderState.render && confirmSignUp
            }

            {
                renderState.render && isSubscribedText
            }
        </div>
    );
}