import "./Header.css";

function Header() {
    return (
        <header className="header">

            <h1 className="logo">
                GACHIMUCHI UNIVERSE
            </h1>

            <nav className="nav">
                <a href="#home">HOME</a>
                <a href="#legends">LEGENDS</a>
                <a href="#about">ABOUT</a>
            </nav>

        </header>
    );
}

export default Header;