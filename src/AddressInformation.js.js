import { useState } from "react";
import "./personalinfo.css";
import { useEffect } from "react";

const AddressInformation = ({ formData, setFormData, errors }) => {
    const [isChecked, setIsChecked] = useState(false);
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const handleChecked = (e) => {
        setIsChecked(e.target.checked);
    }

    const getInputClass = (fieldName) => {
        if (errors[fieldName]) {
            return "input-error";
        } else if (formData[fieldName]) {
            return "valid-input";
        }
    }

    useEffect(() => {
        setFormData((prev) => {
            return { ...prev, ["address2"]: isChecked ? formData.address1 : "" }
        })
    }, [isChecked])

    return (
        <div className="address-form-data">
            <p>Address Informaation</p>
            <div>
                <label htmlFor="address1">Address Line 1<span style={{color : "red"}}>*</span> </label><br />
                <textarea value={formData.address1} className={getInputClass("address1")} onChange={handleOnChange} name="address1" id="address1" /><br />
                {
                    errors && <span className="error-message">{errors.address1}</span>
                }
            </div>
            <div className="checkbox">
                <input type="checkbox" id="address2-checkbox" checked={isChecked} onChange={handleChecked} />
                <label htmlFor="address2-checkbox">is address 2 same as address 1</label>
            </div>
            <div>
                <label htmlFor="address2">Address Line 2 </label><br />
                <textarea value={formData.address2} onChange={handleOnChange} name="address2" id="address2" disabled={isChecked} /><br />
            </div>
            <div>
                <label htmlFor="city">City<span style={{color : "red"}}>*</span></label><br />
                <input type="text" value={formData.city} className={getInputClass("city")} onChange={handleOnChange} placeholder="" name="city" id="city" /><br />
                {
                    errors && <span className="error-message">{errors.city}</span>
                }
            </div>
            <div>
                <label htmlFor="state">State<span style={{color : "red"}}>*</span></label><br />
                <input type="text" value={formData.state} className={getInputClass("state")} onChange={handleOnChange} placeholder="" name="state" id="state" /><br />
                {
                    errors && <span className="error-message">{errors.state}</span>
                }
            </div>
            <div>
                <label htmlFor="zipcode">Zip Code<span style={{color : "red"}}>*</span></label><br />
                <input type="number" value={formData.zipcode} className={getInputClass("zipcode")} onChange={handleOnChange} placeholder="enter your zipcode" name="zipcode" id="zipcode" min={6} max={6} /><br />
                {
                    errors && <span className="error-message">{errors.zipcode}</span>
                }
            </div>
        </div>
    )
}
export default AddressInformation;