import * as React from 'react';
import Layout from '../layouts/default';

interface Props {
    title: string;
    name: string;
}

export default (props: Props) => {
    return (
        <Layout title='Home'>
            <div>Welcome to the home page</div>
        </Layout>
    );
};
