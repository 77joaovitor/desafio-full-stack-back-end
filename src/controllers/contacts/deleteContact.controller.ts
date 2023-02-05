import { Request, Response } from "express";
import deleteContactService from "../../services/contacts/deleteContact.service";

const deleteContactController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await deleteContactService(id);
    return res.status(200);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(401).json(error.message);
    }
  }
};

export default deleteContactController;
