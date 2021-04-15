import logo from './logo.svg';
import './App.css';
import FullName from './Component/Profile/FullName.js'
import Address from './Component/Profile/Address.js'
import ProfilPhoto from './Component/Profile/ProfilPhoto.js'


function App() {
  return (
    <div className="App">
      <ProfilPhoto/>
      <FullName/>
      <Address/>
      
    </div>
  );
}

export default App;
