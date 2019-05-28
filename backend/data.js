let mongoose = require ('mongoose');
let Schema = mongoose.Schema;

let DataSchema = new Schema(
    {
        id: Number,
        message: String
    },
    { timestamps: true}
);

module.exports = mongoose.model("Data", DataSchema);