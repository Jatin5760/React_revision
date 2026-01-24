import React from 'react'
import { createContext } from 'react'

export const HindiKahani = createContext()
function story({children}) {
    let kahani = {
        name:"Magarmach ka dukh",
        storyline:"Ek buddha magamach"
    }
  return (
    <div>
    <HindiKahani.Provider value={kahani}>
        {children}
    </HindiKahani.Provider>
    </div>
  )
}

export default story