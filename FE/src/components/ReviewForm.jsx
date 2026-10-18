import './ReviewForm.css'
import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

const ReviewForm = () => {
    const { id } = useParams();
    const [formData, setFormData] = useState(
        {
            username: "",
            rating: 0,
            feedback: ""
        }
    )

    const handleSubmit = () => {
        axios.post(`http://localhost:3000/boardgames/${id}/reviews`, formData)
            .then(() => {
                console.log("Recensione aggiunta correttamente");
                setFormData({ username: "", rating: 0, feedback: "" })
            })
            .catch(err => console.error("errore nell'invio dei dati al server / DB", err))
    };

    const handleChange = (e) => {
        setFormData((formData) => (
            { ...formData, [e.target.name]: e.target.value }
        ))
    };

    return (
        <form className='form-review' onSubmit={handleSubmit}>
            <h3>Inserisci la tua recensione</h3>
            <div className='form-username'>
                <label htmlFor="username">User: </label>
                <input type="text" name="username" value={formData.username} onChange={handleChange} />
            </div>
            <div className='form-rating'>
                <label htmlFor="rating">Vote: </label>
                <input type="number" name="rating" value={formData.rating} onChange={handleChange} min={0} max={5} required />
            </div>

            <textarea name="feedback" rows="6" value={formData.feedback} onChange={handleChange} placeholder='Scrivi qui la tua recensione'></textarea>

            <button type="submit">Invia</button>
        </form>
    )
};

export default ReviewForm;