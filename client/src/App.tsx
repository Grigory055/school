import { useEffect, useState } from 'react'
import './App.css'
import { Button } from '@mui/material'

interface IInputs {
  question: string;
  answer1: string;
  answer2: string;
  answer3: string;
}

const question1: IInputs = {
  question: 'Что должен знать фронтенд разработчик?',
  answer1: 'HTML, CSS и JS',
  answer2: 'Инженерную графику',
  answer3: 'Математику'
}

const question2: IInputs = {
  question: 'Где силиконовая долина',
  answer1: 'Россия',
  answer2: 'Китай',
  answer3: 'Силиконовая долина'
}

const question3: IInputs = {
  question: 'Что такое осень',
  answer1: 'Это небо',
  answer2: 'Это звёзды',
  answer3: 'Это CSS'
}

function App() {

  const [time, setTime] = useState<any>(30)
  const [inputs, setInputs] = useState('')
  const [status, setStatus] = useState<string>('1');

  useEffect((): void => {
    const timer = setTimeout((): void => {
      setTime((prevTime) => prevTime - 1);
    }, 1000)
    if (time === 0) {
      clearTimeout(timer)
      setTime(() => 'время вышло')
    }
  }, [time])

  const formHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.name.includes('check') ?
      setInputs((pre) => ({ ...pre, [e.target.name]: e.target.checked }))
      :
      setInputs((pre) => ({ ...pre, [e.target.name]: e.target.value }))
  }

  const handlerAnswer = () => {
    setInputs(() => '')
    setStatus(() => '2')
    
    setTime(() => 30)
  }

  const handlerAnswer2 = () => {
    setInputs(() => '')
    setStatus(() => '3')
    setTime(() => 30)
  }

  return (
    <>
    <div style={{ display: 'flex'}}>
      <div>
        <span style={{ fontWeight: '700', fontSize: '60px'}}>Тестирование</span>
        <span style={{ marginLeft: '20px', border: '1px solid white', padding: '10px', borderRadius: '9px'}}>Timer: {time}</span>
        
      </div>
    </div>
    {(() => {
    switch (status) {
      case '1':
        return (
<div>
  <div style={{ display: 'flex'}}>
    <div style={{ width: '70px', height: '15px', backgroundColor: 'red', marginLeft: '10px', border: '2px solid green'}}></div>
    <div style={{ width: '70px', height: '15px', backgroundColor: 'white', marginLeft: '10px', border: '2px solid green'}}></div>
    <div style={{ width: '70px', height: '15px', backgroundColor: 'white', marginLeft: '10px', border: '2px solid green'}}></div>
  </div>
      
      <h3>{question1.question}</h3>
      <label>
        
      </label>
      
        <form style={{ display: 'flex', flexDirection: 'column'}}>
          <label>
            <input style={{ color: 'red'}} onChange={formHandler} name='check1' type="radio" value="1" />{question1.answer1}
          </label>
          <label>
            <input onChange={formHandler} name='check1' type="radio" value="2" />{question1.answer2}
          </label>
          <label>
            <input onChange={formHandler} name='check1' type="radio" value="3" />{question1.answer3}
          </label>
          <Button onClick={() => handlerAnswer()} sx={{ width: '150px', marginTop: '20px'}} variant="contained" color="error">
            Ответить
          </Button>
        </form>
      
    </div>
        );
        case '2':
        return (
<div>
<div style={{ display: 'flex'}}>
    <div style={{ width: '70px', height: '15px', backgroundColor: 'white', marginLeft: '10px', border: '2px solid green'}}></div>
    <div style={{ width: '70px', height: '15px', backgroundColor: 'red', marginLeft: '10px', border: '2px solid green'}}></div>
    <div style={{ width: '70px', height: '15px', backgroundColor: 'white', marginLeft: '10px', border: '2px solid green'}}></div>
  </div>
      <h3>{question2.question}</h3>
      <label>
        
      </label>
      
        <form style={{ display: 'flex', flexDirection: 'column'}}>
          <label>
            <input style={{ color: 'red'}} onChange={formHandler} name='check1' type="radio" value="1" />{question2.answer1}
          </label>
          <label>
            <input onChange={formHandler} name='check1' type="radio" value="2" />{question2.answer2}
          </label>
          <label>
            <input onChange={formHandler} name='check1' type="radio" value="3" />{question2.answer3}
          </label>
          <Button onClick={() => handlerAnswer2()} sx={{ width: '150px', marginTop: '20px'}} variant="contained" color="error">
            Ответить
          </Button>
        </form>
      
    </div>
        );
        case '3':
        return (
<div>
<div style={{ display: 'flex'}}>
    <div style={{ width: '70px', height: '15px', backgroundColor: 'white', marginLeft: '10px', border: '2px solid green'}}></div>
    <div style={{ width: '70px', height: '15px', backgroundColor: 'white', marginLeft: '10px', border: '2px solid green'}}></div>
    <div style={{ width: '70px', height: '15px', backgroundColor: 'red', marginLeft: '10px', border: '2px solid green'}}></div>
  </div>
      <h3>{question3.question}</h3>
      <label>
        
      </label>
      
        <form style={{ display: 'flex', flexDirection: 'column'}}>
          <label>
            <input style={{ color: 'red'}} onChange={formHandler} name='check1' type="radio" value="1" />{question3.answer1}
          </label>
          <label>
            <input onChange={formHandler} name='check1' type="radio" value="2" />{question3.answer2}
          </label>
          <label>
            <input onChange={formHandler} name='check1' type="radio" value="3" />{question3.answer3}
          </label>
          <Button onClick={() => setStatus(() => '1')} sx={{ width: '150px', marginTop: '20px'}} variant="contained" color="error">
            Ответить
          </Button>
        </form>
      
    </div>
        )
    }
    })()}
    
    
      
    </>
  )
}

export default App
