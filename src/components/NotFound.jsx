
import {Link} from 'react-router-dom';

const NotFound = () => {
    return (
        <div className=" p-36 text-center " >
            <h2 className=" text-center text-4xl font-bold mb-20 " >Page Not Found !!</h2>
            <Link to="/" className=" text-lg font-bold text-center text-white bg-purple-700 px-10 py-4 rounded-2xl " >Go Back to Home</Link>
        </div>
    );
};

export default NotFound;

