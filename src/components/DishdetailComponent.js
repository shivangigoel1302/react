import React from "react";
import { Card, CardImg, CardImgOverlay,CardText,CardBody,CardTitle,BreadcrumbItem,Breadcrumb } from 'reactstrap';
import {Link} from 'react-router-dom';

    
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
    function Rendercomment({comments})
    {
        if(comments!=null)
        {
           return(
               <div className="col-12 col-md-5 m-1">
                   <h4>comments</h4>
                   <ul className="List-unstyled">
                       {comments.map((comment)=>{
                           return(
                               <li key={comment.id}>
                                   <p>{comment.comment}</p>
                                   <p>--{comment.author},</p>
                               </li>
                           );
                       })}
                   </ul>
               </div>
           );
           
        }
        else{
            return(<div></div>);
        }
    }        
    
    const DishDetail=(props) =>
    {
        return(
            <div className="container">
            <div className="row">
              <Breadcrumb>
                <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
             </Breadcrumb>
             <div className="col-12">
              <h3>{props.dish.name}</h3>
              <hr/>
              </div>
           </div>
            
                <div className="row">
                <Renderdish dish={props.dish}/>

                <Rendercomment comments={props.comments}/>
                </div>
            </div>
            
        )
    }


export default DishDetail;