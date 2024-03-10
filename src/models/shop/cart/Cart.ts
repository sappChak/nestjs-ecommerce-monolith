import mongoose, { Schema } from "mongoose";
import { Product } from "../product/Product";

export interface Cart extends Document {
    userId: Schema.Types.ObjectId;
    items: CartItem[];
}

export interface CartItem {
    productId: Product;
    quantity: number;
}

const cartItemSchema = new Schema<CartItem>(
    {
        productId: { type: Schema.Types.ObjectId, ref: "Product" },
        quantity: { type: Number },
    },
    { timestamps: true },
);

export const cartSchema = new Schema<Cart>(
    {
        userId: { type: Schema.Types.ObjectId, ref: "User" },
        items: [cartItemSchema],
    },
    { timestamps: true },
);

export const CartModel = mongoose.model<Cart>("Cart", cartSchema);
