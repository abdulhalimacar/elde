import { useState } from "react";
import {Container} from "react-bootstrap";
import {Image} from "react-bootstrap";

const Language = ({name, img,options})=>{

    const [showdesc,setShowdesc] = useState(false); //state tanımlama

    const go = ()=>{
        setShowdesc(!showdesc);//showdescin o anki durumunun değilini al dedik
        console.log(showdesc)
    }


    return (
      <Container
        onClick={go}
        className="p-4 rounded-2 h-100 d-flex flex-column align-items-center lang-card"
        style={{ backgroundColor: "peachpuff" }}
      >
        {/* showdesc true değilse bize resmi göster dedik */}
        {!showdesc && (
          <Container className="d-flex flex-column align-items-center">
            <Image className="lang-logo" src={img} width={"75%"}></Image>
            <h3 className="display-6 text-overflow-ellipsis">{name}</h3>
          </Container>
        )}

        {/* showdesc true ise bize yazıyı göster dedik */}
        {showdesc && (
          <ul className="h-100 d-flex flex-column justify-content-center">
            {options.map((item) => (
              <li className="text-start">{item}</li>
            ))}
          </ul>
        )}
      </Container>
    );
};

export default Language;