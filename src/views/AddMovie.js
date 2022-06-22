import { useState } from "react";

const AddMovie = ({addMovie}) => {
    const [title, setTitle] = useState('')
    const [year, setYear] = useState('')
    const [rating, setRating] = useState('')


    const onSubmit = e => {
        e.preventDefault();
        if (!title) {
            return window.alert("must have a title")
        } else {
            addMovie({ title, year, rating })
            setTitle('')
            setYear('')
            setRating('')
        }
    }
    return(
        <>
        <form onSubmit={onSubmit}>
            <div className="container d-md-flex mt-4">
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="form-control me-2" placeholder="title" aria-label="Username" aria-describedby="basic-addon1" />
                <input type="number" onKeyPress={e => {if (e.target.value.length == 4) e.preventDefault()}} value={year} onChange={e => setYear(e.target.value)} className="form-control me-2" placeholder="year" aria-label="Username" aria-describedby="basic-addon1" />
                <input type="number" onKeyPress={e => {if (e.target.value.length == 3) e.preventDefault()}} value={rating} onChange={e => setRating(e.target.value)} className="form-control" placeholder="rating" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="d-block mt-4">
                <button type="submit" className="btn btn-danger">Add Movie</button>
            </div>
        </form>
        </>
    )
}


export default AddMovie