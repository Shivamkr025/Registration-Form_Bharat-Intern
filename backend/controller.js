import { User } from "./schema.js";
import bcrypt from 'bcrypt';
const salt = 10

const registrationForm = async(req , res)=>{
    const {username , email , password} = req.body
    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        await newUser.save();
        res.status(201).json({ success: true, message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error' });
    }
}

export default registrationForm