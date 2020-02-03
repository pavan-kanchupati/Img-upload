import React from 'react'; 
import './card-style.css';


const Home = ( props ) =>{
return(
    <div className = 'card text-center'>
        <div className='overflow'>
            <a href="" >
                <img src= {props.imgsrc} alt='image1' className="card-img-top"></img>
            </a>
        </div>
    </div>
)
}

export default Home;