import contact from '../models/contact_models.js';

export const contactSave = async (req, res) => {
    try {
        const { fullname, email, phone } = req.body;
        const createContact = new contact({
            fullname,
            email,
            phone
        })
        await createContact.save();
        res.status(201).json({ message: " successfully Send !", status:true });
    } catch (error) {
        res.status(501).json({ message: "internal server error " });
    }
}