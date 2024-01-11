import { Link } from 'react-router-dom';
import img from '../../assets/images/error/error.jpg'

const Errorepage = () => {
    return (
        <div className='flex flex-col items-center bg-base-100'>
            <div>
                <img className='' src={img} alt="" />
            </div>
            <div className=''>
                <Link to={'/'}><button className='text-3xl btn btn-warning'>Please go home</button></Link>
            </div>
        </div>
    );
};

export default Errorepage;