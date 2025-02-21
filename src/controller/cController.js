import { Contacts } from "../models/contactSchema.js";

const UserC = async (req, res) => {
    try {
      console.log("Request Body:", req.body); // Log the request body
  
      const { name, email, message } = req.body;
      const contact = new Contacts({ name, email, message });
      await contact.save();
  
      return res.status(200).json({ message: "Submitted successfully" });
    } catch (error) {
      console.error("Error occurred:", error); // Log the error
      res.status(500).json({ error: "Internal server error" });
    }
  };

  export default UserC;