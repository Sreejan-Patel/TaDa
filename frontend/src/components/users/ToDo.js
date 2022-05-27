import { useState } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from "@mui/material/InputLabel";

function ToDo() {
  const [value, setValue] = useState("");
  const [dateTime, setDateTime] = useState(new Date());
  const [start, setStart] = useState(0);
  const handleChange = (event) => {
    setValue(event.target.value);
  };


  const handleChangeTimeType = (event) => {
    setStart(event.target.value);
  };
  const handleChangeTime = (event) => {
    setDateTime(event.target.value);
  };

  return (
    <div
      style={{
        flexDirection: "column",
        display: "flex",
      }}
    >
      {console.log(start)}
      <Paper
        style={{
          padding: "10px",
          margin: "10px",
          display: "flex",
          width: "50%",
          flexDirection: "column",
        }}
      >
        <Box display="flex" flexDirection="column">
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              alignContent: "center",
            }}
          >  
            <TextField
              id="standard-textarea"
              label="Title"
              sx={{ m: 1, width: "25ch" }}
              margin="normal"
              variant="standard"
              placeholder="Title"
              defaultValue=""
              onChange={handleChange}
            />

            <TextField
              id="datetime-local"
              label="Date Time"
              type="datetime-local"
              variant="standard"
              defaultValue={dateTime}
              onChange={handleChangeTime}
              InputLabelProps={{
                shrink: true,
              }}
            />

<FormControl 
    sx = {{width : "25ch"}}
  >
        <InputLabel id="demo-simple-select-label">Time Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          
          label="Age"
          onChange={handleChangeTimeType}
        >
          <MenuItem value={0}>Start</MenuItem>
          <MenuItem value={1}>Start & End</MenuItem>
          
        </Select>
      </FormControl>
          </div>
          <TextField
            id="standard-textarea"
            label="Description"
            height="auto"
            minRows={4}
            margin="normal"
            variant="outlined"
            multiline
            defaultValue=""
            onChange={handleChange}
          />
          {/*<DateTimePicker
          label="Date  Time picker"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />*/}
        </Box>
        {console.log(value)}
      </Paper>
    </div>
  );
}

export default ToDo;
/*
 */
