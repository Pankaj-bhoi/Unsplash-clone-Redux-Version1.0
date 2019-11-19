import React from 'react';
import '../style/image.css';
import { Row, Col } from 'react-bootstrap';

export default function Image({ image }) {
    return (
        <img className="single-photo" src={image.urls.thumb} alt="" />
    )
}

