import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderCard({item}) {
    return (
        <Card>
            <CardImg src={item.image} alt={item.name}/>
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    )
}

function Home(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md m-1">
                    <RenderCard 
                        campsite={props.campsite}
                    />
                </div>
                <div className="col-md m-1">
                    <RenderCard
                        promotion={props.promotion}
                    />
                </div>
                <div className="col-md m-1">
                    <RenderCard
                        partner={props.partner}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;   