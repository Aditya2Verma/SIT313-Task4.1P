import './App.css';
import { Routes, Route } from 'react-router-dom';

import Mainpart from './mainsection';

function App() {
  return (
    <div>
      {/* <SearchBar/>   
      <Main_Photo/>
      <Top_section/>
      <CardList />
      <Mid_section />
      <CardList2/>
      <Btm_section/>
      <Mid_section2/>
      <BottomBar/>
      <Footer/> */}
      <Routes>
        <Route path='/' element={<Mainpart/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
