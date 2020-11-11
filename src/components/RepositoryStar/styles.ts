import styled from 'styled-components';
import { StarFilled } from '@ant-design/icons';
import { Colors } from '../../shared';


export const Wrapper = styled.div`
    margin-top: 1.2 rem;
    margin-right: 2 rem;    
`;

export const Star = styled(StarFilled)`
    color: ${Colors.orange_4};
    font-size: 1.2rem;
`;
