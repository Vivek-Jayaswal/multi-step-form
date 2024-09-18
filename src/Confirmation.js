const Confirmation = ({formData}) => {
    return (
        <div>
            <h2>Review Your Details</h2>
            <p>Name :- {formData.name}</p>
            <p>Email : {formData.email}</p>
            <p>Phone Number : {formData.phone}</p>
            <p>Address Line 1 : {formData.address1}</p>
            <p>Address Line 2 : {formData.address2}</p>
            <p>City : {formData.city}</p>
            <p>State : {formData.state}</p>
            <p>Zip Code : {formData.zipcode}</p>
        </div>
    )
}
export default Confirmation;