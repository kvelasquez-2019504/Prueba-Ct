import { Schema, model } from "mongoose";

const CategorySchema = Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
})

CategorySchema.method.toJson = function () {
    const { __v, ...object } = this.toObject();
    return object;
}

export default model('Category', CategorySchema);