import ContactListItem from "../ContactListItem";
import "./style.css";
const ContactsList = ({ contacts, handleRemove, setEditContactModalOpen }) => {
  return (
    <div className="contacts_list">
      {contacts.map((contact) => {
        return (
          <ContactListItem
            key={contact.id}
            contact={contact}
            handleRemove={handleRemove}
            setEditContactModalOpen={setEditContactModalOpen}
          />
        );
      })}
    </div>
  );
};

export default ContactsList;
