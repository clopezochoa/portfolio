import React, { ReactNode } from 'react'
import Fonts from './fonts'
import { IsClientCtxProvider } from './cleint'

function Providers({children}: {children: ReactNode}) {
  return (
    <>
      <IsClientCtxProvider>
        <Fonts>
          {children}
        </Fonts>
      </IsClientCtxProvider>
    </>
  )
}

export default Providers