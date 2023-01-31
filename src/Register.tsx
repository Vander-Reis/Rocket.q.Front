import { Header } from "./components/Header";
import ImageHome from './assets/ImageHome.png';
import { Input } from './components/Input';
import { Button } from "./components/Button";
import users from './assets/usersRegister.png';

export function Register() {
  return (
    <div>
      <Header/>
      <div className="md:flex items-center gap-40 mt-9 ">
        <div className="hidden md:flex">
          <img src={ImageHome} className="max-w-lg"/>
        </div>  
        <form className="w-96">
          <h3 className="text-3xl font-bold leading-10 mb-6" >Crie sua própria sala</h3>
          <Input title="Insira uma senha"/>
          <Button icon={users} background="Secondary" title="Criar sala"/>
        </form>
      </div>
    </div>
  )
}