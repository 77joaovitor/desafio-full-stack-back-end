import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entities";

const deleteContactService = async (id: string): Promise<void> => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contact = await contactRepository.findOneBy({
    id,
  });
  console.log(contact);

  if (!contact) {
    throw new Error("Contact not found");
  }

  await contactRepository.delete(id);
};

export default deleteContactService;
