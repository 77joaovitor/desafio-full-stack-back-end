import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entities";

const listContactService = async (id: any): Promise<Contact[]> => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contact = await contactRepository.find();

  const contactForeach = contact.filter((element) => {
    return element.userid.id === id;
  });

  if (contact.length === 0) {
    throw new Error("Contact not found");
  }

  return contactForeach;
};

export default listContactService;
