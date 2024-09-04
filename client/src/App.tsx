import React, { useState, useEffect } from 'react';
import './assets/styles.css';

type Emotion = 'sorrow' | 'happy' | 'angry';


function App() {
  const [emotionState, setEmotionState] = useState<Emotion>('sorrow');
  const [initGameState, setInitGameState] = useState<boolean>(false)
  const [urlImage, setUrlImageState] = useState<string>("");


  function randomNumber(max: number, min: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const initGame = () => {
    const emotions: Emotion[] = ['sorrow', 'happy', 'angry'];
    setEmotionState(emotions[randomNumber(2, 0)]);
    setInitGameState(true)
  };

  const validateResponse = (event: React.MouseEvent<HTMLButtonElement>) => {

    if (event.currentTarget.id === emotionState) {
      return alert('Respuesta correcta.');
    }

    return alert('Respuesta incorrecta.');
  };

  useEffect(() => {


    if(initGameState){

      (
        async () => {
          const response = await fetch(`https://api.unsplash.com/search/photos?query=${emotionState}`, {
            headers: {
                Authorization: `Client-ID H2Qsf7blkvPZ8BaTW9eQCN2aKRHOB4ZMjhtlH4CU03U`
            }
        });
          let i =  randomNumber(9,1)
   
          
          const data = await response.json()

          
          setUrlImageState(data.results[i].links.download)
          
        }
      )()
    }
  }, [emotionState]); 

  return (
    <main className='container'>
      <div className='text-center mt-4'>
        <button onClick={initGame} className='btn bg-dark text-white rounded-5'>
          Comenzar
        </button>
      </div>
      <div className='row text-center mb-5 mt-5'>
        <div className='col d-flex justify-content-center'>
          <div className='image-example'>
            <img className="w-100 h-100" src={urlImage}  alt="" />
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col d-flex justify-content-center'>
          <button
            onClick={validateResponse}
            id='happy'
            className='me-4 rounded-3'
          >
            Feliz
          </button>
          <button
            onClick={validateResponse}
            id='sorrow'
            className='me-4 rounded-3'
          >
            Enojado
          </button>
          <button onClick={validateResponse} id='triste' className='rounded-3'>
            Triste
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
