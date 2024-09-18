import "./personalinfo.css"

const PersonalInformation = ({ formData, setFormData, errors }) => {
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => {
            return { ...prev, [name]: value }
        })
    } 

    console.log(formData);
    
    const getInputClass = (fieldName) => {
        if(errors[fieldName]){
            return "input-error";
        }else if(formData[fieldName]){
            return "valid-input";
        }else {
            return "initital-input"
        }
    }

    return (
        <div className="personal-form-data">
            <p>Personal Information</p>
            <div>
                <label htmlFor="name">Full Name<span style={{color : "red"}}>*</span> </label><br />
                <input type="text" className={getInputClass("name")} value={formData.name} onChange={handleOnChange} name="name" id="name" placeholder="Enter your name"/><br />
                {
                    errors && <span className="error-message">{errors.name}</span>
                }
            </div>
            <div>
                <label htmlFor="email">Email<span style={{color : "red"}}>*</span></label><br />
                <input type="email" className={getInputClass("email")} value={formData.email} onChange={handleOnChange} name="email" id="email" placeholder="Enter your email"/><br />
                {
                    errors && <span className="error-message">{errors.email}</span>
                }
            </div>
            <div>
                <label htmlFor="phone">Phone Number<span style={{color : "red"}}>*</span></label><br />
                <input className={getInputClass("phone")} type="tel" value={formData.phone} onChange={handleOnChange} placeholder="e.g. +91 6261454500" name="phone" id="phone" /><br />
                {
                    errors && <span className="error-message">{errors.phone}</span>
                }
            </div>
        </div>
    )
}
export default PersonalInformation;