import { Header } from "../components/Header";
import ImageHome from '../assets/ImageHome.png';
import { Input } from '../components/Input';
import { Button } from "../components/Button";
import logIn from '../assets/log-in.png';
import users from '../assets/users.png';
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate()

  function handleRegister() {
    navigate("/register");
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
          <Input title="Código da sala"/>
          <div className="mt-4">
            <Button icon={logIn} background="Secondary" title="Entrar na sala"/>
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