import { useState } from "react"
import { MenuItem, OrderItem } from "../types"


export default function useOrder() {

    const [order, setorder] = useState<OrderItem[]>([])

    const addItem = (item: MenuItem) => {


        const itemExist = order.find(orderItem => orderItem.id === item.id)

        if (itemExist) {

            const updateOrder = order.map(
                orderItem => orderItem.id === item.id ?
                    { ...orderItem, quantity: orderItem.quantity + 1 } :
                    orderItem)

            setorder(updateOrder)

        } else {
            const newItem = { ...item, quantity: 1 }
            setorder([...order, newItem])
        }


    }
    const deleteItem = (id: MenuItem['id']) => {

        setorder(order.filter(item=>item.id!==id))

    }

    return {
        order,
        addItem,
        deleteItem
    }
}