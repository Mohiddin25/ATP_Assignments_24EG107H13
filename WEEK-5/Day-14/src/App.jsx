import './App.css'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import UserList from './components/UserList'
import Counter from './components/Counter';

function App(){
  // state
  
  // return react element
    return(
      <div>
        <NavBar/>
        <div>
          <UserList/>
          {/* <Counter/> */}
        </div>
        <Footer/>

      </div>
    
    )

}

export default App;