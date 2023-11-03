import { useState } from "react";

function General() {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [phNum, setPhNum] = useState("")
    const [editMode,setEditMode] = useState(true)

    const handleNameChange = (event) => {
        setFullName(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePhoneChange = (event) => {
        setPhNum(event.target.value);
    }

    const handleEditModeChange = (event) => {
        setEditMode(true);
    }

    const handleSubmit = (e)=>{

        setEditMode(false);
    }

    const editButton = (<button onClick={handleEditModeChange}>Edit Info</button>)
    const submitButton = (<button type="submit" onClick={handleSubmit}>Submit</button>)
    const editContent = (
        <form>
            <input type="text"
                id="name"
                name="fullName"
                placeholder="Full Name"
                value={fullName}
                onChange={handleNameChange}
                required /><br />
            <input type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                required /><br />
            <input type="tel"
                id="number"
                name="number"
                placeholder="Phone Number"
                value={phNum}
                onChange={handlePhoneChange}
                required /><br/>
            {submitButton}
        </form>)
    const submitContent = (
        <div>
            Name: {fullName.toUpperCase()}<br/>
            Email: {email}<br/>
            Phone Number: {phNum}<br/>
            {editButton}
        </div>
    )
    return (
        <>
            <h3>General</h3>
            {editMode?editContent:submitContent}
        </>
    )
}
export default General;