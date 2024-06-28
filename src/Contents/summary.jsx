import {Link} from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage.jsx";

const SummaryComponent = () => {

    // Changes the elected plan to either yearly or monthly
    const {
        total,
        price,
        changePlan,
        durationVal,
        serviceCheckbox,
        storageCheckbox,
        customizableCheckbox,
        storagePrice,
        onlinePrice,
        customizablePrice
    } = useLocalStorage();

    return (

        <div className="summary-container">
            <div className="header header-mobile">
                <h1>Finishing up</h1>
                <p>Double check everything looks OK before confirming.</p>
            </div>
            <div className="summary-body">
                <div className="colour">
                    <div className="row" id="ar">
                        <div>
                            <h3>{JSON.parse(localStorage.getItem('active')) || 'Arcade'} ({durationVal})</h3>
                            <p className="changePlan" onClick={() => changePlan()}>Change</p>
                        </div>
                        <p>${price || '0'}</p>
                    </div>
                    <div className="row" id="row-plan">
                        {serviceCheckbox && <div className="row-plan">
                            <p>Online service</p>
                            <span>+${onlinePrice}</span>
                        </div>
                        }
                        {storageCheckbox && <div className="row-plan">
                            <p>Larger storage</p>
                            <span>+${storagePrice}</span>
                        </div>
                        }
                        {customizableCheckbox && <div className="row-plan">
                            <p>Customizable Profile</p>
                            <span> +${customizablePrice} </span>
                        </div>
                        }
                    </div>
                </div>
                <div className="row">
                    <p>Total</p>
                    <h4>${total || '0'}</h4>
                </div>
            </div>
            <div className="btn-container">
                <Link to=".." relative="path" className="go-back-link">Go Back</Link>
                <Link className="link" onClick={(e) => {
                    if (localStorage.getItem('Name') == null) {
                        e.preventDefault()
                    } else if (localStorage.getItem('email') == null) {
                        e.preventDefault()
                    } else if (localStorage.getItem('Telephone') == null) {
                        e.preventDefault()
                    } else if (localStorage.getItem('duration') == null) {
                        e.preventDefault()
                    } else if (localStorage.getItem('active') == null) {
                        e.preventDefault()
                    }
                }} to='/thankyou' type="submit">Confirm</Link>
            </div>
        </div>
    );
}

export default SummaryComponent;