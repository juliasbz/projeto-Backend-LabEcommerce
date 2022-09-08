export type Purchase = {
    id: string,
    userId: string,
    productId: string,
    quantity: number,
    totalPrice: number
}

export type PurchaseDB = {
    id: string,
    user_id: string,
    product_id: string,
    quantity: number,
    total_price: number
}