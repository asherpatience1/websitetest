import { formReducer } from '@/utils/globalFunction'
import axios from 'axios';
import React, { useEffect } from 'react'
import InputField from './InputField';

const Form = () => {

    const [formData, setFormData] = React.useReducer(formReducer, {});
    const [isSubmitted, setIsSubmitted] = React.useState(false);
    const [isDisabled, setIsDisabled] = React.useState(false);
    const [message, setMessage] = React.useState('');
    const [error, setError] = React.useState(false);


    const handleOnSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setIsDisabled(true);
        if (formData) {
            if (formData['name'] && formData['email'] && formData['phone']?.length > 10) {
                axios.post('http://localhost:3001/api/', formData)
                    .then(({ data }) => {
                        Object.keys(formData).map(x => {
                            setFormData({
                                target: {
                                    name: x,
                                    value: ''
                                }
                            })
                        })
                        setMessage("Thankyou for contacting divoec.");
                        setIsDisabled(false);
                        setIsSubmitted(false);
                    })
                    .catch(err => {
                        setError(true);
                        setMessage("Error occured please try again!.");
                        setIsDisabled(false);
                        setIsSubmitted(false);
                    });
            } else {
                setIsDisabled(false);
            }
        } else {
            setIsDisabled(false);
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if (message && !error) {
                setMessage('');
            }
        }, 3000);
        return () => clearTimeout(timer);
    }, [message])

    return (
        <div className="form-sec cmn_gap" id="form_sec">
            <div className="container">
                <div className="form-hdr cmn-hdr">
                    <h2>Build your full-time dedicated teams today.</h2>
                </div>
                <div className="form-wrap">
                    <div className="form-uppr">
                        <form className="form-control" onSubmit={handleOnSubmit}>
                            <InputField
                                type="text"
                                placeholder="Full Name"
                                label="Full Name"
                                required={true}
                                isSubmitted={isSubmitted}
                                setVal={setFormData}
                                name='name'
                                value={formData['name']}
                            />
                            <InputField
                                type="email"
                                placeholder="Email Address"
                                label="E-mail address"
                                required={true}
                                isSubmitted={isSubmitted}
                                name='email'
                                value={formData['email']}
                                setVal={setFormData}
                            />
                            <InputField
                                type="tel"
                                placeholder="91+"
                                label="Phone number"
                                required={true}
                                isSubmitted={isSubmitted}
                                setVal={setFormData}
                                value={formData['phone']}
                                name='phone'
                            />
                            <InputField
                                type="text"
                                placeholder="Company website"
                                label="Company website"
                                required={true}
                                isSubmitted={isSubmitted}
                                value={formData['company']}
                                name='company'
                                setVal={setFormData}
                            />
                            <InputField
                                type="text"
                                placeholder="Work Function needed"
                                label="Work function needed"
                                required={true}
                                isSubmitted={isSubmitted}
                                value={formData['workfunction']}
                                name='workfunction'
                                setVal={setFormData}
                            />
                            <InputField
                                type="text"
                                placeholder="Number of employees Needed"
                                label="Number of employees needed"
                                required={true}
                                name='employees'
                                isSubmitted={isSubmitted}
                                value={formData['employees']}
                                setVal={setFormData}
                            />
                            <div className="form-area">
                                <label>Short description of your need</label>
                                <textarea onChange={setFormData} name='description' cols="30" rows="10" placeholder="Short description of your need"></textarea>
                            </div>
                            <div className="form-area">
                                {message && <p className='success-message' style={{ color: error ? 'red' : 'green', textAlign: 'center', marginBottom: -20 }}>{message}</p>}
                            </div>
                            <div className="submit-butn">
                                <input disabled={isDisabled} onClick={handleOnSubmit} type="submit" value="HIRE TODAY" className="submit-butn2" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form