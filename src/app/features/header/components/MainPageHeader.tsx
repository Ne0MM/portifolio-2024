import React from 'react'
import HeaderNavOption from './HeaderNavOption'

type Props = {}

export default function MainPageHeader({}: Props) {

  const navOptions = ["Sobre", "Tecnologias", "Projetos", "Curriculum"]

  return (
    <header className="flex justify-center w-full bg-primary">

      {/* Wrapper */}
      <div className="w-full max-w-[1200px] flex justify-between">

        {/* Icon */}
        <div>

        </div>

        {/* Nav Options */}
        <nav className='flex'>

          {navOptions.map((element, index) => (
            <HeaderNavOption
              title={element}
              key={index}
            />
          ))}

        </nav>

      </div>

    </header>
  )
}