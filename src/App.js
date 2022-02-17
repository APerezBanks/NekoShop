import React, { useEffect, useState } from 'react';
import './App.css';
import CatList from './components/CatList';
import Basket from './components/Basket';

const App = () => {
  const [basket, setBasket] = useState();
  const [cats, setCats] = useState();
  const [error, setError] = useState({
    error: false,
    message: ''
  });

  const collectCats = async () => {
    try {
      const response = await fetch ("https://api.thecatapi.com/v1/images/search?limit=10")
      console.log(response)

    if (response.status !== 200) {
      throw new Error ("Google Dinosaur Game Here")

    }

    const data = await response.json()
    console.log(data)
    setCats(data)
    console.log(cats)
    }

    catch(error){
      setError({error: true, message: error.message});
      console.log(error)
    }
     

  }

  // this is where the pictures come from bellow //

  useEffect(() => {
    collectCats();
    console.log("nooooooo!!")
  }, [])

  if (error.error){
    return <h1>you messed up stop touching things: {error.message} </h1>
  }
  if (!cats){
    return <h1>loading cats.....</h1>
  }

  const addHandler  = (cats) => {
    setBasket([...basket, cats]);
  };

    return (
      <div>
          <h1>Neko Shop</h1>
          <img src='' alt='' className='Basket' />
          <Basket />
          <CatList cats={cats} />
      </div>
    );
}

export default App;
