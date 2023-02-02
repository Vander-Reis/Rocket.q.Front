import { Button } from '../components/Button';
import { Header } from "../components/Header";
import users from "../assets/usersRegister.png";
import copy from "../assets/copy.png";
import lock from "../assets/lock.png";
import { QuestionCard } from '../components/QuestionCard';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState, FormEvent } from 'react';
import { api } from '../api';
import message from '../assets/message.png'

type QuestionProps = {
  id: string;
  description: string;
  read: boolean;
}[]

type RoomProps = {
  id: string;
  room: string;
  password: string;
}[]

export function Room() {
  const [room, setRoom] = useState<RoomProps>([])
  const [question, setQuestion] = useState<QuestionProps>([])
  const [questionInput, setQuestionInput] = useState('');
  const [password, setQuestionPassword] = useState('');

  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  useEffect(() => {
    async function fetchRoom() {
      const response = await api.get(`/room/${params.id}`);
      const questions = await api.get(`/question/${params.id}`)
      setRoom(response.data);
      setQuestion(questions.data);
    }
    fetchRoom();
  }, [handleCrateQuestion,handleCheckQuestion])

  function handleCrateQuestion(event: FormEvent) {
    event.preventDefault()
    api.post(`question/${room[0].id}`, {description: questionInput})
    .then(response => {
      console.log(response.data)
    })
    setQuestionInput('');
  }

  async function handleCheckQuestion(id: string) {
    await api.patch(`/question/${id}`);
  }

  async function handleDeleteQuestion(id: string) {
    if(password != room[0].password) {
      alert('Senha incorreta!')
    }else {
      await api.delete(`/question/${id}`);
    }
  }
  
  return (
    <div className='mb-8'>
      <div className="flex items-center justify-between">
        <Header />
        <div className="flex items-center gap-8">
          <div className="border-1 border-blue-600 h-12 w-32 p-5 flex items-center justify-center rounded-lg text-blue-500 gap-2">
              {room.length > 0 ? <span className="font-medium text-base">#{room[0].room}</span> : null}
            <img src={copy} />
          </div>
          <Button handle={handleBack} icon={users} background="Secondary" title="Criar sala" />
        </div>
      </div>
      <h3 className="text-black_blue font-bold text-3xl mt-16">Faça sua pergunta</h3>
      <form className="w-full h-32 border-2 border-gray-400 mt-6 mb-4 rounded-r-lg rounded-bl-lg p-4 hover:border-blue-500">
        <textarea value={questionInput} onChange={e => setQuestionInput(e.target.value)} placeholder="O que você quer perguntar?" className="w-full outline-none resize-none bg-transparent text-black_blue"></textarea>
        <div className='flex items-center justify-between mb-3'>
          <div className="flex items-center gap-2">
            <img src={lock} />
            <span className="text-gray-400 text-sm">Esta pergunta é anônima</span>
          </div>
          <div className='w-24 h-10'>
          <button className="w-full p-4 min-w-max h-12 rounded-lg flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white outline-none" onClick={handleCrateQuestion} > Enviar</button>
          </div>
        </div>
      </form>

      {question.length > 0 ?
        question.map(questions => {
          return (<QuestionCard onChange={e => setQuestionPassword(e.target.value)} questionDelete={() => handleDeleteQuestion(questions.id)}  checkQuestion={() => handleCheckQuestion(questions.id)} key={questions.id} description={questions.description} read={questions.read}/>)
        })
        : <div className='flex flex-col items-center justify-center mt-12 gap-3'>
          <img src={message} className='w-36 h-32' />
          <p className='text-black_blue font-semibold text-lg'>Nenhuma pergunta por aqui...</p>
          <p className='w-72 text-gray-400 text-sm text-center'>Faça sua primeira pergunta e envie o código dessa sala para outras pessoas!</p>
        </div>}
    </div>
  )
}