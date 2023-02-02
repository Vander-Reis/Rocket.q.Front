import { Header } from "../components/Header";
import ImageHome from '../assets/ImageHome.png';
import { Button } from "../components/Button";
import users from '../assets/usersRegister.png';
import { useState, FormEvent } from 'react';
import { api } from "../api";
import { useNavigate } from 'react-router-dom';

export function Register() {
  const [password, setPassword] = useState('');
  const [room, setRoom] = useState()

  const navigate = useNavigate()

  function handleCreateRoom(event: FormEvent) {
    event.preventDefault();
    api.post("/room", {password})
    .then(response => {
      const roomId = (response.data.room)
      navigate(`/room/${roomId}`)
    })
  }

  return (
    <div>
      <Header/>
      <div className="flex items-center gap-40 mt-9 ">
        <div className="flex">
          <img src={ImageHome} className="max-w-lg"/>
        </div>  
        <form className="w-96">
          <h3 className="text-3xl font-bold leading-10 mb-6" >Crie sua própria sala</h3>
          <input type="password" placeholder="Insira uma senha" className="w-full h-12 rounded-lg p-4 border-2 border-gray-400 outline-none text-base text-black_blue focus:border-blue-600" onChange={e => setPassword(e.target.value)}/>
          <div className="mt-4">
          <button className="w-full p-4 min-w-max h-12 rounded-lg flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white outline-none" onClick={handleCreateRoom} ><img src={users}/> Criar sala</button>
          </div>
        </form>
      </div>
    </div>
  )
}