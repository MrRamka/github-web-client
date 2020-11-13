import React, { FC } from 'react';
import { Space } from 'antd';

interface IconTextProps {
    icon: React.ReactNode;
    text: string;
}

export const IconText: FC<IconTextProps> = ({icon, text}) => {
    return (
        <Space>
            {icon}
            {text}
        </Space>
    );
}
