import * as Dialog from '@radix-ui/react-dialog';
import trash from '../assets/trash.png';
import { Input } from './Input';
import { Button } from './Button';

export function Modal() {
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

          <form>
            <div className='w-80 m-auto mt-6'>
              <Input title='Digite sua senha' />
            </div>
            <div className='flex mt-10 justify-center gap-2 '>
              <Dialog.Close className='w-36'>
                <Button background='Fourth' title="Cancelar" />
              </Dialog.Close>
              <div className='w-36'>
                <Button background='Tertiary' title='Sim, excluir' />
              </div>
            </div>
          </form>

        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}