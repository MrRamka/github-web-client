import React, { FC } from 'react';
import { Language } from '../RepositoryCard/types';
import { Tag } from 'antd';

interface RepositoryLanguageProps {
    languages: Language[],

}
/**
 * RepositoryPage Language List component
 */
export const RepositoryLanguage: FC<RepositoryLanguageProps> = ({languages = []}) => {

    return (
        <>
            {languages.map(value => <Tag  key={value.color + new Date()} style={{margin: '0.2rem'}} color={value.color}>{value.name}</Tag>)}
        </>
    )
}
