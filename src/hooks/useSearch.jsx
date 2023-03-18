import { useEffect, useState } from 'react'

const useSearch = (param) => {
  const [term, setTerm] = useState('')
  console.log(param)

  useEffect(() => {
    if (param) return setTerm(param)
    setTerm('')
  }, [param])
  return { term, setTerm }
}

export default useSearch
