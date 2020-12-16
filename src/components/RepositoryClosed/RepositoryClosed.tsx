import { useHistory } from 'react-router';
import React, { useCallback } from 'react';
import { Button, Result } from 'antd';

/**
 * Private or archived repository component
 */
export const RepositoryClosed = () => {
    /**
     * History for redirecting
     */
    const history = useHistory();
    /**
     * Handler for redirecting
     */
    const handleClick = useCallback(() => {
        history.goBack()
    }, [history])
    return (
        <Result status="warning" title="This repository is archived or private."
                extra={
                    <Button type="primary" key="console" onClick={handleClick}>
                        Go Back
                    </Button>
                }
        />
    )
}
