import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div class="topNav">
      
        <input type="text" placeholder="Search for anything..."></input>
      </div>

      <nav class="navbar background">
          <ul class="nav-list">
            <div class="logo">
                <li><a href="Home.asp">Home</a></li>
                <li><a href="news.asp">Collection</a></li>
                <li><a href="contact.asp">Shop</a></li>
                <li><a href="about.asp">Contact</a></li>     
                <li><a href="aasp">About</a></li>               
                </div>
          </ul>
      </nav>
    </div>
  );
}

export default App;
