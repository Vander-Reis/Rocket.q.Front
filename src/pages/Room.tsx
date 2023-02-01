import { Button } from '../components/Button';
import { Header } from "../components/Header";
import users from "../assets/usersRegister.png";
import copy from "../assets/copy.png";
import lock from "../assets/lock.png";
import { QuestionCard } from '../components/QuestionCard';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '../api';
import message from '../assets/message.png'

type QuestionProps = {
  id: string;
  description: string;
  read: boolean;
}[]

export function Room() {
  const [room, setRoom] = useState([])
  const [question, setQuestion] = useState<QuestionProps>([])

  const params = useParams();

  useEffect(() => {
    async function fetchRoom() {
      const response = await api.get(`/room/${params.id}`);
      const questions = await api.get(`/question/${params.id}`)
      setRoom(response.data);
      setQuestion(questions.data);
    }
    fetchRoom();
  }, [])

  return (
    <div className='mb-8'>
      <div className="flex items-center justify-between">
        <Header />
        <div className="flex items-center gap-8">
          <div className="border-1 border-blue-600 h-12 w-32 p-5 flex items-center justify-center rounded-lg text-blue-500 gap-2">
            <span className="font-medium text-base">#323243</span>
            <img src={copy} />
          </div>
          <Button icon={users} background="Secondary" title="Criar sala" />
        </div>
      </div>
      <h3 className="text-black_blue font-bold text-3xl mt-16">Faça sua pergunta</h3>
      <form className="w-full h-32 border-2 border-gray-400 mt-6 mb-4 rounded-r-lg rounded-bl-lg p-4 hover:border-blue-500">
        <textarea placeholder="O que você quer perguntar?" className="w-full outline-none resize-none bg-transparent text-black_blue"></textarea>
        <div className='flex items-center justify-between mb-3'>
          <div className="flex items-center gap-2">
            <img src={lock} />
            <span className="text-gray-400 text-sm">Esta pergunta é anônima</span>
          </div>
          <div className='w-24 h-10'>
            <Button background='Secondary' title='Enviar' />
          </div>
        </div>
      </form>

      {question.length > 0 ?
        question.map(questions => {
          return (<QuestionCard key={questions.id} description={questions.description} read={questions.read}/>)
        })
        : <div className='flex flex-col items-center justify-center mt-12 gap-3'>
          <img src={message} className='w-36 h-32' />
          <p className='text-black_blue font-semibold text-lg'>Nenhuma pergunta por aqui...</p>
          <p className='w-72 text-gray-400 text-sm text-center'>Faça sua primeira pergunta e envie o código dessa sala para outras pessoas!</p>
        </div>}
    </div>
  )
}