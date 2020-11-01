import React, { FC, useCallback, useMemo } from 'react';
import { Layout, Menu } from 'antd';
import { UnorderedListOutlined, UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { BranchesOutlined, SettingOutlined } from '@ant-design/icons/lib';
import { MENU_NAVIGATION_WIDTH, MenuType } from './types';
import { Routes as R } from '../../constants';
import { useHistory } from 'react-router';
import { AvatarBlock, MenuItem, TitleBlock } from './styles';
import { UserInfo } from '../UserInfo';
import { PoppinsSpan } from '../../shared/PoppinsText';
import { AppTitle } from '../AppTitle';

const {Sider} = Layout;

const iconStyle = {
	fontSize: '1.3rem'
}

type navType = {
	name: string,
	key: MenuType,
	icon: React.ReactNode,
	onClick: () => void;
}

export const NavigationMenu: FC = () => {

	const history = useHistory();

	const handleClick = useCallback((type: MenuType) => {
		let pathName: string = R.ROOT;
		if (type === MenuType.PROFILE) {
			pathName = R.PROFILE;
		}
		if (type === MenuType.ISSUES) {
			pathName = R.ISSUES;
		}
		if (type === MenuType.PULL_REQUESTS) {
			pathName = R.PULL_REQUESTS;
		}
		if (type === MenuType.SETTINGS) {
			pathName = R.SETTING;
		}
		history.push(pathName);
	}, [history])

	const navItems: navType[] = useMemo(() =>
		[
			{
				name: 'Profile',
				key: MenuType.PROFILE,
				icon: <UserOutlined style={iconStyle}/>,
				onClick: () => handleClick(MenuType.PROFILE),
			},
			{
				name: 'Issues',
				key: MenuType.ISSUES,
				icon: <UnorderedListOutlined style={iconStyle}/>,
				onClick: () => handleClick(MenuType.ISSUES),
			},
			{
				name: 'Pull requests',
				key: MenuType.PULL_REQUESTS,
				icon: <BranchesOutlined style={iconStyle}/>,
				onClick: () => handleClick(MenuType.PULL_REQUESTS),
			},
			{
				name: 'Settings',
				key: MenuType.SETTINGS,
				icon: <SettingOutlined style={iconStyle}/>,
				onClick: () => handleClick(MenuType.SETTINGS),
			}
		], [handleClick])


	return (
		<Sider width={MENU_NAVIGATION_WIDTH} theme="light">
			<TitleBlock>
				<AppTitle/>
			</TitleBlock>

			<AvatarBlock>
				<UserInfo/>
			</AvatarBlock>

			<Menu
				mode="inline"
				defaultSelectedKeys={[MenuType.PROFILE]}
			>

				{
					navItems.map(value =>
						<MenuItem key={value.key} icon={value.icon} onClick={value.onClick}>
							<PoppinsSpan>{value.name}</PoppinsSpan>
						</MenuItem>
					)
				}

			</Menu>
		</Sider>

	);

}
