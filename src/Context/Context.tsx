import React, { useContext, useState, Dispatch, SetStateAction } from 'react'

interface ContextInterface {
  isProperties: any
  setIsProperties: Dispatch<SetStateAction<any>>
  isSearchComplete: boolean
  setIsSearchComplete: Dispatch<SetStateAction<boolean>>
}

export const APIContext = React.createContext<ContextInterface>(
  {} as ContextInterface
)

export const useGlobalContext = () => {
  return useContext(APIContext)
}

export const APIProvider = ({ children }: any) => {
  const [isProperties, setIsProperties] = useState([] as any)
  const [isSearchComplete, setIsSearchComplete] = useState(false)

  const value = {
    isProperties,
    setIsProperties,
    isSearchComplete,
    setIsSearchComplete
  }

  return <APIContext.Provider value={value}>{children}</APIContext.Provider>
}

export default APIProvider
