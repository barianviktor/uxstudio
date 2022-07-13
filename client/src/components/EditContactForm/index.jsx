import React, { useState } from "react";
import Form from "../Form";
import api from "../../api";
import axios from "axios";
const EditContactForm = ({ handleClose, fetchData, contact }) => {
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(contact.image);
  const [name, setName] = useState(contact.name ? contact.name : "");
  const [phone, setPhone] = useState(contact.phone ? contact.phone : "");
  const [email, setEmail] = useState(contact.email ? contact.email : "");
  const handleDone = async () => {
    if (name.length < 1) {
      alert("legalabb egy nevet meg kell adni");
    } else {
      try {
        let payload = {
          id: contact.id,
          name: name,
          phone: phone,
          email: email,
          img_id: null,
        };
        if (image) {
          payload.img_id = image.id;
        }
        if (file) {
          const formData = new FormData();
          formData.append("avatar", file);
          console.log(file);
          const fileResult = await axios.post(api + "/image/upload", formData);
          console.log(fileResult);
          payload.img_id = fileResult.data.img_id;
        }
        console.log(payload);
        // const result = await axios.post(api + "/contact", payload);
        const result = await axios.put(api + "/contact", payload);
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
      title={"Edit Contact"}
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
      image={image}
      setImage={setImage}
    />
  );
};
export default EditContactForm;
