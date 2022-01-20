
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/sidebar';
import "./app.css";
function App() {
  return (
    <div className="App">
     <Topbar/>
      <div className='container'>
        <Sidebar/>
        <div className='others'>other page</div>
        
      </div>
    </div>
  );
}

export default App;
