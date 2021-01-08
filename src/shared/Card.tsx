import styled from 'styled-components';
import { Card } from 'antd';

export const RepositoryPreviewCard = styled(Card)`
  margin-top: 1rem;
  cursor: pointer;
  width: 350px;

  @media (max-width: 360px) {
    width: 180px;
  }
  
  @media (max-width: 768px) and (min-width: 360px){
    width: 240px;
  }

  @media (max-width: 1024px) and (min-width: 768px) {
    width: 300px;
  }
`;
