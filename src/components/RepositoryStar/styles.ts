import styled from 'styled-components';
import { StarFilled, StarOutlined } from '@ant-design/icons';
import { Colors } from '../../shared';


export const Wrapper = styled.div`
    margin-top: 1.2 rem;
    margin-right: 2 rem;    
`;

export const StyledStarFilled = styled(StarFilled)`
    color: ${Colors.orange_4};
    cursor: pointer;
    font-size: 1.2rem;
`;

export const StyledStarOutlined = styled(StarOutlined)`
    color: ${Colors.orange_4};
    cursor: pointer;
    font-size: 1.2rem;
`
