import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom'

export default function RecipeCardTemplate({images, title, uuid, description, servings, cookTime, prepTime}) {
    

    //This assesses the current screen size, checks if the size has changed, and updates it if it has.
    const [screenSize, getDimension] = useState({dynamicWidth:window.innerWidth, dynamicHeight: window.innerHeight});
    
    const setDimension = () => {
        getDimension({
            dynamicWidth: window.innerWidth,
            dynamicHeight: window.innerHeight
        })
    }

    useEffect(() => {
        window.addEventListener('resize', setDimension);
        return (() => {
            window.removeEventListener('resize', setDimension)
        })
    }, [screenSize])



    return (
        <React.Fragment>
            <NavLink to={`/recipes/:${uuid}`} className='recipe-link' key={uuid}>
                <article className='recipe-card' id={uuid}>
                    <figure className='recipe-img'>
                        <img src={`http://localhost:3001${(screenSize.dynamicWidth >= 993) ? images.medium : images.small}`} alt={`${title}`}/>
                    </figure>

                    <header className='recipe-content'>
                        <h2 className='recipe-header'>{title}</h2>
                        <p className='recipe-description'>{description}</p>
                    </header>

                    <footer className='recipe-content'>
                        <p className='serving-size'>serves {servings}</p>
                        <p className='cook-time'>total time to make: {cookTime + prepTime} minutes</p>
                    </footer>
                </article>
            </NavLink>    
        </React.Fragment>
    )
}
