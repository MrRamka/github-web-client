import styled from 'styled-components';
import { Colors } from '../../shared';
import { GithubOutlined } from '@ant-design/icons/lib';
import { PoppinsText } from '../../shared';
import px2vw from '../../helpers/px2vw';

export const Wrapper = styled.div`
	height: 90vh;
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: space-around;

    @media (max-width: 768px) {
      height: 90vh;
    }
`;

export const GithubLoginLogo = styled(GithubOutlined)`
	font-size: 25rem;
	color: ${Colors.blue_6}
`;

export const LogoWrapper = styled.div`
	width: 40%;
	height: 25rem;
	display: flex;
	justify-content: flex-end;

    @media(max-width: 1024px){
      display: none;
    }
  
`;

export const TextWrapper = styled.div`
	width: 50%;
	height: 25rem;
  
    @media(max-width: 1024px){
      width: 90%;
    }
`;

export const BlueLinkOutline = styled.a`
    color: ${Colors.blue_6};
    background-color: ${Colors.gray_3};
    border: 2px solid ${Colors.blue_6};
    border-radius: 10px;
    font-size: ${px2vw(32)};
    font-family: 'Poppins', serif;
    padding: ${px2vw(10)} ${px2vw(32)};
  
    @media (max-width: 1024px) {
      font-size: 18px;
    }
`;

export const WelcomeText = styled(PoppinsText)`
	font-family: 'Poppins', serif;
	color: ${Colors.blue_12};
	font-size: ${px2vw(24)};
	font-weight: bold;
  
    @media (max-width: 1024px) {
      font-size: 18px;
    }
`;

export const ButtonWrapper = styled.div`
	display: flex;
	justify-content: center;
`;

export const InnerDiv = styled.div`
	height: 25rem;
	width: 70%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

    @media(max-width: 1024px){
      width: 90%;
      height: ${px2vw(500)};
    }
`;

export const ViewCodeBlock = styled.div`
	display: flex;
	justify-content: center;
`;

export const GithubViewLogo = styled(GithubOutlined)`
	font-size: 4rem;
	color: ${Colors.blue_12}
`;

export const ViewCode = styled.div`
	display: flex;
	align-items: center;
`;

export const ViewCodeLink = styled.a`
	color: ${Colors.blue_12};
	font-family: 'Poppins', serif;
	font-size: 1.3rem;
	font-weight: bold;
`;
