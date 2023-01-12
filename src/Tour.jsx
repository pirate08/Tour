import React, { useState } from 'react';

function Tour({ name, info, price, id, image, removeTour }){
    const [readMore,setReadMore] = useState(false);

    return(
        <article className='single-tour'>
            <img src={image} alt={name} />
            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <div className="tour-price">${price}</div>
                </div>
                <p>
                {readMore ? info : `${info.substring(0,200)}.....`}
                <button onClick={() => setReadMore(!readMore)}>
                    {readMore ? 'show less' : 'read more'}
                </button>
                </p>
                <button className="delete-btn" onClick={() => removeTour(id)}>
                    not interested
                    </button>
            </footer>
        </article>
    )
}

export default Tour;