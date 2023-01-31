interface InputProps {
  title: string;
}

export function Input({ title }: InputProps) {
  return (
    <input type="text" className="w-full h-12 rounded-lg p-4 border-2 border-gray-400 outline-none text-base text-black_blue focus:border-blue-600" placeholder={title}/>
  )
}