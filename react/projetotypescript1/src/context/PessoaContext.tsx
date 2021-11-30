import React, {createContext,useState} from "react"
import { PessoasDTO } from "../model/PessoaDTO"

interface IPessoaContext{
  listPessoas:PessoasDTO['pessoas'];
  setListPessoas:React.Dispatch<React.SetStateAction<PessoasDTO['pessoas']>>
}

const PessoaContext = createContext<IPessoaContext>({} as IPessoaContext);

const PessoaProvider : React.FC<any> = ({children}) =>{
  const [listPessoas,setListPessoas] = useState<PessoasDTO['pessoas']>([])
  return(
    <PessoaContext.Provider value={{listPessoas,setListPessoas}}>
      {children}
    </PessoaContext.Provider>
  )
}

export {PessoaContext, PessoaProvider}