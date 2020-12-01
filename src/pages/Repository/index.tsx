import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft,FiChevronRight } from 'react-icons/fi'
import api from '../../services/api';

import logoImg from '../../assets/Logo.svg';
import {Header, RepositoryInfo, Issues} from './styles';

interface RepositoryParams {
    repository: string;
}

interface Repository {
    full_name: string;
    description: string;
    startrgazers_count: number;
    forks_count: number;
    open_issues_count: number;
    owner: {
      login: string;
      avatar_url: string;
      
    };
  }
  interface Issue{
      title: string;
      html_url: string;
      id: number;
      user: {
          login: string;
      }
  }

const Repository: React.FC = () => {
    const [repository, setRepository] = useState<Repository | null>(null);
    const [issues, setIssues] = useState<Issue[]>([]);
    const { params} = useRouteMatch<RepositoryParams>()
    useEffect(() => {
       // api.get(`repos/${params.repository}`).then((response) => {
        //});

        async function loaData(): Promise<void> {
            const repository = await api.get(`repos/${params.repository}`).then((response) => {
                setRepository(response.data)
            });

            const issues = await api.get(`repos/${params.repository}/issues`).then((response) => {
                setIssues(response.data)
            });
                
        }
        loaData();
    }, [params.repository]);
    return (
        <>
        <Header>
            <img src={logoImg} alt="logo" />
            
            <Link to="/">
                <FiChevronLeft size={16}/>
                voltar

            </Link>

        </Header>

        {repository && (
            <RepositoryInfo>
            <header>
                <img src={repository.owner.avatar_url} alt="avatar" />
                
         
            
            <div>
                   <strong>{repository.full_name}</strong>
                   <p>{repository.description}</p>
           </div> 
            </header>
                                   
                <ul>
                    <li>
                    <strong>{repository.startrgazers_count}</strong>
                    <span>starts</span>
                
                </li>
               <li>
                    <strong>{repository.forks_count}</strong>
                    <p>starts</p>
                </li>

                <li>
                    <strong>{repository.open_issues_count}</strong>
                    <span>forks</span>
                
                </li>
                <li>
                    <strong>67</strong>
                    <span>Issues</span>
                
                </li>
                
            </ul>

               
        </RepositoryInfo>
        )}
        <Issues>
            {issues.map(issue =>(
                            <a key={issue.id}  href={issue.html_url}>
              
                            <div>
                              <strong>{issue.title}</strong>  
                               <p>{issue.user.login} </p>
                            </div>
                            <FiChevronRight size={20} />
                        </a>
            ))}
        </Issues>

        </>

    )
}
export default Repository;