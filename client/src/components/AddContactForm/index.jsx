import React, { useState } from "react";
import Form from "../Form";
import api from "../../api";
import axios from "axios";
const AddContactForm = ({ handleClose, fetchData }) => {
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const handleDone = async () => {
    if (name.length < 1) {
      alert("legalabb egy nevet meg kell adni");
    } else {
      try {
        let payload = {
          name: name,
          phone: phone,
          email: email,
          img_id: null,
        };
        if (file) {
          const formData = new FormData();
          formData.append("avatar", file);
          console.log(file);
          const fileResult = await axios.post(api + "/image/upload", formData);
          console.log(fileResult);
          payload.img_id = fileResult.data.img_id;
        }

        const result = await axios.post(api + "/contact", payload);
        console.log(result);
        await fetchData();
        await handleClose();
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <Form
      title={"Add Contact"}
      handleDone={handleDone}
      handleClose={handleClose}
      name={name}
      setName={setName}
      phone={phone}
      setPhone={setPhone}
      email={email}
      setEmail={setEmail}
      setFile={setFile}
      preview={preview}
      setPreview={setPreview}
    />
  );
};
export default AddContactForm;
