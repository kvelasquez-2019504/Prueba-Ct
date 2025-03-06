import { Schema, model } from "mongoose";

const FilesSchema = Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
    },
    dateCreation: {
        type: Date,
        required: true,
        default: Date.now,
    },
    observation: {
        type: String,
        required: true,
    },
    detail: [
        {
            consultationDate: {
                type: Date,
                required: true
            },
            diagnosis: {
                type: String,
                required: true
            },
            treatment: {
                type: String,
                required: true
            },
            doctor: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Doctor',
            }
        }
    ]
});

FilesSchema.method.toJson = function () {
    const { __v, ...object } = this.toObject();
    return object;
}

export default model('File', FilesSchema);