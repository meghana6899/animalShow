import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import gator from './svg/gator.svg';
import dog from './svg/dog.svg';
import horse from './svg/horse.svg';
import heart from './svg/heart.svg';
import { useState } from 'react';
import './AnimalShow.css'

const svgImg = {
    bird,
    cat,
    dog,
    horse,
    cow,
    gator,
};

const AnimalShow = ({type, index}) => {
    const [clicks, setClicks] = useState(0);
    const handleClick = () => {
        setClicks(clicks+1);
    }
    return(
     
        <div className='animal-show' onClick={handleClick}>
            <img className='animal' src = {svgImg[type]} alt='animal'/>
            <img className='heart' src={heart} alt='heart' 
              style={{width: 10 + 10*clicks + 'px'}}
            />
        </div>
        
    )
}

export default AnimalShow;