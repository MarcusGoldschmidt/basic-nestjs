import * as React from 'react';

interface Props {
    title: string;
    children?: React.ReactNode;
}

export default (props: Props) => {
    return (
        <html>
        <head>
            <title>{props.title}</title>
            <link rel='stylesheet' href='css/default.css'/>
        </head>
        <body>{props.children}</body>
        </html>
    );
};
