import { ColumnType } from 'antd/lib/table';
import { RepositoryFile } from '../../api/repository';
import React from 'react';
import { FileTwoTone, FolderTwoTone } from '@ant-design/icons';

type RenderColumnFunction = Required<ColumnType<RepositoryFile>>['render'];

/**
 * Renderers for RepositoryPage Files table
 */
export const renderIsBinary: RenderColumnFunction = (_, file) => (
    file.object.isBinary ? <span>binary</span> : <span>non-binary</span>
);

export const renderByteSize: RenderColumnFunction = (_, file) => (
    file.object.byteSize ?? '-'
);

export const renderType: RenderColumnFunction = (_, obj) => (
    obj.type === 'blob' ? <FileTwoTone/> : <FolderTwoTone/>
);
