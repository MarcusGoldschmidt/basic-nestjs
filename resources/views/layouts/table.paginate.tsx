import * as React from 'react';
import {Pagination} from 'nestjs-typeorm-paginate';

interface Props<T> {
    payload: Pagination<T>;
    tableHeader: React.ReactNode;
    tableBody: React.ReactNode;
}

export default <T extends unknown>(props: Props<T>) => {
    return (
        <div>
            <table>
                <th>
                    {props.tableHeader}
                </th>
                {props.tableBody}
            </table>
            <ul className='pagination'>
                <li className='page-item disabled'>
                    <a href={props.payload.previous}>Anterior</a>
                </li>
                <li className='page-item'>
                    <a href='#'>{props.payload.pageCount}</a>
                </li>
                <li className='page-item'>
                    <a href={props.payload.next}>Próximo</a>
                </li>
            </ul>
        </div>
    );
};
