import styled from 'styled-components';
import { Input} from 'antd';

export const Search = styled(Input.Search)`
  width: 50%;
  height: 40px;
  
  @media(max-width: 768px){
    width: 100%;
    height: 30px;
}

  @media (max-width: 1024px) and (min-width: 768px){
    width: 80%;
  }  

`;
