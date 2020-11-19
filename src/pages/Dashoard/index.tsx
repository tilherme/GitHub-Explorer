import React from 'react';
import {FiChevronRight} from 'react-icons/fi';
import logoImg from '../../assets/Logo.svg';

import {Title, Form, Repositories} from './styles'


const Dashoard: React.FC = () => {
    return (
        <>
        <img src={logoImg} alt="Img" />
        <Title>Explore repositórios no github</Title>
        <Form >
          <input placeholder="Digite o nome do repositório"/>  
          <button type="submit">Pesquisar</button>
        </Form>

        <Repositories>
            <a href="teste">
                <img src="https://avatars3.githubusercontent.com/u/47336721?s=400&u=f5cf680a9401e599481e4a7ad60f0047d0a66770&v=4" alt="Guilherme Mateus" />
                <div>
                  <strong>Galaxy</strong>  
                  <p> eae galera da galaxy blz?</p>
                </div>
                <FiChevronRight size={20} />
            </a>
            <a href="teste">
                <img src="https://avatars3.githubusercontent.com/u/47336721?s=400&u=f5cf680a9401e599481e4a7ad60f0047d0a66770&v=4" alt="Guilherme Mateus" />
                <div>
                  <strong>Galaxy</strong>  
                  <p> eae galera da galaxy blz?</p>
                </div>
                <FiChevronRight size={20} />
            </a>
            <a href="teste">
                <img src="https://avatars3.githubusercontent.com/u/47336721?s=400&u=f5cf680a9401e599481e4a7ad60f0047d0a66770&v=4" alt="Guilherme Mateus" />
                <div>
                  <strong>Galaxy</strong>  
                  <p> eae galera da galaxy blz?</p>
                </div>
                <FiChevronRight size={20} />
            </a>
        </Repositories>
        </>
    )
}
export default Dashoard;