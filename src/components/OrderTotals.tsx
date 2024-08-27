import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order: OrderItem[]
    tip: number
}
export default function OrderTotals({ order, tip }: OrderTotalsProps) {

    const subTotal = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])
    const tipAmount = useMemo(() => subTotal * tip, [tip, order])
    const totalPagar=useMemo(()=>subTotal+tipAmount,[tip,order])
    return (
        <>
            <div className="space-y-3">

                <h2 className="font-black text-2xl">Totales y Propinas</h2>
                <p>Subtotal a pagar:{' '}
                    <span className="font-bold">{formatCurrency(subTotal)}</span>
                </p>

                <p>Propina:{' '}
                    <span className="font-bold">{formatCurrency(tipAmount)}</span>
                </p>
                <p>Total a pagar:{' '}
                    <span className="font-bold">{formatCurrency(totalPagar)}</span>
                </p>
            </div>

            <button>

            </button>
        </>
    )
}
