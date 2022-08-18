import React, { useState, useEffect } from 'react';



function App()  {

  const [data, setData] = useState([{}]);

  useEffect(() => {

    fetch('/list', {
      mode: 'no-cors'
    }).then(
      res => res.json()
    ).then(
      data => {

        setData(data);
        console.log(data);

      }
    )

  }, []);

  return (
    <div>
      {(typeof data.list === 'undefined') ? (
        <p>Loading ...</p>
      ) : (
        data.list.map((item, index) => (
          <p key={index}>{item}</p>
        ))
      )}
    </div>
  )
}

export default App;