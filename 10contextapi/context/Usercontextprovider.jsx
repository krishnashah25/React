import React, { useState } from 'react'
import Usercontext from './Usercontext'

const Usercontextprovider = (children) => {

    const [User, setUser] = useState(null)

    return (
        <>
        <Usercontext.Provider>
            {children}
        </Usercontext.Provider>
        </>
    )
}

export default Usercontextprovider