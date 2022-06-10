import { useState } from 'react';

export default function Form() {

    // form data state
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        comment: '',
        isMusician: true,
        musicianType: ''
    })

    console.log(formData)

    // function that updates the form data state
    function handleChange(event) {

        // destructure
        const { name, value, type, checked } = event.target

        setFormData(prevFormDataState => {
            return {
                ...prevFormDataState,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }

    return (
        <div style={{ padding: '0.5rem 5rem' }}>
            <h1 style={{ margin: '1rem 0' }}>Form (Form State Object)</h1>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '30%' }}>

                <input type="text" placeholder="First Name" onChange={handleChange} name="firstName" value={formData.firstName} />
                <input type="text" placeholder="Last Name" onChange={handleChange} name="lastName" value={formData.lastName} />
                <input type="email" placeholder="Email" onChange={handleChange} name="email" value={formData.email} />

                <textarea placeholder="Comment" onChange={handleChange} name="comment" value={formData.comment} />

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <input type="checkbox" id="isMusician" onChange={handleChange} name="isMusician" checked={formData.isMusician} />
                    <label htmlFor="isMusician">Do you play any musical instrument?</label>
                </div>

                <label>What kind of musician are you?</label>
                <div style={{ display: 'flex' }}>
                    <input type="radio" name="musicianType" id="full-time" value="full-time" onChange={handleChange} />
                    <label>Full Time</label>
                </div>
                <div style={{ display: 'flex' }}>
                    <input type="radio" name="musicianType" id="part-time" value="part-time" onChange={handleChange} />
                    <label>Part Time</label>
                </div>

            </form>
        </div>
    );
}