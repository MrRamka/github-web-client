import React, { FC, useCallback } from 'react';
import { Result, Button } from 'antd';
import { Routes } from '../../constants';
import { useHistory } from 'react-router';


interface NotFoundPageProps {
    title?: string,
    subTitle?: string
}

/**
 * Page returned on 404 not found
 */
export const NotFoundPage: FC<NotFoundPageProps> = ({title = "404", subTitle = "Sorry, the page you visited does not exist."}) => {
    const history = useHistory();

    const handleBackToRoot = useCallback(() => {
        history.push(Routes.ROOT);
    }, [history])

    return (
        <Result
            status="404"
            title={title}
            subTitle={subTitle}
            extra={<Button type="primary" onClick={handleBackToRoot}>Back Home</Button>}
        />
    )
}
