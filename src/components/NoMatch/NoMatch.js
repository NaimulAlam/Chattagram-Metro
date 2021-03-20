import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NoMatch = () => {
    return (
        <Jumbotron className='notFound' >
            <h1 style={{color: 'red'}}>Sorry! 404 Not Found</h1>
            <p>
                <Link to="/"><Button variant="primary">Return Home</Button></Link>
            </p>
        </Jumbotron>
    );
};

export default NoMatch;