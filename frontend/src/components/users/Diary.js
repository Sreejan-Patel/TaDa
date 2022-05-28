import { useState, useEffect } from "react";

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
import ToDoView from "./ToDoView";

function Diary() {

    const [diary, setDiary] = useState("");
    const [diaryData, setDiaryData] = useState([{}]);
    const [newData, setNewData] = useState({
        title: "",
        description: "",
        start: 0,
        start_time: "2022-05-20T16:15",
        end_time: "2022-05-20T16:15",
        tags: []

    })

    const [startTimeState, setStartTimeState] = useState(0);
    const [endTimeState, setEndTimeState] = useState(0);
    let dummyDate = "2022-05-20T16:15";
    // let newData = {
    //     title: "",
    //     description: "",
    //     start: 0,
    //     start_time: "2022-05-20T16:15",
    //     end_time: "2022-05-20T16:15",
    //     tags: []
    // }

    const handleChangeDiary = (event) => {
        setDiary(event.target.value);
    };

    const handleChangeStartTime = (event) => {

        // newData.start_time = event.target.value;
        setNewData({ start_time: event.target.value });
        // console.log(event.target.value);
        // console.log(newData.start_time);



    }

    useEffect(() => {
        AnalyzeDiary();
    }, [diary]);


    const AnalyzeDiary = () => {
        console.log(newData);

        if (diary.split("\\todo{")[1] !== undefined) {
            newData.title = diary.split("\\todo{")[1].split("}")[0];
            //console.log(newTitle);

            if (diary.split("\\desc{")[1] !== undefined) {
                newData.description = diary.split("\\desc{")[1].split("}")[0];
            }
            if (diary.split("\\time{")[1] !== undefined) {
                if (newData.start_time === dummyDate) {
                    setStartTimeState(1);

                }
            }
            if (diary.split("\\end-time{")[1] !== undefined) {
                if(newData.end_time===dummyDate){
                    setEndTimeState(1);
                }
            }
            if (diary.split("\\tags{")[1] !== undefined) {
                let tags1 = [];
                let tags2 = diary.split("\\tags{")[1].split("}")[0].split(",");

                for (var i = 0; i < tags2.length; i++) {
                    let newTag = {
                        tag_name: tags2[i]
                    }
                    tags1.push(newTag);
                }
                newData.tags = tags1;
            }

        }
        return (

            <ToDoView todo={newData} key={"1234"} />
        )


    }


    return (
        <div>

            <div>
                <h1>Diary Entry</h1>
            </div>
            <div>
                <TextField
                    //id="standard-textarea"
                    label="Diary Entry"
                    height="auto"
                    minRows={4}
                    margin="normal"
                    variant="outlined"
                    multiline
                    defaultValue=""
                    onChange={handleChangeDiary}
                    sx={{
                        width: "90%",
                    }}
                />

            </div>
            <div>
                {
                    startTimeState === 1 ?
                        <TextField
                            id="datetime-local"
                            label="Start Date Time"
                            type="datetime-local"
                            variant="standard"
                            // defaultValue={startDateTime}
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
                {/* {
                    endTimeState === 1 ?
                        <TextField
                            id="datetime-local"
                            label="End Date Time"
                            type="datetime-local"
                            variant="standard"
                            // defaultValue={startDateTime}
                            onChange={handleChangeEndTime}
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
                } */}

            </div>

            <AnalyzeDiary />
        </div>


    )

}



export default Diary;

