import {Link} from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage.jsx";
import ReactSwitch from 'react-switch'

// eslint-disable-next-line react/prop-types
const Plan = () => {
    const {
        durationVal,
        activeButton,
        arcadePrice,
        proPrice,
        advancedPrice,
        togglebutton,
        handleChecked,
        handleChoiceClicked,
        handleNumRowStyle
    } = useLocalStorage();

    return (
        <div className="plan-container">
            <div className="header header-mobile">
                <h1>Select Your Plan</h1>
                <p>Please have the option of monthly or yearly billing.</p>
            </div>
            <div className="form-plan">
                <div className="card-choice">
                    <div className="card-choy" onClick={() => handleChoiceClicked("Arcade")} style={{
                        border: activeButton == "Arcade" && '3px solid #0000ffba',
                        backgroundColor: activeButton == "Arcade" && 'beige'
                    }}>
                        <img src="/icon-arcade.svg" alt="Arcade Image"/>
                        <div className="header">
                            <h2>Arcade</h2>
                            <p>${arcadePrice}/{durationVal || 'month'}</p>
                            {togglebutton && <h4>2 months free</h4>}
                        </div>
                    </div>

                    <div className="card-choy" onClick={() => handleChoiceClicked("Advanced")} style={{
                        border: activeButton == "Advanced" && '3px solid #0000ffba',
                        backgroundColor: activeButton == "Advanced" && 'beige'
                    }}>
                        <img name="arcade" src="/icon-advanced.svg"
                             alt="Advanced Image"/>
                        <div className="header">
                            <h2>Advanced</h2>
                            <p>${advancedPrice}/{durationVal || 'month'}</p>
                            {togglebutton && <h4>1 month free</h4>}
                        </div>
                    </div>

                    <div className="card-choy" onClick={() => handleChoiceClicked("Pro")} style={{
                        border: activeButton == "Pro" && '3px solid #0000ffba',
                        backgroundColor: activeButton == "Pro" && 'beige'
                    }}>
                        <img src="/icon-pro.svg" alt="Pro Image"/>
                        <div className="header">
                            <h2>Pro</h2>
                            <p>${proPrice}/{durationVal || 'month'}</p>
                            {togglebutton && <h4>3 months free</h4>}
                        </div>
                    </div>
                </div>
                <div className="toggle-container">
                    <p>Monthly</p>
                    <ReactSwitch checked={togglebutton} uncheckedIcon={false} checkedIcon={false}
                                 onChange={() => handleChecked()} id="togglebutton"/>
                    <p>Yearly</p>
                </div>
            </div>
            <div className="btn-container">
                <Link to=".." className="go-back-link">Go Back</Link>
                <Link className="link" to='/plan/adds' onClick={() => handleNumRowStyle(3)} type="submit">Next
                    Step</Link>
            </div>
        </div>
    );
}

export default Plan;