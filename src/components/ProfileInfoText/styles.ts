import styled from 'styled-components';
import { Colors } from '../../shared';
import { GithubOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import px2vw from '../../helpers/px2vw';

export const InfoWrapper = styled.div`
    
`;

export const Name = styled.p`
    font-size: 4rem;
    margin: 0;    
  
    @media(max-width: 768px) {
      font-size: 1rem;
    }
  
    @media(max-width: 1024px) and (min-width: 768px){
      font-size: ${px2vw(64)};
    } 
`;

export const LoginText = styled.p`
    font-size: 2.5rem;
    color: ${Colors.gray_7};
    margin: 0;
  
    @media(max-width: 768px) {
      font-size: 1rem;
    }

    @media(max-width: 1024px) and (min-width: 768px){
      font-size: ${px2vw(48)};
    }
`;

export const FollowingWrapper = styled.div`
    color: ${Colors.blue_6};
`;

export const FollowersWrapper = styled.div`

`;

export const GithubLinkLogo = styled(GithubOutlined)`
  color: ${Colors.blue_12};
  font-size: 1.1rem;
`;

export const InfoPositionText = styled(Typography.Text)`
  font-size: 1.2rem;
  margin: 0.2rem;

  @media(max-width: 768px) {
    font-size: 1rem;
  }

  @media(max-width: 1024px) and (min-width: 768px){
    font-size: ${px2vw(24)};
  }
`;
