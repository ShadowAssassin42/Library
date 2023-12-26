import { Link } from 'react-router-dom';
import '../CSS/NotFound.css'

function NotFound() {
    return (
        <div>
            <div className='image'>
                <img className='img2' src="https://vsegda-pomnim.com/uploads/posts/2022-03/1648673394_32-vsegda-pomnim-com-p-perekati-pole-v-pustine-foto-34.jpg" alt="" />
            </div>
            <div className='newtext'>
            <p>
                Вы попали куда-то не туда. Пожалуйста, <Link to='/'>вернитесь</Link> 
            </p>
            </div>
            
        </div>
    );
}

export default NotFound;