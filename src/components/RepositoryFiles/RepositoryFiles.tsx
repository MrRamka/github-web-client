import React, { FC, useCallback, useMemo } from 'react';
import { Table } from 'antd';
import { RepositoryFile } from '../../api/repository';
import { ColumnsType, TableProps } from 'antd/lib/table';
import { renderByteSize, renderIsBinary, renderType } from './column-renderers';

type RepositoryFilesProps = {
    files: RepositoryFile[];
    loading: boolean;
}

type GetRowKey = React.Component<TableProps<RepositoryFile>>['props']['rowKey'];

/**
 * Table for repository files
 */
export const RepositoryFiles: FC<RepositoryFilesProps> = ({files, loading}) => {
    const rowKey: GetRowKey = useCallback((file) => file.oid, [])
    const columns: ColumnsType<RepositoryFile> = useMemo(() => [
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
            render: renderType,
            width: '10%',
            filters: [
                {text: 'File', value: 'blob'},
                {text: 'Directory', value: 'tree'}
            ],
            onFilter: (value, record) => record.type === value,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'isBinary',
            dataIndex: 'isBinary',
            key: 'isBinary',
            render: renderIsBinary,
        },
        {
            title: 'byteSize',
            dataIndex: 'byteSize',
            key: 'byteSize',
            render: renderByteSize,
        },

    ] as ColumnsType<RepositoryFile>, []);
    return (
        <Table<RepositoryFile> rowKey={rowKey} columns={columns} pagination={false} dataSource={files}
                               loading={loading} style={{overflow: "scroll"}}/>
    );
}
