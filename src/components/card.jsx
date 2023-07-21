import Language from "./language";
import {data} from "../helper/data";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const Card = ()=>{
   
    
    return(
        <Container className="rounded-4 mt-4 p-4" style={{background:"#f48b29"}}>
            <h1 className="my-3" style={{color:"red"}}>Language</h1>
            <Row className="g-3 justify-content-center">
                {data.map((item,index)=> 
                <Col sm={12} md={6} lg={2} key={index}>
                <Language {...item} />
                </Col>
                )}
            </Row>
            
            
        </Container>
    )
};

export default Card;

//hem alttan hem üstten my ile margin verilir ama bunun gözükmesi için üst taşıyıcı container'ın paddingi olması lazım....taşıyıcıya padding verilmezse my gözükmez...
