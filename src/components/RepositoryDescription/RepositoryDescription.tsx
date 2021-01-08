import React, { FC } from 'react';
import { Card } from 'antd';
import { RepositoryNode } from '../../api/repository';
import { formatDate } from '../../helpers';
import { RepositoryLanguage } from '../RepositoryLanguage';
import { RepositoryStar } from '../RepositoryStar';

type RepositoryDescriptionProps = {
    info: RepositoryNode;
    loading: boolean;
}

/**
 * Description component for repository
 */
export const RepositoryDescription: FC<RepositoryDescriptionProps> = ({info, loading}) => {
    const formatted_date = formatDate(info.repository.createdAt);
    return (
        <Card title="About" bordered={false} loading={loading}>
            <p><i>{info.repository.description}</i></p>
            <p>Created at: <b>{formatted_date}</b></p>
            <p>Disk usage: <b>{info.repository.diskUsage} KB</b></p>
            <RepositoryStar
                count={info.repository.stargazerCount}
                hasStarred={info.repository.viewerHasStarred}
                id={info.repository.id}
            />
            <br/>
            <RepositoryLanguage languages={info.repository.languages.nodes}/>
        </Card>
    );
}
