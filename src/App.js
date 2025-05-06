import './App.css';
import { useState, useRef } from 'react';
import { MagnifyingGlass } from "@phosphor-icons/react";

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const productContainerRef = useRef(null);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
 
  const handleSearchIconClick = () => {
    setIsSearchVisible(true); // Show the search bar
  };

  const handleClearClick = () => {
    setIsSearchVisible(false); // Hide the search bar
    setSearchQuery(''); // Clear the search input
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value); // Update the search input value
  };

  const scrollLeft = () => {
    productContainerRef.current.scrollBy({
      left: -300, // Adjust the value as needed
      behavior: 'smooth'
    });
  };

  const scrollRight = () => {
    productContainerRef.current.scrollBy({
      left: 300, // Adjust the value as needed
      behavior: 'smooth'
    });
  };


  return (
    <div>
           {/* </div>   */}
      
        <div class="outer">
          <div class="blocks">
            <div className="imgContainer">
              <img className="bowlLogov2"src="logov2.jpg"/>
            </div>
          </div>
          <div class="blocks">
            <ul class="nav-list">
              <div class="logo">
                  <li><a href="Home.asp">Home</a></li>
                  <li><a href="news.asp">Products</a></li>
                  <li><a href="contact.asp">Services</a></li>
                  <li><a href="about.asp">About</a></li>     
                  <li className="long"><a href="aasp">Store Locator</a></li>               
                  </div>  
            </ul>
          </div>

          <div class="blocks2">
            <div className="search-container">
              {!isSearchVisible && (
                <i
                  id="searchIcon"
                  className="ph-duotone ph-magnifying-glass"
                  onClick={handleSearchIconClick}
                ></i>
              )}
              {isSearchVisible && (
                <>
                  <input
                    id="search"
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                  />
                  <i
                    id="clear"
                    className="ph-duotone ph-x"
                    onClick={handleClearClick}
                  ></i>
                </>
              )}
            </div>

            <div className = "iconButtons">
              <i
                id="cartIcon"
                className="ph-duotone ph-basket"
              ></i>
            </div> 
            
            <div class="dropdown">
              <button class="dropbtn">
                <i class="ph-duotone ph-globe"></i>
              </button>
              <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
              </div>
            </div>
                    
          </div>
      </div>

      <div class="hero">
        <div class="hero-content">
        <h1><span>RST</span> HyperDrive</h1>
        <div class="hero-price">
          $499
        </div>
        <p> Features the MicroTrax Solid Coverstock that  
          delivers strong mid-lane control and explosive
          backend motion on medium to heavy oil conditions.
        </p>
        <button>DISCOVER</button>
        </div>
        <div class="hero-img">
          <img src="rstHypers.png" alt="RST" />
        </div>
        <div class="rightsec">
          
          <img src="AICORE.png" alt="core"/>
          <img src="duro.png" alt="core"/>
          <img src="factory.png" alt="core"/>
          <img src="flare.png" alt="core"/>
          <img src="block.png" alt="core"/>
          <img src="coverstock.png" alt="core"/>
        </div>
      </div>

      <div class="containerwrapper">
        <div className = "ballContainer">
          <div className="ball-holder">
            <img
                      src="rstHypers.png"
                      loading="lazy"
                      width="300"
                      alt="rolling Ball"
                      className="ball"
                    />
            </div>
        </div>
      </div>
      
      <div className="featuredContainer">
        <h1 className='featuredHeader'>FEATURED PRODUCTS</h1>
        <div className="featuredProducts">
            <div className="productContainer" ref={productContainerRef}>
              <div className="left">
                <button 
                className="scroll-button left" onClick={scrollLeft}>
                <i class="ph-bold ph-caret-left"></i>
              </button>
              </div>
            
              <div className="productName">
                <img 
                src="equinox.png"
                width="250"
                alt="bow"
                className="balls" /* Add the class name here */
                />
                <div className="text">Storm Equinox</div>
                <button class= "learnMore">Learn More</button>
              </div>
              <div className="productName">
                <img 
                src="iqtourAi.png"
                width="250"
                alt="bow"
                className="balls" /* Add the class name here */
                />
                <div className="text">iQ Tour AI</div>
                <button class= "learnMore">Learn More</button>
              </div>
              <div className="productName">
                <img 
                src="opIdol.png"
                width="250"
                alt="bow"
                className="balls" /* Add the class name here */
                />
                <div className="text">Roto Grip Optimum Idol</div>
                <button class= "learnMore">Learn More</button>
              </div>
              <div className="productName">
                <img 
                src="ionMax.png"
                width="250"
                alt="bow"
                className="balls" /* Add the class name here */
                />
                <div className="text">Storm ION Max</div>
                <button class= "learnMore">Learn More</button>
              </div>
              <div className="productName">
                <img 
                src="attentions2.png"
                width="250"
                alt="bow"
                className="balls" /* Add the class name here */
                />
                <div className="text">Roto Grip Attention Star S2</div>
                <button class= "learnMore">Learn More</button>
              </div>
              <div className="productName">
                <img 
                src="roadwarrior.png"
                width="250"
                alt="bow"
                className="balls" /* Add the class name here */
                />
                <div className="text">Storm Road Warrior</div>
                <button class= "learnMore">Learn More</button>
              </div>
              <div className="productName">
                <img 
                src="phazeAI.png"
                width="250"
                alt="bow"
                className="balls" /* Add the class name here */
                />
                <div className="text">Storm Phaze AI</div>
                <button class= "learnMore">Learn More</button>
              </div>
              <div className="right">
                <button 
                  className="scroll-button right" onClick={scrollRight}>
                  <i class="ph-bold ph-caret-right"></i>
              </button>
              </div>
            </div>
          </div>  
      </div>

      <div className="categoriesContainer">
        <h1 className='categories'>SHOP BY CATEGORIES</h1>
        <div className="grid-container">
          <div className="box1" style={{ gridArea: 'box-1' }}>
            <div className="box1-content">
              Bowling Balls
              <div className="box1-shop">
                Shop All ➤
                </div>
              </div>
          </div>
          <div className="box2" style={{ gridArea: 'box-2' }}>
          <div className="box1-content">
              Bowling Shoes
              <div className="box1-shop">
                Shop All ➤
                </div>
              </div>
          </div>
          <div className="box4" style={{ gridArea: 'box-4' }}>
          <div className="box1-content">
              Accessories
              <div className="box1-shop">
                Shop All ➤
                </div>
              </div>
          </div>
          <div className="box5" style={{ gridArea: 'box-5' }}>
          <div className="box1-content">
              Apparel
              <div className="box1-shop">
                Shop All ➤
                </div>
              </div>
          </div>
        </div>
      </div>

    </div>
    
  );
}

export default App;
