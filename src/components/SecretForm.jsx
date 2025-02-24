import React, { useState } from 'react';

function SecretForm() {
  const [inputValue, setInputValue] = useState(''); // För inputvärdet
  const [message, setMessage] = useState(''); // För feedbackmeddelandet

  const handleSubmit = (event) => {
    event.preventDefault(); // Förhindrar reload av sidan vid submit
    const secretMessage = "1337"; // Hemligt meddelande som triggar alerten

    // Kontrollera om användaren har skrivit rätt meddelande
    if (inputValue === secretMessage) {
      
      window.alert("Easter Egg Found!");
    } else {
      setMessage("Try again!"); 
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} // Uppdatera inputvärdet vid ändring
          placeholder="Enter the secret code"
        />
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>} {/* Om message är satt, visa det */}
    </div>
  );
}

export default SecretForm;