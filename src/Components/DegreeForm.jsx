function DegreeForm({handleChange,handleDelete,school,title,date,id}){
    return(
        <form>
            <input type="text"
                className={id}
                name="school"
                placeholder="School/University Name"
                value={school}
                onChange={handleChange}
                required /><br />
            <input type="text"
                className={id}
                name="title"
                placeholder="Title of Degree"
                value={title}
                onChange={handleChange}
                required /><br />
            <input type="date"
                className={id}
                name="date"
                placeholder="Joining Date"
                value={date}
                onChange={handleChange}/><br/>
            <button className={id} onClick={handleDelete}>Delete</button>
        </form>
    )
}
export default DegreeForm