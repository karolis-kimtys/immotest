import React, { useContext, useState, Dispatch, SetStateAction } from 'react'

interface ContextInterface {
  isSelectedType: string
  setIsSelectedType: Dispatch<SetStateAction<string>>
  isProperties: any
  setIsProperties: Dispatch<SetStateAction<any>>
  isSearchError: boolean
  setIsSearchError: Dispatch<SetStateAction<boolean>>
  isSelectedProperties: any
  setIsSelectedProperties: Dispatch<SetStateAction<any>>
  isLoading: boolean
  setIsLoading: Dispatch<SetStateAction<boolean>>
}

export const APIContext = React.createContext<ContextInterface>(
  {} as ContextInterface
)

export const useGlobalContext = () => {
  return useContext(APIContext)
}

export const APIProvider = ({ children }: any) => {
  const [isSelectedType, setIsSelectedType] = useState('all')
  const [isProperties, setIsProperties] = useState([])
  const [isSearchError, setIsSearchError] = useState(false)
  const [isSelectedProperties, setIsSelectedProperties] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const value = {
    isSelectedType,
    setIsSelectedType,
    isProperties,
    setIsProperties,
    isSearchError,
    setIsSearchError,
    isSelectedProperties,
    setIsSelectedProperties,
    isLoading,
    setIsLoading
  }

  return <APIContext.Provider value={value}>{children}</APIContext.Provider>
}

export default APIProvider
