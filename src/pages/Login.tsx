import { Header } from "../components/Header";
import ImageHome from '../assets/ImageHome.png';
import { Button } from "../components/Button";
import logIn from '../assets/log-in.png';
import users from '../assets/users.png';
import { useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";

export function Login() {
  const navigate = useNavigate()
  const [room, setRoom] = useState("")

  function handleRegister() {
    navigate("/register");
  }

  function handleLoginRoom(event: FormEvent) {
    event.preventDefault();
    navigate(`/room/${room}`
    )
  }

  return (
    <div>
      <Header/>
      <div className="flex items-center gap-40 mt-9 ">
        <div className="flex">
          <img src={ImageHome} className="max-w-lg"/>
        </div>  
        <form>
          <h3 className="text-3xl font-bold leading-10 mb-6" >Entre como participante</h3>
          <input type="text" placeholder="Código da sala" className="w-full h-12 rounded-lg p-4 border-2 border-gray-400 outline-none text-base text-black_blue focus:border-blue-600" onChange={e => setRoom(e.target.value)}/>
          <div className="mt-4">
          <button className="w-full p-4 min-w-max h-12 rounded-lg flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white outline-none" onClick={handleLoginRoom} ><img src={logIn}/> Entrar na sala</button>
          </div>

          <div className="flex gap-3 items-center justify-center mt-10">
            <div className="border-1 border-gray-400 w-40"></div>
            <span className="text-gray-400">OU</span>
            <div className="border-1 border-gray-400 w-40"></div>
          </div>

          <h3 className="text-3xl font-bold leading-10 mb-6 w-96 mt-10" >Crie sua própria sala, de forma fácil</h3>

          <Button handle={handleRegister} icon={users} background="Primary" title="Criar sala"/>
          
        </form>
      </div>
    </div>
  )
}