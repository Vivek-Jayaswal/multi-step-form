import { useEffect, useState } from "react";
import PersonalInformation from "./PersonalInformation";
import AddressInformation from "./AddressInformation.js";
import Confirmation from "./Confirmation";
import "./App.css"
import ProgressBar from "./ProgressBar.js";

const App = () => {
  const inititalState = {
    name: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipcode: ""
  }
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(inititalState);

  const [errors, setErrors] = useState({});
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^\+?[1-9]\d{1,3}[-.\s]?\d{10}$/;

  const formValidator = () => {
    console.log("form validatro");

    const formError = {};
    if (step === 1) {
      if (!formData.name) {
        formError.name = "name is required";
      }
      else if (formData.name.length < 4 || formData.name.length > 16) {
        formError.name = "Name should be in between 4-16 Character long";
      }
      if (!formData.email) {
        formError.email = "email required";
      }
      else if (!emailRegex.test(formData.email)) {
        formError.email = "Incorrect email format"
      }
      if (!formData.phone) {
        formError.phone = "Phone number required";
      }
      else if (!phoneRegex.test(formData.phone)) {
        formError.phone = "Wrong phone number";
      }
    }

    if (step === 2) {
      if (!formData.address1) formError.address1 = "Address Line1 is required";
      if (!formData.city) formError.city = "City name is required";
      if (!formData.state) formError.state = "State name is required";
      if (!formData.zipcode) formError.zipcode = "Zip code is required";
    }
    setErrors(formError);
    return Object.keys(formError).length === 0;
  }

  const handleBack = () => {
    setStep(step - 1);
  }
  const handleNext = () => {
    if (formValidator()) {
      setStep(step + 1);
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
    setFormData(inititalState)
    localStorage.removeItem('formData');
    setStep(1);

    // successfully response for api
    setTimeout(() => console.log(formData), 1000);
  }

  useEffect(() => {
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  return (
    <div className="app">
      <div className="form">
        <ProgressBar step={step}/>
        <div>
          {
            step === 1 && (<PersonalInformation formData={formData} setFormData={setFormData} errors={errors} />)
          }
          {
            step === 2 && (<AddressInformation formData={formData} setFormData={setFormData} errors={errors} />)
          }
          {
            step === 3 && (<Confirmation formData={formData} />)
          }
        </div>
        <div className="form-btn">
          {
            step > 1 ? <button className="back-btn btn" onClick={handleBack}>Privious</button> : <button className="back-btn btn" disabled>Privious</button>
          }
          {
            step < 3 && <button className="next-btn btn" onClick={handleNext}>Next</button>
          }
          {
            step === 3 && <button className="submit-btn btn" onClick={handleSubmit}>submit</button>
          }
        </div>
      </div>
    </div>
  )
}
export default App;