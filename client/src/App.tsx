import React, { useState, useEffect } from 'react';
import './assets/styles.css';

type Emotion = 'triste' | 'feliz' | 'enojado';

interface DeleteImageState {
  triste: Array<string>;
  enojado: Array<string>;
  feliz: Array<string>;
}

function App() {
  const [emotionState, setEmotionState] = useState<Emotion>('triste');
  const [deleteImageState, setDeleteImageState] = useState<DeleteImageState>({
    triste: [],
    enojado: [],
    feliz: [],
  });
  const [imageNumber, setImageNumber] = useState<number>(1);
  const [initGameState, setInitGameState] = useState<boolean>(false)


  function randomNumber(max: number, min: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const initGame = () => {
    const emotions: Emotion[] = ['triste', 'feliz', 'enojado'];
    setEmotionState(emotions[randomNumber(2, 0)]);
    setInitGameState(true)
  };

  const validateResponse = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.currentTarget.id, emotionState);

    if (event.currentTarget.id === emotionState) {
      return alert('Respuesta correcta.');
    }

    return alert('Respuesta incorrecta.');
  };

  useEffect(() => {
    if(initGameState){
        let number = randomNumber(1, 1); 
        setImageNumber(number);

        let verification = deleteImageState[emotionState].find((value) => 
        value == `/game/${emotionState}/image${imageNumber}.jpeg`
        )

        while(verification != undefined) {
          const emotions: Emotion[] = ['triste', 'feliz', 'enojado'];
          setEmotionState(emotions[randomNumber(2, 0)]);
          number = randomNumber(1,1);
          verification = deleteImageState[emotionState].find((value) => 
            value == `/game/${emotionState}/image${imageNumber}.jpeg`
            )
        }
        

        setDeleteImageState((prevState) => {
          const updatedState = { ...prevState };
          updatedState[emotionState] = [...updatedState[emotionState], `/game/${emotionState}/image${imageNumber}.jpeg`]; 
          return updatedState;
        });


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
            {
              initGameState ?
              <img
                className='w-100 h-100'
                src={`/game/${emotionState}/image${imageNumber}.jpeg`}
              />
              : ""
            }
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col d-flex justify-content-center'>
          <button
            onClick={validateResponse}
            id='feliz'
            className='me-4 rounded-3'
          >
            Feliz
          </button>
          <button
            onClick={validateResponse}
            id='enojado'
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
