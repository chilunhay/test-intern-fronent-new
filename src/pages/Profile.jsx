import React, { useEffect, useState } from "react";
import "./Profile.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    email: "",
    phone: "",
  });

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!isValidEmail(input.email)) {
      toast.error("Please enter a valid email");
    } else if (input.phone.length < 10) {
      toast.error("Please enter a valid phone number");
    } else {
      localStorage.setItem("profile-data", JSON.stringify(input));
      toast.success("Update successful");
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();

    setInput({
      name: "",
      birth: "",
      email: "",
      phone: "",
    });
  };

  useEffect(() => {
    const inputs = JSON.parse(localStorage.getItem("profile-data"));
    if (inputs) {
      setInput(inputs);
    }
  }, []);

  return (
    <div className="profile-background">
      <div className="profile-container">
        <form className="profile-form" onSubmit={handleUpdate}>
          <p className="profile-title">Profile</p>

          <label htmlFor="name">Full name:</label>
          <input
            type="text"
            value={input.name}
            id="name"
            name="name"
            onChange={(e) =>
              setInput({
                ...input,
                name: e.target.value,
              })
            }
            required
          />

          <label htmlFor="birth">Day Of Birth:</label>
          <input
            name="birth"
            type="text"
            value={input.birth}
            id="birth"
            onChange={(e) =>
              setInput({
                ...input,
                birth: e.target.value,
              })
            }
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            value={input.email}
            id="email"
            name="email"
            onChange={(e) =>
              setInput({
                ...input,
                email: e.target.value,
              })
            }
            required
          />

          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            value={input.phone}
            id="phone"
            name="phone"
            onChange={(e) =>
              setInput({
                ...input,
                phone: e.target.value,
              })
            }
            required
          />

          <div className="profile-function">
            <button className="update-btn" type="submit" onClick={handleUpdate}>
              Update
            </button>
            <button type="submit" className="cancel-btn" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
