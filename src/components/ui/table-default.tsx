'use client'

import { useRouter } from 'next/navigation';
import { ButtonIcon } from './button-icon';
import { FiEdit, FiEye, FiTrash } from 'react-icons/fi';
import { FC } from 'react';

type Path = string;

export interface TableColumn {
    id: number | string;
    name: string;
    size?: number;
    path: Path;
    action?: () => void;
    format?: (str: string) => string;
}

export interface TableActions {
    onDelete?: (id: number | string) => void | Promise<void>;
    onEdit?: (id: number | string) => void | Promise<void>;
    onView?: (id: number | string) => void | Promise<void>;
}

export interface PaginationProps {
    total: number;
    limit?: number;
    page: number;
}

interface Props {
    columns: TableColumn[];
    data: any[];
    forwardLink?: (id: number | string) => string;
    actions?: TableActions;
    pagination?: PaginationProps;
}

const getNestedValue = (obj: any, path: Path) => {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
};

const TableRow: FC<{
    item: any;
    columns: TableColumn[];
    forwardLink?: (id: number | string) => string;
    actions?: TableActions;
    router: ReturnType<typeof useRouter>;
}> = ({ item, columns, forwardLink, actions, router }) => {
    return (
        <div
            onClick={() => forwardLink && router.push(forwardLink(item?.id))}
            className={`h-12 w-full flex gap-4 px-4 items-center bg-white ${forwardLink ? 'hover:bg-gray-100 cursor-pointer' : ''} transition-all text-gray-800`}
        >
            {columns.map((column) => {
                const value = getNestedValue(item, column.path);
                const displayValue = typeof value === 'boolean' ? (value ? 'Sim' : 'Não') : value;

                return (
                    <div key={column.id} className={`text-sm font-medium line-clamp-1 text-ellipsis`} style={{ minWidth: column.size, flex: 1 }}>
                        {column.format ? column.format(displayValue) : displayValue}
                    </div>
                );
            })}
            {actions && (
                <div key="actions" className={`flex items-center justify-center gap-1`} style={{ width: 100 }}>
                    {actions.onDelete && (
                        <ButtonIcon
                            small
                            icon={<FiTrash />}
                            onClick={() => {
                                if (confirm('Deseja mesmo remover esse item?')) {
                                    actions.onDelete(item.id);
                                }
                            }}
                        />
                    )}
                    {item.id && actions.onEdit && <ButtonIcon small icon={<FiEdit />} onClick={() => actions.onEdit(item.id)} />}
                    {item.id && actions.onView && <ButtonIcon small icon={<FiEye />} onClick={() => actions.onView(item.id)} />}
                </div>
            )}
        </div>
    );
};

export const TableDefault: FC<Props> = ({ columns, data, forwardLink, actions }) => {
    const router = useRouter();
    
    return (
        <>
            <div className="hidden lg:flex flex-col w-full overflow-auto">
                <header className="h-12 w-fit min-w-full border border-gray-800 bg-gray-800 rounded-t-md flex gap-4 px-4 items-center text-white">
                    {columns.map((column) => (
                        <div key={column.id} className="flex text-sm font-medium" style={{ minWidth: column.size, flex: 1 }}>
                            {column.name}
                        </div>
                    ))}
                    {actions && <div className="flex text-base font-medium items-center justify-center" style={{ width: 100 }}>Ações</div>}
                </header>
                <div className="border border-gray-300 w-fit min-w-full rounded-b-md overflow-hidden">
                    {data.length === 0 && <span className="h-12 w-full flex gap-4 px-4 items-center hover:bg-gray-100 transition-all cursor-pointer text-gray-800">0 resultados</span>}
                    {data.map((item, index) => (
                        <TableRow key={item?.id ?? index} item={item} columns={columns} forwardLink={forwardLink} actions={actions} router={router} />
                    ))}
                </div>
            </div>
            <div className="lg:hidden flex flex-col gap-4 w-full">
                {data.length === 0 && <span className="h-12 w-full flex gap-4 px-4 items-center rounded-md shadow-md bg-white transition-all cursor-pointer text-gray-800">0 resultados</span>}
                {data.map((item) => (
                    <div key={item.id} className="bg-white w-full p-4 shadow-md rounded-md flex flex-col gap-2">
                        {columns.map((column) => {
                            const value = getNestedValue(item, column.path);
                            const displayValue = typeof value === 'boolean' ? (value ? 'Sim' : 'Não') : value;

                            return (
                                <div key={column.id} className="flex items-center gap-2" onClick={() => forwardLink && router.push(forwardLink(item?.id))}>
                                    <span className="text-sm text-gray-600">{column.name}</span>
                                    <div className="text-sm text-gray-800 font-semibold line-clamp-1 text-ellipsis" style={{ flex: 1 }}>
                                        {column.format ? column.format(displayValue) : displayValue}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>
        </>
    );
};
