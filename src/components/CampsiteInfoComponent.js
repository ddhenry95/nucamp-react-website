import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function RenderComments({comments}) {
        if (comments) {
            return (
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments.map(comment => <div key={comment.id}>{comment.text}<br /> * {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</div>)}
                </div>
            )
        } else {
            return(
                <div />
            )
        }
    }

function RenderCampsite({campsite}) {
        return(
            <div className="col-md-5 m-1">
                <Card onClick={() => this.onCampsiteSelect(campsite)}>
                    <CardImg width="100%" src={campsite.image} alt={campsite.name} />
                    <CardImgOverlay>
                        <CardTitle>{campsite.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
            </div>
        );
    };
    
function CampsiteInfo(props) {
    if (props.campsite) {
        return(
            <div className="row">
                <RenderCampsite campsite={(props.campsite)} />
                <RenderComments comments={props.comments} />
            </div>
        ) 
    };
    
    return <div />;
};

export default CampsiteInfo;