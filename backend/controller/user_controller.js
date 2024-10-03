import User from '../models/user_models.js';
import bcrypt from 'bcrypt';

export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        //  console.log(fullname, email, password)
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "user already exist!" });
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const createUser = new User({
            fullname,
            email,
            password: hashPassword
        });
        const data = await createUser.save();
        res.status(201).json({ message: "user created successfully !", user: { _id: data.id, fullname: data.fullname, email: data.email } });
    } catch (error) {
        res.status(501).json({ message: "internal server error " });
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "invalid email !" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        //console.log(isMatch)
        if (!isMatch) {
            return res.status(400).json({ message: "invalid password !" });
        }
        else {
            res.status(201).json({ message: "login successfully!", user: { _id: user.id, fullname: user.fullname, email: user.email } })

        }
    } catch (error) {
        res.status(501).json({ message: "internal server error " });
    }
}