import * as React from 'react';
import Layout from './layouts/default';

interface Props {
    title: string;
    name: string;
}

export default (props: Props) => {
    return (
        <Layout title={props.title}>
            <div>Hello {props.name}</div>
        </Layout>
    );
};
