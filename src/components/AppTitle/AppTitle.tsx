import React, { FC } from 'react';
import { GithubOutlined } from '@ant-design/icons/lib';
import { Title } from '../NavigationMenu/styles';
import { Colors } from '../../shared';

const iconStyle = {fontSize: '2.5rem', margin: '0.5rem', color: Colors.blue_12};
const titleStyle = {color: Colors.blue_12};

/**
 * Project title component
 */
export const AppTitle: FC = () => {
    return (
        <>
            <GithubOutlined style={iconStyle}/>
            <Title level={4} style={titleStyle}>Github Web Client</Title>
        </>
    )
}
