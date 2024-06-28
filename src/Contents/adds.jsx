import {Link} from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage.jsx";

// eslint-disable-next-line react/prop-types
const AddsComponent = () => {
    const {
        onlinePrice,
        storagePrice,
        durationVal,
        customizablePrice,
        handleServiceCheckedBox,
        handleStorageCheckedBox,
        handleCustomizableCheckedBox,
        serviceCheckbox,
        storageCheckbox,
        customizableCheckbox,
        total
    } = useLocalStorage()

    return (
        <div className="adds-container">
            <div className="header header-mobile">
                <h1>Pick add-ons</h1>
                <p>Add-ons help enhance your gaming experience</p>
                <p>{total}</p>
            </div>
            <div className='form-adds'>
                <div className='option' style={{backgroundColor: serviceCheckbox ? 'beige' : ''}}>
                    <input type="checkbox" checked={serviceCheckbox} onChange={() => {
                        handleServiceCheckedBox(onlinePrice)
                        // addToTotal(200)
                    }}/>
                    <div className="adds-content">
                        <h2>Online service</h2>
                        <p>Access to multiplayer games</p>
                    </div>
                    <p>+${onlinePrice}/{durationVal || 'Month'}</p>
                </div>
                <div className="option" style={{backgroundColor: storageCheckbox ? 'beige' : ''}}>
                    <input type="checkbox" id="storage" checked={storageCheckbox}
                           onChange={() => handleStorageCheckedBox(storagePrice)}/>
                    <div className="adds-content">
                        <h2>Larger storage</h2>
                        <p>Extra 1TB of cloud save</p>
                    </div>
                    <p>+${storagePrice}/{durationVal || 'Month'}</p>
                </div>
                <div className="option" style={{backgroundColor: customizableCheckbox ? 'beige' : ''}}>
                    <input type="checkbox" id="customizable" checked={customizableCheckbox}
                           onChange={() => handleCustomizableCheckedBox(customizablePrice)}/>
                    <div className="adds-content">
                        <h2>Customizable Profile</h2>
                        <p>Custom theme on your profile</p>
                    </div>
                    <p>+${customizablePrice}/{durationVal || 'Month'}</p>
                </div>
            </div>
            <div className="btn-container">
                <Link to=".." relative="path" className="go-back-link">Go Back</Link>
                <Link className="link" id="link" to="/plan/adds/summary" type="submit">Next Step</Link>
            </div>
        </div>
    );
}

export default AddsComponent;