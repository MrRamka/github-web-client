import { UserNode } from '../../api/search';
import React from 'react';
import { UserCard } from './UserCard';


export const renderUserCard = (item: UserNode) => (
    <UserCard {...item}/>
)
