import { Request, Response } from "express";
import listContactService from "../../services/contacts/listContact.service";

const listContactControler = async (req: Request, res: Response) => {
  try {
    const id = req.user.id;

    const schedule = await listContactService(id);

    return res.status(200).json(schedule);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        massage: error.message,
      });
    }
  }
};

export default listContactControler;
