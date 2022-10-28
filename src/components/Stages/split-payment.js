// Checkout split method selection page
import { Fragment, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'


const SplitPayment = ()=>{
    
    const [open, setOpen] = useState(true)
    const [isActive, setIsActive] = useState(false);

    const [products, setProducts] = useState([]);
    const [paymentPopup, setPaymentPopup] = useState(false);

    useEffect(()=> {
        fetch('http://localhost:8000/basket')
        .then(res =>{
            console.log(res)
          return res.json();
        })
        .then((data)=> {console.log(data); setProducts(data)});
    
    }, [])

    const selectPayment = () => {
        setIsActive(current => !current);
    }

    return (<>

        <div className="sm:container flow-root p-4">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
            {products.map((product) => (
                <li key={product.id} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                        src={product.image}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center"
                        />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                        <div className="flex flex-1 items-end justify-between text-sm">{product.item}</div>
                        <div className="flex flex-1 items-end justify-between text-sm">Price {product.price}</div>
                        <div className="flex flex-1 items-end justify-between text-sm">Qty {product.qty}</div>
                    </div>
                    <div className="ml-4 flex flex-1">
                        <div onClick={selectPayment} className={isActive ? " border-white " + "m-2 sm:m-4 w-16 h-16 bg-gray-200 bg-paypal-icon bg-[length:32x] bg-center bg-no-repeat rounded-lg border-2" : " border-yellow-500 " + "m-2 sm:m-4 w-16 h-16 bg-gray-200 bg-paypal-icon bg-[length:32x] bg-center bg-no-repeat rounded-lg border-2"}></div>
                        <div onClick={selectPayment} className={isActive ? " border-white " + "m-2 sm:m-4 w-16 h-16 bg-gray-200 bg-paypal-icon bg-[length:32x] bg-center bg-no-repeat rounded-lg border-2" : " border-yellow-500 " + "m-2 sm:m-4 w-16 h-16 bg-gray-200 bg-paypal-icon bg-[length:32x] bg-center bg-no-repeat rounded-lg border-2"}></div>
                    </div>
                </li>
            ))}
            </ul>
      </div>
    </>)
}

export default SplitPayment;