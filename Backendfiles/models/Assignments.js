import mongoose from "mongoose";
const AssignmentSchema = new mongoose.Schema({
   
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    startedAt:{
        type: Date,
        required: true,
        trim: true
    },
    expiredAt: {
        type: Date,
        required: true,
        trim: true
    },
    status: {
        type: String,
        enum: ["coming-soon", "open", "ended"],
        default: "coming-soon"
    },
    title: {
        type: String
    },
    totalpoints: {
        type: Number,
        required: true
    },
    visible:{
        type:Boolean , 
        required:true,
    },
    questions:{
        type:String,
        required:true
    }
}, { timestamps: true });


//const Assignment = mongoose.model('Assigment', AssignmentSchema);

export default mongoose.model("Assignment", AssignmentSchema);
