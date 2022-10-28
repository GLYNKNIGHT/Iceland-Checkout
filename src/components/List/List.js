
const List  =({basket}) =>{

   return  <div className="basket_list">
    {basket.map((item) => <div><h3>{item.item} {item.price} </h3></div>)}
    </div>
}

export default List;