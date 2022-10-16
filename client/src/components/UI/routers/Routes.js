import { Routes, Route } from 'react-router-dom'
import Banner from "../../pages/Banner/Banner";
import OwnRoom from '../../pages/Own-Room/OwnRoom';
import Room from '../../pages/Room/NewRoom';


const Rotas = () => {
    return(
        <div>
            <Routes>
                <Route exact path='/' element={<Banner/>}/>
                <Route path='/youtube-room/' element={<Room/>}/>
                <Route path="/own-room/" element={<OwnRoom/>}/>
            </Routes>
        </div>
    )
}

export default Rotas;