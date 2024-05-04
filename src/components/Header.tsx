import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='div-header'>
            <Link to='/'>
                <h1 data-testid='pageTitle'>Podcaster</h1>
            </Link>
            <hr/>
        </div>
    )
}

export default Header