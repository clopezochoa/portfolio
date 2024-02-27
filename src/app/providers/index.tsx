import React, { ReactNode } from 'react'
import Fonts from './fonts'

function Providers({children}: {children: ReactNode}) {
  return (
    <>
      <Fonts>
        {children}
      </Fonts>
    </>
  )
}

export default Providers