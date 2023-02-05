import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entities";

const createContactService = async ({
  cellphone,
  userid,
  name,
  email,
}: Contact) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contact = contactRepository.create({
    name,
    cellphone,
    userid,
    email,
  });

  await contactRepository.save(contact);

  return contact;
};

export default createContactService;
