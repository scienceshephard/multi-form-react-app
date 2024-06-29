import useLocalStorage from "./hooks/useLocalStorage.jsx";

const NavBar = () => {
    const {
        numRow
    } = useLocalStorage()
    return (
        <div className="navbar">
            <div className="card">
                <div className="num-row "
                     style={{backgroundColor: (localStorage.getItem('numRow') === 1 || numRow) && '#00ffffc9'}}>1
                </div>
                <div className="content">
                    <p className="step">STEP 1</p>
                    <p className="step-content">YOUR INFO</p>
                </div>
            </div>
            <div className="card">
                <div className="num-row "
                     style={{backgroundColor: (localStorage.getItem('numRow') === 2) && '#00ffffc9'}}>2
                </div>
                <div className="content">
                    <p className="step">STEP 2</p>
                    <p className="step-content">SELECT PLAN</p>
                </div>
            </div>
            <div className="card">
                <div className="num-row "
                     style={{backgroundColor: (localStorage.getItem('numRow') === 3) && '#00ffffc9'}}>3
                </div>
                <div className="content">
                    <p className="step">STEP 3</p>
                    <p className="step-content">ADD-ONS</p>
                </div>
            </div>
            <div className="card">
                <div className="num-row"
                     style={{backgroundColor: (localStorage.getItem('numRow') === 4) && '#00ffffc9'}}>4
                </div>
                <div className="content">
                    <p className="step">STEP 4</p>
                    <p className="step-content">SUMMARY</p>
                </div>
            </div>
        </div>
    );
}

export default NavBar;