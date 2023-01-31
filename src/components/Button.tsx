import clsx from "clsx";

interface ButtonProps {
  background: 'Primary' | 'Secondary' | 'Tertiary' | 'Fourth';
  icon?: string;
  title: string;
  handle?: () => void;
}

export function Button({ background, icon, title, handle}: ButtonProps) {
  return (
    <button onClick={handle} className={clsx("w-full p-4 min-w-max h-12 rounded-lg flex items-center justify-center gap-3", {
      "border-2 border-blue-500 hover:text-blue-600 text-blue-500": background === "Primary",
      "bg-blue-600 hover:bg-blue-500 text-white": background === "Secondary",
      "bg-red-600 hover:bg-red-500 text-white": background === "Tertiary",
      "bg-gray-400 hover:bg-gray-300 text-gray-500": background === "Fourth",
    })}>
      {icon && 
        <img src={icon}/>
      }
      {title}
    </button>
  )
}