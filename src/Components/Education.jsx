import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import DegreeForm from "./DegreeForm";

function Education() {
    const initialObject = {
        school: "",
        title: "",
        date: "",
        id: uuidv4()
    }

    const [degreeArr, setDegreeArr] = useState([initialObject])
    const [editMode, setEditMode] = useState(true)

    // Changing an array using useState 
    const handleChange = (e) => {
        setDegreeArr(degreeArr.map(degree => {
            return degree.id === e.target.className ? { ...degree, [e.target.name]: e.target.value } : degree
        }
        ))
    }

    // Adding new values
    const handleAddNew = () => {
        setDegreeArr(degreeArr.concat({
            school: "",
            title: "",
            date: "",
            id: uuidv4()
        }))
    }

    // Delete From Arr
    const handleDelete = (e) => {
        setDegreeArr(degreeArr.filter(degree => {return degree.id !== e.target.className}));
      }
      

    // Submit Form
    const handleSubmit = (e) => {
        e.preventDefault();
        setEditMode(false);
    }

    // Editing Form
    const handleEdit = () => {
        setEditMode(true);
    }

    const editButton = (<button onClick={handleEdit}> Edit </button>)
    const addButton = (<button onClick={handleAddNew}> Add More</button>)
    const submitButton = (<button onClick={handleSubmit}> Submit </button>)

    const editContent = (
        <div>
            {degreeArr.map((degree) => (
                <DegreeForm
                    handleChange={handleChange}
                    handleDelete={handleDelete}
                    school={degree.school}
                    title={degree.title}
                    date={degree.date}
                    key={degree.id}
                    id ={degree.id}
                />
            ))}
            {submitButton}
        </div>
    );
    const submittedContent = (
        degreeArr.map((degree) => (
            <div key={degree.id}>
                {degree.school.toUpperCase()}<br />
                {degree.title}<br/>
                {degree.date !== "" && <p>Graduated {degree.date}</p>}
            </div>
        ))
    );

    return (
        <>
            <h3>Education</h3>
            {editMode ? editContent : submittedContent}
            {editMode && addButton}
            {!editMode && editButton}
            <br />
        </>
    )
}
export default Education