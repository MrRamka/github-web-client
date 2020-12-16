import React, { FC, useCallback, useMemo } from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import {
    //BranchesOutlined,
    DatabaseOutlined,
    LogoutOutlined,
    //QuestionCircleOutlined,
    SearchOutlined
} from '@ant-design/icons/lib';
import { MENU_NAVIGATION_WIDTH, MenuType } from './types';
import { Routes as R } from '../../constants';
import { useHistory } from 'react-router';
import { AvatarBlock, MenuItem, TitleBlock } from './styles';
import { UserInfo } from '../UserInfo';
import { PoppinsSpan } from '../../shared/PoppinsText';
import { AppTitle } from '../AppTitle';
import { Colors } from '../../shared';

const {Sider} = Layout;

const iconStyle = {
    fontSize: '1.3rem'
}

type navType = {
    name: React.ReactElement,
    key: MenuType,
    icon: React.ReactNode,
    onClick: () => void;
}

/**
 * Navigation menu component
 * Creates menu by uri
 */
export const NavigationMenu: FC = () => {

    const history = useHistory();

    const urlName = window.location.pathname.split('/')[1];

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
        if (type === MenuType.EXPLORE) {
            pathName = R.EXPLORE;
        }
        if (type === MenuType.REPOSITORIES) {
            pathName = R.REPOSITORIES;
        }
        if (type === MenuType.LOGOUT) {
            pathName = R.LOGOUT
        }
        history.push(pathName);
    }, [history])

    const navItems: navType[] = useMemo(() =>
        [
            {
                name: <PoppinsSpan>Profile</PoppinsSpan>,
                key: MenuType.PROFILE,
                icon: <UserOutlined style={iconStyle}/>,
                onClick: () => handleClick(MenuType.PROFILE),
            },
            /*{
                name: <PoppinsSpan>Issues</PoppinsSpan>,
                key: MenuType.ISSUES,
                icon: <QuestionCircleOutlined style={iconStyle}/>,
                onClick: () => handleClick(MenuType.ISSUES),
            },
            {
                name: <PoppinsSpan>Pull Requests</PoppinsSpan>,
                key: MenuType.PULL_REQUESTS,
                icon: <BranchesOutlined style={iconStyle}/>,
                onClick: () => handleClick(MenuType.PULL_REQUESTS),
            },*/
            {
                name: <PoppinsSpan>Explore</PoppinsSpan>,
                key: MenuType.EXPLORE,
                icon: <SearchOutlined style={iconStyle}/>,
                onClick: () => handleClick(MenuType.EXPLORE),
            },
            {
                name: <PoppinsSpan>Repositories</PoppinsSpan>,
                key: MenuType.REPOSITORIES,
                icon: <DatabaseOutlined style={iconStyle}/>,
                onClick: () => handleClick(MenuType.REPOSITORIES),
            },
            {
                name: <PoppinsSpan style={{color: Colors.red_5}}>Logout</PoppinsSpan>,
                key: MenuType.LOGOUT,
                icon: <LogoutOutlined style={{...iconStyle, color: Colors.red_5}}/>,
                onClick: () => handleClick(MenuType.LOGOUT),
            },
        ], [handleClick])


    const selectedItem = useMemo(
        () => {
            const newUrl = '/' + urlName;
            if (newUrl === R.ROOT || urlName === R.PROFILE) {
                return MenuType.PROFILE;
            }
            /* if (newUrl === R.ISSUES) {
                return MenuType.ISSUES;
            }
            if (newUrl === R.PULL_REQUESTS) {
                return MenuType.PULL_REQUESTS;
            }*/
            if (newUrl === R.REPOSITORIES) {
                return MenuType.REPOSITORIES;
            }
            if (newUrl === R.EXPLORE) {
                return MenuType.EXPLORE;
            }

            return MenuType.PROFILE;
        }, [urlName]
    );

    const handleProfileClick = useCallback(() => {
        history.push(R.PROFILE)
    }, [history]);

    return (
        <Sider width={MENU_NAVIGATION_WIDTH} theme="light">
            <TitleBlock>
                <AppTitle/>
            </TitleBlock>

            <AvatarBlock onClick={handleProfileClick}>
                <UserInfo/>
            </AvatarBlock>
            <Menu
                mode="inline"
                defaultSelectedKeys={[selectedItem]}
            >

                {
                    navItems.map(value =>
                        <MenuItem key={value.key} icon={value.icon} onClick={value.onClick}>
                            {value.name}
                        </MenuItem>
                    )
                }
            </Menu>
        </Sider>

    );

}
