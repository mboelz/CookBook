import './App.css';
import Layout from './Layout';
import Router from './pages/Router'

// import background from '../Assets/img/background.jpg'

function App() {
  return (
    <div className="App">
     

      <Layout>
        {/* <div><h1>Hallo Welt</h1></div> */}
        <Router/>
        </Layout>


    </div>
  );
}

export default App;