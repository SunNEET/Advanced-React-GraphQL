import Nav from './Nav';
const Header = (props) => {
    return (
        <div>
            <div className="bar">
                <a href="">NepuNepu</a>
                <Nav />
            </div>
            <div className="sub-bar">
                <p> Search</p>
            </div>
            <div>Cart</div>
        </div>
        
    );
}

export default Header;