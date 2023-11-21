export interface BasicProduct {
    id: number;
}

export interface Product extends BasicProduct {
    name: string;
    desciption: string;
    instockQuantity: number;
    price: number;
}