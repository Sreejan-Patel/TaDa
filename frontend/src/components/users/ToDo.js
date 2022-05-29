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
import axios from "axios";

const TagsInput = props => {
  const [tags, setTags] = useState(props.tags);
  console.log(tags);
  const removeTags = indexToRemove => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)]);
  };
  const addTags = event => {
    if (event.target.value !== "") {
      setTags([...tags, event.target.value]);
      props.selectedTags([...tags, event.target.value]);
      event.target.value = "";
    }
  };
  return (
    <div className="tags-input"
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <input
        type="text"
        onKeyUp={event => event.key === "Enter" ? addTags(event) : null}
        placeholder="Press enter to add tags"
        style={{
          height: '2em',
          marginTop: '0.5em',
          marginRight: '0.5em',
        }}
      />
      <ul id="tags"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          listStyle: "none",
          padding: 0,
          margin: 0,
        }}

      >
        {tags.map((tag, index) => (

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#0000ff",
              borderRadius: "1em",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "1em",
              padding: '0.01em',
              marginTop: "0.5em",

            }}
          >
            <h5
              style={{
                marginTop: '0em',
                marginRight: "0.25px",
                marginBottom: "0px",

                color: "white",
                padding: "5px",
                borderRadius: "5px",


                marginLeft: "5px",
                wordSpacing: "10px",

              }}
            >{tag}</h5>

            <h5 onClick={() => removeTags(index)}
              style={{
                marginTop: "0em",
                marginRight: "10px",
                marginBottom: "0px",
                backgroundColor: "#000055",
                color: "red",
                padding: "5px",
                borderRadius: "150px",
                padding: "0.25em",

                marginLeft: "5px",

              }}
            >x</h5>

          </div>


        ))}
      </ul>

    </div>
  );
};

function ToDo() {
  const selectedTags = tags => {
    console.log(tags);
    setTags(tags);
  };
  //const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDateTime, setStartDateTime] = useState(new Date());
  const [endDateTime, setEndDateTime] = useState(new Date());
  const [tags, setTags] = useState([]);
  const [start, setStart] = useState(-1);
  const [importance, setImportance] = useState(0);

  const handleSubmitStore = (event) => {
    event.preventDefault();
    const data = {
      user_id: "1",
      title: title,
      description: description,
      start: start,
      start_time: startDateTime,
      end_time: endDateTime,
      tags: tags,
      importance: importance,

    }
    console.log(data);
    axios.post('http://localhost:4000/todo/store', data)
      .then(res => {

        console.log(res.data);
        window.location.reload();
      }
      )
  }
  const handleChangeImportance = (event) => {
    setImportance(event.target.value);
  };
  const handleChangeTimeType = (event) => {
    setStart(event.target.value);
  };
  const handleChangeStartTime = (event) => {
    setStartDateTime(event.target.value);
    console.log(startDateTime);
  };

  const handleChangeEndTime = (event) => {
    setEndDateTime(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {console.log(startDateTime)}
      {console.log(endDateTime)}
      <Paper
        style={{
          padding: "10px",
          margin: "10px",
          display: "flex",
          width: "75%",
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
              onChange={handleChangeTitle}
            />

            {
              start === 0 ?

                <TextField
                  id="datetime-local"
                  label="Start Date Time"
                  type="datetime-local"
                  variant="standard"
                  defaultValue={startDateTime}
                  onChange={handleChangeStartTime}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  sx={{
                    m: 1,
                    width: "25ch"
                  }}
                />

                :
                null

            }

            {
              start === 1 ?
                <div>
                  <TextField
                    id="datetime-local"
                    label="Start Date Time"
                    type="datetime-local"
                    variant="standard"
                    defaultValue={startDateTime}
                    onChange={handleChangeStartTime}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    sx={{
                      m: 1,
                      width: "25ch"
                    }}
                  />
                  <TextField
                    id="datetime-local"
                    label="End Date Time"
                    type="datetime-local"
                    variant="standard"
                    defaultValue={endDateTime}
                    onChange={handleChangeEndTime}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    sx={{
                      m: 1,
                      width: "25ch"
                    }}
                  />

                </div>
                :
                null
            }
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <FormControl
                sx={{ width: "25ch" }}
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
            onChange={handleChangeDescription}
          />
          {/*<DateTimePicker
          label="Date  Time picker"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />*/}
        </Box>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            alignContent: "center",
          }}

        >
          <TagsInput selectedTags={selectedTags} tags={[]} />


        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <FormControl
            sx={{
              width: "25ch",
              margin: "10px"
            }}
          >
            <InputLabel id="demo-simple-select-label">Importance Level</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"

              label="Importance Level"
              onChange={handleChangeImportance}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div><Button
          onClick={handleSubmitStore}
        >Submit</Button></div>
      </Paper>
    </div>
  );
}

export default ToDo;
/*
 */
