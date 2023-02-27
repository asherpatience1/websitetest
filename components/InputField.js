import React from 'react'

const InputField = ({ type, placeholder, label, required, isSubmitted, setVal, name, value }) => {
    const [error, setError] = React.useState(false);
    const [errorMsg, setErrorMsg] = React.useState('');

    React.useEffect(() => {
        if (required, isSubmitted) {
            if (!value) {
                setErrorMsg(`${label} is required!`);
                setError(true);
            } else {
                setError(false);
                setErrorMsg('');
            }
            if (value) {
                switch (type) {
                    case "email":
                        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                            setErrorMsg('Invalid email address!');
                            setError(true);
                        }
                        break;
                    case "tel":
                        if (value.length < 11) {
                            setErrorMsg('Invalid phone number!');
                            setError(true);
                        }
                        break;
                    default:
                        setError(false);
                        setErrorMsg('');
                        break;
                }
            }
        }
    }, [value, isSubmitted])

    return (
        <>
            <div className="form-each">
                <label>{label}{required && '*'}</label>
                <input
                    type={type}
                    placeholder={placeholder}
                    onChange={(e) => { setVal(e); }}
                    name={name}
                    value={value ?? ''}
                />
                {error && <span className="input-error">{errorMsg}</span>}
            </div>
        </>
    )
}

export default InputField