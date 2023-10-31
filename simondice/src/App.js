import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navbar';
import Footer from './Components/footer';
import Ruleta from './Components/ruleta';


function App() {
  return (
      <div className="app">
      <div className="content">
        <Navbar />
        <Ruleta />
    </div>
      <footer className="footer">
        <Footer />
      </footer>
</div>
  );
}

export default App;
