import * as Dialog from '@radix-ui/react-dialog';
import trash from '../assets/trash.png';
import { Input } from './Input';
import { Button } from './Button';
import {InputHTMLAttributes} from 'react'

interface ModalProps extends InputHTMLAttributes<HTMLInputElement> {
  deleteQuestion: () => void;
}

export function Modal({deleteQuestion, ...rest}: ModalProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger className='flex items-center gap-2'>
        <img src={trash} />
        Excluir
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='w-screen h-screen bg-black/80 fixed inset-0' />
        <Dialog.Content className='absolute p-10 bg-background rounded-2xl w-full max-w-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <Dialog.Title className='text-2xl font-bold text-black_blue text-center'>
            Excluir pergunta
          </Dialog.Title>
          <Dialog.Description className='text-gray-400 mt-3 text-center'>
            Tem certeza que você deseja excluir esta pergunta?
          </Dialog.Description>

            <div className='w-80 m-auto mt-6'>
              <input {...rest} type="password" placeholder="Insira uma senha" className="w-full h-12 rounded-lg p-4 border-2 border-gray-400 outline-none text-base text-black_blue focus:border-blue-600" />
            </div>
            <div className='flex mt-10 justify-center gap-2 '>
              <Dialog.Close className='w-36'>
                <Button background='Fourth' title="Cancelar" />
              </Dialog.Close>
              <div className='w-36'>
              <button className="w-full p-4 min-w-max h-12 rounded-lg flex items-center justify-center gap-3 bg-red-600 hover:bg-red-500 text-white outline-none" onClick={deleteQuestion} > Sim, excluir</button>
              </div>
            </div>

        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}