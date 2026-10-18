import './ReviewForm.css'

const ReviewForm = () => (
    <form className='form-review'>
        <h3>Inserisci la tua recensione</h3>
        <div className='form-username'>
            <label htmlFor="username">User: </label>
            <input type="text" name="username" />
        </div>
        <div className='form-rating'>
            <label htmlFor="rating">Vote: </label>
            <input type="number" name="rating" />
        </div>

        <textarea name="feedback" rows="6" placeholder='Scrivi qui la tua recensione'></textarea>

        <button type="submit">Invia</button>
    </form>
);

export default ReviewForm;