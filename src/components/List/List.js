
const List  =({basket}) =>{

   return  <div>
    {basket.map((item) => <div><h3>{item.item} {item.price} </h3></div>)}
    </div>
}

export default List;