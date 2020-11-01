import styled from 'styled-components';
import { Layout } from 'antd';
import { MENU_NAVIGATION_WIDTH } from '../components/NavigationMenu/types';
import { Colors } from './colors';

export const Content = styled(Layout.Content)`
	background-color: ${Colors.gray};
	margin-left: ${MENU_NAVIGATION_WIDTH}px;
`;
