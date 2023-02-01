import user from '../assets/user.png'
import ckech from '../assets/check.png'
import clsx from 'clsx';
import { Modal } from './Modal';

interface QuestionCardProps {
  description: string;
  read: boolean;
}

export function QuestionCard({ description, read = false }: QuestionCardProps) {
  return (
    <div className={clsx("w-full h-32 bg-Light_blue rounded-r-lg rounded-bl-lg p-6 mt-2 mb-2", {
      "bg-grey bg-opacity-10": read === true,
    })}>
      <div className='flex items-center gap-4'>
        <div className='w-12 h-12 bg-blue-500 flex items-center justify-center rounded-full'><img src={user} /></div>
        <div className='text-black_blue'>{description}</div>
      </div>

      <div>
        {read === true ?
          <div className='flex items-center justify-end gap-2 mt-3'><img src={ckech} /><span>Pergunta lida</span></div> 
        : <div className='flex items-center justify-end gap-6  mt-3'>
            <button className='flex items-center gap-2'>
              <img src={ckech}/>Marcar como lida
            </button>
            <Modal/>
          </div> 
      }
      </div>
    </div>
  )
}