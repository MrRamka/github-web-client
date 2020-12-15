import React, { FC } from 'react';
import { Card } from 'antd';
import { Repository } from '../../api/repository';
import { formatDate } from '../../helpers/formatDate';
import { RepositoryLanguage } from '../RepositoryLanguage';

type RepositoryDescriptionProps = {
    info: Repository;
    loading: boolean;
}

export const RepositoryDescription: FC<RepositoryDescriptionProps> = ({info, loading}) => {
    const formatted_date = formatDate(info.repository.createdAt);
    return (
        <Card title="About" bordered={false} style={{width: 300}} loading={loading}>
            <p><i>{info.repository.description}</i></p>
            <p>Created at: <b>{formatted_date}</b></p>
            <p>Disk usage: <b>{info.repository.diskUsage} KB</b></p>
            <RepositoryLanguage languages={info.repository.languages.nodes}/>
        </Card>
    );
}
