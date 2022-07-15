import React from "react";
import {
  TextField,
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

type Props = {};

export default function UserForm({}: Props) {
  const [value, setValue] = React.useState("female");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  return (
    <form>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "75ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            disabled
            id="id"
            label="ID"
            variant="outlined"
            defaultValue="Hello World"
          />
          <TextField
            id="username"
            label="Id"
            variant="outlined"
            defaultValue="Username"
          />
        </div>
        <div>
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            defaultValue="password"
          />
          <TextField
            id="phone"
            label="Phone"
            variant="outlined"
            defaultValue="phone"
          />

        <FormControl>
          <FormLabel id="controlled-radio-buttons-group">Status</FormLabel>
          <RadioGroup
            aria-labelledby="controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel value="A" control={<Radio />} label="Active" />
            <FormControlLabel value="I" control={<Radio />} label="Inactive" />
          </RadioGroup>
        </FormControl>
        </div>

        <button type="submit" id="btnSave" name="btnSave" onClick={() => {}}>
          Submit
        </button>
      </Box>
    </form>
  );
}
