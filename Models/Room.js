const mongoose     = require("mongoose")
const RoomSchema   = mongoose.Schema({
    room_id:{
        type: String,
        required:true,
        index: true,
        unique:true,
    },
    messages:[
        {
            msg:String,
            room:String,
            user_id:String,
            name:String,
            image:String,
            isteatcher:Boolean,
            date: {type:Date , default:Date.now()}

        }
    ],

},{timestamps: true})

const Room = mongoose.model("Room",RoomSchema)


module.exports = Room;
module.exports.RoomSchema = RoomSchema