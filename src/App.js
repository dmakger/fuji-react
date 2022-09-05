import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import SignInPage from "./pages/SignInPage";

function App() {
  return (
      <BrowserRouter>
        {/*<Header/>*/}
        <Routes>
          <Route path="/signin" element={<SignInPage/>}/>
        </Routes>
      </BrowserRouter>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
