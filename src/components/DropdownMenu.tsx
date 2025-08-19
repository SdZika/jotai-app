import { useState } from 'react'

export const DropdownMenu = ({navItems}: {navItems: string[]}) => {

  const [ isOpen, setIsOpen ] = useState<boolean>(false)

  return (
    <div>
          <h1>DropdownMenu</h1>
          <button onClick={() => setIsOpen(!isOpen)}>Menu</button>
          { isOpen && (
                    navItems.map((item, index) => (
                              <li key={index}>{item}</li>
                    ))
          )}
    </div>
    
  )
}
