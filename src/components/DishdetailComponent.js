import React from "react";
import { Card, CardImg, CardImgOverlay,CardText,CardBody,CardTitle } from 'reactstrap';


    
    function Renderdish({dish})
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
    function Rendercomment({dish})
    {
        if(dish!=null)
        {
            const dishcomment=dish.comments.map((comment) => {
                return (
                  <div key={comment.id} >
                      <ul className="list-unstyled">
                         <li key={comment.id}>
                            <p>{comment.comment}</p>
                            <p>--{comment.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
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
    
    const DishDetail=(props) =>
    {
        return(
            <div className="container">
                <div className="row">
                <Renderdish dish={props.dish}/>

                <Rendercomment dish={props.dish}/>
                </div>
            </div>
            
        )
    }


export default DishDetail;