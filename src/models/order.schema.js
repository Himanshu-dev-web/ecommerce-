import orderStatus from "../utils/Orderstatus";


import mongoose from "mongoose"

const orderSchema = new mongoose.Schema({
    product: {
        type: [
            {
                productId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product"
                },
                count: Number,
                price: Number
            }
        ],
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    coupon: String,
    transactionId: String,
    status: {
        // type: String,
        // enum: ["ORDERED", "SHIPPED", "DELIVERED", "CANCELLED"],
        // //TODO: try better way
        // default: "ORDERED",
        type: String,
        enum: Object.values(orderStatus),
        default: AuthRoles.ORDERED
    }
}, {timestamps: true})


export default mongoose.model("Order", orderSchema)