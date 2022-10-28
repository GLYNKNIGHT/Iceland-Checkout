import Products from "./product-list"
const List  =({basket}) =>{

   return  <div className="basket_list">
    <Products basket={basket}/>
    </div>

}

export default List;