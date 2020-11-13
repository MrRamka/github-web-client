import React, { FC } from 'react';
import { Language } from '../RepositoryCard/types';
import { Tag } from 'antd';

interface RepositoryLanguageProps {
    languages: Language[],

}

export const RepositoryLanguage: FC<RepositoryLanguageProps> = ({languages}) => {

    return (
        <>
            {languages.map(value => <Tag style={{margin: '0.2rem'}} color={value.color}>{value.name}</Tag>)}
        </>
    )
}
