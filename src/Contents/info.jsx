import {Link} from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

const InfoPage = () => {

    const {handleNumRowStyle, Name, telephone, email, setName, setEmail, setTelephone} = useLocalStorage()

    return (
        <>
            <div className="info-container">
                <div className="header header-mobile">
                    <h1>Personal info</h1>
                    <p>Please provide your name, email address, and phone number.</p>
                </div>
                <section>
                    <div className="form-content">
                        <label>Name</label> <br/>
                        <input type="text" value={Name}
                               onChange={(e) => setName(localStorage.setItem('Name', e.target.value))} required
                               name="name"/> <br/>
                        <label>Email Address</label> <br/>
                        <input type="email" value={email}
                               onChange={(e) => setEmail(localStorage.setItem('email', e.target.value))} required
                               name="email"/> <br/>
                        <label>Telephone Number</label> <br/>
                        <input type="tel" value={telephone}
                               onChange={(e) => setTelephone(localStorage.setItem('Telephone', e.target.value))}
                               required name="telephone" placeholder="e.g +234 92 838 8383"/> <br/>
                    </div>

                    <div className="btn-container">
                        <Link className="link" to={'/plan'} onClick={() => handleNumRowStyle(2)} type="submit">Next
                            Step</Link>
                    </div>
                </section>
            </div>
        </>
    );
}

export default InfoPage;