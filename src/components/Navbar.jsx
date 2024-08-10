import '../assets/styles.css';
const total = 25000

const Navbar = ({ onShowRegister, onShowLogin }) => {
    return (
        <nav className="navbar">
            <a className="navbar-brand" href="#">Pizzería Mamma Mia!</a>
            <div className="navbar-buttons">
                <button className="navbar-button">
                    <a className="nav-link" href="#">🍕 Home</a>
                </button>
                <button onClick={onShowLogin} className="navbar-button">
                    <a className="nav-link" href="#">🔐 Login</a>
                </button>
                <button onClick={onShowRegister} className="navbar-button">
                    <a className="nav-link" href="#">🔐 Register</a>
                </button>
            </div>
            <button className="navbar-text">
                <a href="#">
                    🛒 Total: ${total.toLocaleString()}
                </a>
            </button>
        </nav>
    );
};

export default Navbar;
