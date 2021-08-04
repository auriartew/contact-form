import './App.css';
import React, {useState, useEffect} from 'react';

function App() {

  const [formData, setFormData] = useState({});
  const [location, setLocation] = useState(0);

  useEffect(()=> {

  },[])

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleNext = (e) => {
    e.preventDefault();
    setLocation(1);
  }

  const handleBack = (e) => {
    e.preventDefault();
    setLocation(location - 1);
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(JSON.stringify(formData))
    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formData)
    })

    const body = await response.text();
    console.log(body);
    
  }

  return (
    <div className="App">
      <div className="form-container">
        <div className="form-box">
        <h1>Contact Us</h1>
          <form>
            <div className="input-container">
              {location === 0 && (<>
                <div className="row">
                  <label for="firstname">First Name:</label>
                  <input name="firstname" 
                          type="text"
                          onChange={e => handleChange(e)}
                          value={formData["firstname"]}/>
                </div>
                <div className="row">
                  <label for="lastname">Last Name:</label>
                  <input name="lastname"
                          type="text"
                          onChange={e => handleChange(e)}
                          value={formData["lastname"]} />
                </div>
                <div className="row">
                  <label for="email">Email:</label>
                  <input name="email" 
                          type="email"
                          onChange={e => handleChange(e)}
                          value={formData["email"]}/>
                </div></>)}
              {location === 1 && (<>
                <div className="row">
                  <label for="country">Country of Origin:</label>
                  <input name="country" 
                          type="text"
                          onChange={e => handleChange(e)}
                          value={formData["country"]}/>
                </div>
                <div className="row">
                  <label for="number">Phone Number:</label>
                  <input name="number"
                          type="text"
                          onChange={e => handleChange(e)}
                          value={formData["number"]} />
                </div>
                <div className="row">
                  <label for="comments">Comments:</label>
                  <input name="comments" 
                          type="comments"
                          onChange={e => handleChange(e)}
                          value={formData["comments"]}/>
                </div>
              </>)}
            </div>
            <div className="button-container">
              {location !== 0 && (<button className="back"
                  onClick={e => handleBack(e)}>Back</button>)}
              <button className="next"
                onClick={e => handleNext(e)}>Next</button>
              {location === 1 && (
                <button className="next" onClick={e => handleSubmit(e)}>
                  Submit
                </button>
              )}
            </div>
            
          </form>
        </div>
        
      </div>
      
      
    </div>
  );
}

export default App;
