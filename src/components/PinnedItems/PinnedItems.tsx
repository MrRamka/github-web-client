import React, { FC } from 'react';
import { RepositoryNode } from '../../api/search';
import { PinnedItemsWrapper } from './styles';
import { RepositoryList } from '../RepositoryList';
import { Typography} from 'antd';

type PinnedItemsProps = {
    pinnedItems: RepositoryNode[];
    loading: boolean;
}

const {Text} = Typography;

export const PinnedItems: FC<PinnedItemsProps> = ({pinnedItems, loading}) => {


    return (
        <PinnedItemsWrapper>
            <Text type="secondary">Pinned Repositories</Text>
            <RepositoryList data={pinnedItems} loading={loading} pinnedCard={true}/>
        </PinnedItemsWrapper>
    );
}
