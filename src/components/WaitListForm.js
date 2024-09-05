"use client";

import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const WaitListForm = ({open,setOpen}) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const [message, setMessage] = useState("");

  const handleSubmit = async (name,email) => {
    //e.preventDefault();

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxHBaeEU23S7GJprrLKeMfntBaeSaP0EIMhEiLcRo9JRvFqhfcPTwXQ-D4wFYbFE_cP/exec",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },

          body: `email=${encodeURIComponent(email)}&name=${encodeURIComponent(
            name
          )}`,
        }
      );

      if (response.ok) {
        setMessage("Thank you for joining the waitlist!");

        setEmail("");
        setName("");
      } else {
        setMessage("An error occurred. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <>
      {/* <div>
        <form className="mt-10 max-w-md" onSubmit={handleSubmit}>
          <p className="m-4 text-md leading-6 text-gray-900">
            Join the waitlist to get notified on launch and get exclusive perks
            and discounts!
          </p>

          <div className="flex gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Name
            </label>

            <input
              id="name"
              name="name"
              type="name"
              autoComplete="name"
              className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="flex gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>

            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button
              type="submit"
              className="flex-none rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Join the waitlist
            </button>
          </div>
        </form>

        {message && <p>{message}</p>}
      </div> */}
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            const name = formJson.name;
            console.log(email,name);
            handleSubmit(name,email)
            handleClose();
          },
        }}
      >
        <DialogTitle>Waitlist</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            Please Add Details
          </DialogContentText> */}
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
          />
           <TextField
            autoFocus
            required
            margin="dense"
            id="email"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default WaitListForm;
