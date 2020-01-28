import * as React from 'react';
import Layout from '../layouts/default';

interface Props {
    numeroRegistros: number;
    pessoas: Pessoa[];
}

interface Pessoa {
    id: number;
    name: string;
    idade: number;
}

export default (props: Props) => {
    return (
        <Layout title='Home'>
            <div>Welcome to the home page {props.numeroRegistros} Visits</div>

            {props.pessoas.map(a => <h1>a.name</h1>)}
        </Layout>
    );
};
