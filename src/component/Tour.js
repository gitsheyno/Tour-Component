import { StyledArticle } from "./styles/StyledArticle"
import { StyledBtn } from "./styles/StyledBtn"
import { StyledDec } from "./styles/StyledDec"
import { useState } from 'react'
const Tour = ({ item, handleDelete }) => {
    const [load, setLoad] = useState(false)
    const handleClick = () => {
        if (load) {
            setLoad(false)
        }
        else if (!load) {
            setLoad(true)
        }
    }
    return (
        <StyledArticle>
            <div>
                <img src={item.image} />
            </div>
            <StyledDec>
                <div>
                    <h4>
                        {item.name}
                    </h4>
                    <p>
                        ${item.price}
                    </p>
                </div>
                <div>
                    {!load &&
                        <p>{`${(item.info).substring(0, 200)} `}<span onClick={() => handleClick()}>ShowMore</span></p>
                    }
                    {load &&
                        <p>{`${(item.info)} `}<span onClick={() => handleClick()}>ShowLess</span></p>
                    }
                </div>
            </StyledDec>
            <div>
                <StyledBtn
                    onClick={()=>handleDelete(item.id)}>
                    Not Intrested
                </StyledBtn>
            </div>
        </StyledArticle>
    )
}

export default Tour
