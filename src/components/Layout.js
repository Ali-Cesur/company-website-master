import React from 'react';
import Container from 'react-bootstrap/Container';

export default (props) => (
    <div style={{position:'relative', width:'100%'}}>
        { props.children }
    </div>
);