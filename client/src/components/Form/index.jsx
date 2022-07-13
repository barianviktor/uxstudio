import React from "react";
import api from "../../api";
import { ReactComponent as Add } from "../../assets/icons/Add.svg";
import { ReactComponent as Change } from "../../assets/icons/Change.svg";
import { ReactComponent as Delete } from "../../assets/icons/Delete.svg";
import Default from "../../assets/Default.png";
import "./style.css";
import {
  ButtonLabelPrimary,
  ButtonLabelSecondary,
  ButtonIconLabelPrimary,
  ButtonIconPrimary,
} from "../StyledButtons/StyledButtons";
import { StyledInputs } from "../StyledInputs/index";
const Form = ({
  title,
  handleDone,
  handleClose,
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  image,
  setImage,
  setFile,
  preview,
  setPreview,
}) => {
  const handleFileInput = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };
  const handleDeleteImage = () => {
    if (!preview) {
      setImage(null);
    }
    setPreview(null);
    setFile(null);
  };
  const renderImageIcon = () => {
    if (preview) return <img src={preview} alt="preview" />;
    if (image) return <img src={api + "/" + image.path} alt="prop.png" />;
    return <img src={Default} alt="default.png" />;
  };
  const renderButtonText = () => {
    if (preview || image) {
      return (
        <>
          <Change />
          <p>Change picture</p>
        </>
      );
    } else {
      return (
        <>
          <Add />
          <p>Add picture</p>
        </>
      );
    }
  };
  const renderDeleteIcon = () => {
    if (preview || image) {
      return (
        <ButtonIconPrimary onClick={handleDeleteImage}>
          <Delete />
        </ButtonIconPrimary>
      );
    }
  };
  return (
    <div className="contactFormContainer">
      <div className="ContactFormInfo">
        <h2>{title}</h2>
        <div className="ContactFormImageHandler">
          <div className="contactFormContainer__avatar__container">
            {renderImageIcon()}
          </div>
          <label htmlFor="file-upload">
            <ButtonIconLabelPrimary>
              {renderButtonText()}
            </ButtonIconLabelPrimary>
          </label>
          {renderDeleteIcon()}
          <input
            type="file"
            name="file"
            accept="image/*"
            id="file-upload"
            onChange={(e) => handleFileInput(e)}
          />
        </div>
        <StyledInputs
          onChange={setName}
          placeHolder="Jamie Wright"
          value={name}
          id={"name"}
          name={"Name"}
        />
        <StyledInputs
          onChange={setPhone}
          placeHolder="+01 234 5678"
          value={phone}
          id={"phone"}
          name={"Phone number"}
        />
        <StyledInputs
          onChange={setEmail}
          placeHolder="jamie.wright@gmail.com"
          value={email}
          id={"email"}
          name={"Email address"}
        />
      </div>
      <div className="contactFormFooterNavigation">
        <ButtonLabelSecondary onClick={handleClose}>
          Cancel
        </ButtonLabelSecondary>
        <ButtonLabelPrimary onClick={handleDone}>Done</ButtonLabelPrimary>
      </div>
    </div>
  );
};
export default Form;
