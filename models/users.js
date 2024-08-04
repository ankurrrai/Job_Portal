import mongoose from 'mongoose';
import validator from 'validator';
import mongooseBcrypt from 'mongoose-bcrypt';

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is Require']

    },

    email:{
        type:String,
        required:[true,'Email is require'],
        unique:true,
        validate: {
            validator: function (value) {
              // Regular expression for validating an email
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              return emailRegex.test(value);
            },
            message: props => `${props.value} is not a valid email address.`,
          }
    }, 
    password:{
        type:String,
        require:[true,'Password is require'],
        validate: {
            validator: function (value) {
              // Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character
              const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
              return passwordRegex.test(value);
            },
            message: props => `Given password is not a valid password. Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.`,
          },
          bcrypt:true,
          round:9
    },
    location:{
        type:String,
        default:'India'
    }

},{timestamps:true})

userSchema.plugin(mongooseBcrypt)

const User=mongoose.model('User',userSchema)
export default User