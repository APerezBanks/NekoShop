import React from "react";







const Basket = ({cats, item, index}) => {



    return (
        <div>
            <p>hello this is the basket</p>
        </div>
    )
}
    


    // const handlerRemoveCat = () => {
    //     setBasket([...basket, cats] -1);
    // }

//     return (    
//     basket.map((item, index))(
//     <div>
//         <h2>Cats in your basket</h2>
//         <div>
//             <p>{Basket}</p>
//             <div key={basket.id}>
//                 {basket.text}
//             </div>
//             <button className="removeCat" onClick={() => handlerRemoveCat(item.id)}>Remove Cat</button>
//             {basket.length === 0 && <div>No kitties in your basket</div>}
//         </div>
//     </div>
//     ))
// }

  //   const Basket = ({basket}) => {
  //     return (
  //       <div>
  //         {basket[0]}
  //       </div>
  //     )
  // }



export default Basket