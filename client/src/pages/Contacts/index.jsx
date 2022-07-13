import React, { useState, useEffect } from "react";
import Modal from "../../components/Modal/index";
import { ReactComponent as Add } from "../../assets/icons/Add.svg";
import { ReactComponent as Settings } from "../../assets/icons/Settings.svg";
import { ReactComponent as Photo } from "../../assets/icons/Photo.svg";
import "./style.css";
import {
  ButtonIconLabelSpecial,
  ButtonIconSecondary,
} from "../../components/StyledButtons/StyledButtons";
import api from "../../api";
import axios from "axios";
import ContactsList from "../../components/ContactsList";
import EditContactForm from "../../components/EditContactForm";
import AddContactForm from "../../components/AddContactForm";

const Contacts = () => {
  const [newContactModalOpen, setNewContactModalOpen] = useState(false);
  const [editContactModalOpen, setEditContactModalOpen] = useState(false);
  const [contacts, setContacts] = useState([]);
  const closeNewContact = () => setNewContactModalOpen(false);
  const openNewContact = () => setNewContactModalOpen(true);
  const closeEditContactModalOpen = () => setEditContactModalOpen(false);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get(api + "/contact");
      setContacts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleRemove = async (id) => {
    try {
      const response = await axios.delete(api + "/contact/" + id);
      console.log(response);
      await fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mainContainer">
      <div className="headerContact">
        <h1>Contacts</h1>
        <div className="buttons">
          <div className="secondaryButtons">
            <ButtonIconSecondary>
              <Settings />
            </ButtonIconSecondary>
            <ButtonIconSecondary>
              <Photo />
            </ButtonIconSecondary>
          </div>
          <ButtonIconLabelSpecial onClick={openNewContact}>
            <Add />
            Add new
          </ButtonIconLabelSpecial>
        </div>
      </div>
      <ContactsList
        handleRemove={handleRemove}
        contacts={contacts}
        setEditContactModalOpen={setEditContactModalOpen}
      />
      {newContactModalOpen && (
        <Modal handleClose={closeNewContact}>
          <AddContactForm handleClose={closeNewContact} fetchData={fetchData} />
        </Modal>
      )}
      {editContactModalOpen && (
        <Modal handleClose={closeEditContactModalOpen}>
          <EditContactForm
            handleClose={closeEditContactModalOpen}
            fetchData={fetchData}
            contact={editContactModalOpen}
          />
        </Modal>
      )}
    </div>
  );
};
export default Contacts;
