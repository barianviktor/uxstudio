import React, { useState } from "react";
import "./style.css";
import api from "../../api";
import { ReactComponent as Mute } from "../../assets/icons/Mute.svg";
import { ReactComponent as Call } from "../../assets/icons/Call.svg";
import { ReactComponent as More } from "../../assets/icons/More.svg";
import { ReactComponent as Settings } from "../../assets/icons/Settings.svg";
import { ReactComponent as Favourite } from "../../assets/icons/Favourite.svg";
import { ReactComponent as Delete } from "../../assets/icons/Delete.svg";
import DefaultSmall from "../../assets/DefaultSmall.png";
import {
  ButtonIconSecondary,
  ButtonIconSecondaryListItem,
} from "../StyledButtons/StyledButtons";
import { StyledListItem } from "../StyledListItems";
const ContactListItem = ({
  contact,
  handleRemove,
  setEditContactModalOpen,
}) => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const closeSettings = () => setSettingsOpen(false);
  const openSettings = () => setSettingsOpen(true);
  const handleOpenEdit = () => {
    setEditContactModalOpen(contact);
    closeSettings();
  };
  return (
    <div className="contactListItem_container">
      <div className="contactListItem_info">
        <div className="contactListItem_info_avatar_container">
          {contact.image ? (
            <img
              src={api + "/" + contact.image.path}
              alt={"the avatar of " + contact.name}
            />
          ) : (
            <img src={DefaultSmall} alt={"DefaultSmall image"} />
          )}
        </div>
        <div className="contactListItem_info_name_and_phone">
          <h3>{contact.name}</h3>
          <p className="message">{contact.phone}</p>
        </div>
      </div>
      <div className="contactListItem_buttonContainer">
        <ButtonIconSecondaryListItem>
          <Mute />
        </ButtonIconSecondaryListItem>
        <ButtonIconSecondaryListItem>
          <Call />
        </ButtonIconSecondaryListItem>
        <ButtonIconSecondaryListItem onClick={openSettings}>
          <More />
        </ButtonIconSecondaryListItem>
        {settingsOpen && (
          <>
            <div className="contactListItem_settings_container">
              <StyledListItem onClick={handleOpenEdit}>
                <Settings />
                <p>Edit</p>
              </StyledListItem>
              <StyledListItem>
                <Favourite />
                <p>Favourite</p>
              </StyledListItem>
              <StyledListItem onClick={() => handleRemove(contact.id)}>
                <Delete />
                <p>Remove</p>
              </StyledListItem>
            </div>
            <div className="settings_backDrop" onClick={closeSettings} />
          </>
        )}
      </div>
    </div>
  );
};

export default ContactListItem;
