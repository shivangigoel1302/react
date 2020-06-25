import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay,CardText,CardBody,CardTitle } from 'reactstrap';

class DishDetail extends Component{
    constructor(props){
        super(props);
    }
    renderdish(dish)
    {
        if(dish!=null)
        {
            return(
                <div className="col-12 col-md-5 m-1">
                     <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description} </CardText>
                    </CardBody>
                </Card>

                </div>

            );
        }
        else{
            return(<div></div>);
        }
    }
    rendercomment(comments)
    {
        if(comments!=null)
        {
            const dishcomment=comments.map((comment) => {
                return (
                  <div key={comment.id} >
                      <ul className="list-unstyled">
                         <li key={comment.id}>
                            <p>{comment.comment}</p>
                            <p>--{comment.author},{comment.date}</p>
                         </li>
                      </ul>
                  </div>
                );
            });
            return(
               <div className="col-12 col-md-5 m-1">
                   <h3>Comments</h3>
                   {dishcomment}
                   </div>
            );
        }
        else{
            return(<div>lijfc</div>);
        }
    }        
    
    render()
    {
        return(
            <div className="container">
                <div className="row">
                {this.renderdish(this.props.dish)}

                {this.rendercomment(this.props.dish.comments)}
                </div>
            </div>
            
        )
    }
}

export default DishDetail;