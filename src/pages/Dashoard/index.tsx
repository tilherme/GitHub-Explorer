import React,{ useState, useEffect, FormEvent } from 'react';
import {FiChevronRight} from 'react-icons/fi';

import { Link } from 'react-router-dom';


import api from '../../services/api'

import logoImg from '../../assets/Logo.svg';

// eslint-disable-next-line @typescript-eslint/no-redeclare
import {Title, Form, Repositories, Error} from './styles'


// eslint-disable-next-line @typescript-eslint/no-redeclare
interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashoard: React.FC = () => {


  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() =>{
    const stpradRepositories = localStorage.getItem('@GitHubExplorer: repositories');
    if(stpradRepositories) {
      return JSON.parse(stpradRepositories);
    } else {
      return [];
    }
    
  });


  useEffect(() => {
  localStorage.setItem('@GitHubExplorer: repositories', JSON.stringify(repositories));
  },[repositories]);
  

 async function handleAddRepository(event: FormEvent<HTMLFormElement>):Promise<void> {
  event.preventDefault();
  if(!newRepo ){
    setInputError('Digite o autor/nome do repositório');
    return;
  }
   try{
    
    const response = await api.get<Repository>(`repos/${newRepo}`)
    const repository = response.data;
    setRepositories([...repositories, repository]);
    setNewRepo('');
    setInputError('')
   } catch (err) {
     setInputError('Erro na busca por esse repositório ')
   }
 }
  
    return (
        <>
        
        <img src={logoImg} alt="Img" />
     
       
          <Title>Explore repositórios no github </Title>
 
        <Form hasError={!!inputError} onSubmit={handleAddRepository}>

          <input 
          value ={newRepo}
          onChange={(e): void => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"/>  
          <button type="submit">Pesquisar</button>
        </Form>
      
          {inputError && <Error> {inputError} </Error>}
        
        <Repositories>
         {repositories.map(repository =>( 
            <Link key={repository.full_name} to={`/repository/${repository.full_name}`}>
                <img 
                src={repository.owner.avatar_url}
                 alt={repository.owner.login} />
                <div>
                  <strong>{repository.full_name}</strong>  
                  <p>{repository.description} </p>
                </div>
                <FiChevronRight size={20} />
            </Link>))}
        </Repositories>
        
        </>
    )
}
export default Dashoard;