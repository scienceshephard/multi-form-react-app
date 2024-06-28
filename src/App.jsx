import {Route, Routes} from 'react-router-dom'
import './App.css'
import InfoPage from './Contents/info'
import Layout from './Layout'
import Plan from './Contents/plan'
import AddsComponent from './Contents/adds'
import SummaryComponent from './Contents/summary'
import ThankYou from './Contents/ThankYouPage'

function App() {

    return (
        <>
            <div className="container">
                <Layout/>
                <Routes>
                    <Route path='*' element={<InfoPage/>}/>
                    {/*<Route path='*' element={<ErrorPage/>}/>*/}
                    <Route path='/plan' element={<Plan/>}/>
                    <Route path='/plan/adds' element={<AddsComponent/>}/>
                    <Route path='/plan/adds/summary' element={<SummaryComponent/>}/>
                    <Route path='/thankyou' element={<ThankYou/>}/>
                </Routes>
            </div>
        </>
    )
}

export default App
