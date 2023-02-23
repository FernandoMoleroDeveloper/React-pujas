import "./Bidder.css"

const Bidder = ({name, addBidder}) => {


    return (
       
        <button onClick={addBidder} className = "bidder">{name} quiere pujar 5€</button>
        
   
    )

}



export default Bidder;