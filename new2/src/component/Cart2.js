import { useContext } from "react"
import {UserContext} from ".."
import React from "react"

function Cart(props) 
{

let data=useContext(UserContext)
console.log(data)

    console.log(props)
    return(
        <div class="product-card">
		<div class="badge">Hot</div>
		<div class="product-tumb">
			<img src={props.img} alt=""></img>
		</div>
		<div class="product-details">
			<span class="product-catagory">{props.title}</span>
			<h4><a href="">{props.brand}</a></h4>
			<p>{props.description}</p>
			<div class="product-bottom-details">
				<div class="product-price">${props.price}</div>
				<div class="product-links">
					<a href=""><i class="fa fa-heart"></i></a>
					<a href=""><i class="fa fa-shopping-cart"></i></a>
					<div class="btn">
						<button onClick={()=>{props.addtocart(props.value)}}Add To Card>Add To Card</button>

					</div>
				</div>
			</div>
		</div>
	</div>
    )
}
export default Cart;