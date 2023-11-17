export interface ProductData {
    id?: number,
    productName?: string,
    unitPrice?: number,
    unitsInStock?: number,
    quantityPerUnit?: string,
    category?: {
        categoryId?: number,
        categoryName?: string
    }
}

export interface cartItemsData {
    quantity: number,
    product: ProductData
}

type CartReducerParams = {type: string, payload: ProductData }