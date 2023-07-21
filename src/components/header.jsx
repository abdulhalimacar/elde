import {Container} from "react-bootstrap";//react bootstrap containerini import ettik
import {Image} from "react-bootstrap";//image componentini import ettik
import reactLogo from "../assets/logo192.png";//resmi kullanmak için import etmemiz lazım


const Header = () =>{
    return(
        <Container>
            <Image fluid src={reactLogo} width="250px"></Image>
        </Container> //div yerine container kullandık
    );
};

export default Header;

//<Container className="bg-warning" style={{background:"#f48b29"}}> style içerisinde inline styling verdik ve clasname ile de başka bir styling verdik...
