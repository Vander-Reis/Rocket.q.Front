import Logo from '../assets/Logo.png'

export function Header() {
  return (
    <div className='mt-9 w-full max-w-6xl m-auto'>
      <img src={Logo} alt="Logo rocket.q" />
    </div>
  )
}