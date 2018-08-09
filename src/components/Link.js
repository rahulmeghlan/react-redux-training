import React from 'react';
import PropTypes from 'prop-types';

const Link = ({active, children, onClick}) => {
    if (active) {
        return (<span style={{marginRight: '20px'}}>{children}</span>)
    }

    return (
        <a style={{marginRight: '20px'}} href=""
           onClick={e => {
               e.preventDefault();
               onClick()
           }}>{children}</a>
    )
};


Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Link;
