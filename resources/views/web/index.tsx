import * as React from 'react';
import Layout from '../layouts/default';

interface Props {
    count: number;
}

export default (props: Props) => {
    return (
        <Layout title='Home'>
            <div>Welcome to the home page {props.count} Visits</div>
        </Layout>
    );
};
