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
import ToDo from "./ToDo";


function ToDoView(props) {
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


    return (
        <div
            style={{
                flexDirection: "column",
                display: "flex",
            }}
        >
            {/* {console.log(startDateTime)} */}
            {/* {console.log(endDateTime)} */}
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
                        <h3
                            style={{
                                m: 1,
                                width: "25ch",

                            }}
                        >
                            {props.todo.title}
                        </h3>

                        {
                            props.todo.start === 1 ?
                                <div
                                    style={{
                                        flexDirection: "row",
                                        display: "flex",
                                        justifyContent: "space-between",
                                    }}
                                >


                                    {/* {console.log(props.todo.start_time)} */}
                                    <h3 style={{ marginLeft: '15px' }}>Start Date: {props.todo.start_time.split("-")[0]}-{props.todo.start_time.split("-")[1]}-{props.todo.start_time.split("-")[2].split("T")[0]}</h3>
                                    <h3 style={{ marginLeft: '15px' }}>Start Time: {props.todo.start_time.split("-")[2].split("T")[1].split(":")[0]}:{props.todo.start_time.split("-")[2].split("T")[1].split(":")[1]} </h3>
                                    <h3 style={{ marginLeft: '15px' }}>End Date: {props.todo.end_time.split("-")[0]}-{props.todo.end_time.split("-")[1]}-{props.todo.end_time.split("-")[2].split("T")[0]}</h3>
                                    <h3 style={{ marginLeft: '15px' }}>End Time:{props.todo.end_time.split("-")[2].split("T")[1].split(":")[0]}:{props.todo.end_time.split("-")[2].split("T")[1].split(":")[1]}</h3>
                                </div>
                                :
                                <div
                                    style={{
                                        flexDirection: "row",
                                        display: "flex",

                                        alignSelf: 'flex-end'
                                    }}
                                >
                                    {console.log(props.todo.start_time)}
                                    <h3 style={{ marginLeft: '15px', alignSelf: 'flex-end' }}>Start Date: {props.todo.start_time.split("-")[0]}-{props.todo.start_time.split("-")[1]}-{props.todo.start_time.split("-")[2].split("T")[0]}</h3>
                                    <h3 style={{ marginLeft: '15px', alignSelf: 'flex-end' }}>Start Time: {props.todo.start_time.split("-")[2].split("T")[1].split(":")[0]}:{props.todo.start_time.split("-")[2].split("T")[1].split(":")[1]} </h3>

                                    {/* {
                                        props.todo.start_time.split("-") !== undefined && props.todo.start_time.split("-") !== undefined && props.todo.start_time.split("-") !== undefined &&
                                            <h3 style={{ marginLeft: '15px', alignSelf: 'flex-end' }}>Start Date: {props.todo.start_time.split("-")[0]}-{props.todo.start_time.split("-")[1]}-{props.todo.start_time.split("-")[2].split("T")[0]}</h3>
                                            
                                    } */}
                                </div>

                        }

                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                            }}
                        >
                        </div>
                    </div>

                    <p>
                        {props.todo.description}
                    </p>

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

                    {
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                            }}
                        >
                            <h3
                                style={{
                                    marginRight: "5px",
                                }}
                            >
                                Tags:

                            </h3>
                            {
                                props.todo.tags.map(tag =>


                                    <h3
                                        style={{

                                            backgroundColor: "grey",
                                            borderRadius: "5px",
                                            padding: "5px",
                                            marginRight: "5px",
                                        }}
                                    >
                                        {tag.tag_name}
                                        {console.log(tag.tag_name)}
                                    </h3>

                                )
                            }


                        </div>
                    }
                </div>
            </Paper >
        </div >
    );
}

export default ToDoView;