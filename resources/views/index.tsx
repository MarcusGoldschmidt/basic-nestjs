import * as React from 'react';
import Layout from './layouts/default';

interface Props {
    count: number;
}

export default (props: Props) => {
    return (
        <Layout title='Teste'>
            <div>Hello {props.count}</div>
        </Layout>
    );
};
