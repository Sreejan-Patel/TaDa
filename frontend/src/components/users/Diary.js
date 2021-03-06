import { useState, useEffect, useRef } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from "@mui/material/InputLabel";
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import axios from "axios";
import ToDoView from "./ToDoView";
import YesterdayToDo from "./YesterdayToDo";




function Diary() {

    const [diary, setDiary] = useState("");
    const [diaryData, setDiaryData] = useState([{}]);
    const [diaryIndex, setDiaryIndex] = useState(-1);
    // const [newData, setNewData] = useState({
    //     title: "",
    //     description: "",
    //     start: 0,
    //     start_time: "2022-05-20T16:15",
    //     end_time: "2022-05-20T16:15",
    //     tags: []

    // })



    const [newDataArray, setNewDataArray] = useState([{}]);
    const [startTimeState, setStartTimeState] = useState(0);
    const [endTimeState, setEndTimeState] = useState(0);
    const [caretPosition, setCaretPosition] = useState(0);
    const [backslash, setBackslash] = useState(0);
    let dummyDate = "2022-05-20T16:15";
    let newArr = [{}];
    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");
    let newData = {
        user_id: "1",
        title: "",
        description: "",
        start: 0,
        start_time: "2022-05-20T16:15",
        end_time: "2022-05-20T16:15",
        tags: []
    }
    const handleChangePhoneNumber = (event) => {
        setPhoneNumber(event.target.value);
    }
    const handleChangeMessage = (event) => {
        setMessage(event.target.value);
    }

    const checkSyntax = (event) => {
        if (event.target.value.slice(-1) === '\\') {
            setBackslash(1);
        } else {
            setBackslash(0);
        }
    };

    const handleChangeDiary = (event) => {
        setDiary(event.target.value);
        console.log(event.target.value);
        checkSyntax(event);
    };

    const handleChangeStartTime = (event) => {
        // setNewData(prevState => ({
        //     ...prevState,
        //     start_time: event.target.value

        // }));
        // setNewDataArray(prevState => ({
        //     ...prevState,
        //     newDataArray.map((x, i) => {
        //         if (i === newDataArray.length - 1) {
        //             x.start_time = event.target.value
        //         }
        //         return x;
        //     })
        // }));
        let newArr = [...newDataArray];
        newArr[newDataArray.length - 1].start_time = event.target.value;
        setNewDataArray(newArr);
        console.log(newArr);
        console.log(newDataArray);

    };
    const handleChangeEndTime = (event) => {
        // setNewData(prevState => ({
        //     ...prevState,
        //     end_time: event.target.value
        // }));
        let newArr = [...newDataArray];
        newArr[newDataArray.length - 1].end_time = event.target.value;
        setNewDataArray(newArr);
    }
    const handleSubmitStartTime = (event) => {
        setStartTimeState(0);
        let newTime = newDataArray[newDataArray.length - 1].start_time.split("-")[2].split("T")[1].split(":")[0] + ":" + newDataArray[newDataArray.length - 1].start_time.split("-")[2].split("T")[1].split(":")[1];
        let newDate = newDataArray[newDataArray.length - 1].start_time.split("-")[0] + "-" + newDataArray[newDataArray.length - 1].start_time.split("-")[1] + "-" + newDataArray[newDataArray.length - 1].start_time.split("-")[2].split("T")[0];
        setDiary(diary + newTime + "," + newDate + "}");

    };



    const handleSubmitEndTime = (event) => {
        setEndTimeState(0);
        let newTime = newDataArray[newDataArray.length - 1].end_time.split("-")[2].split("T")[1].split(":")[0] + ":" + newDataArray[newDataArray.length - 1].end_time.split("-")[2].split("T")[1].split(":")[1];
        let newDate = newDataArray[newDataArray.length - 1].end_time.split("-")[0] + "-" + newDataArray[newDataArray.length - 1].end_time.split("-")[1] + "-" + newDataArray[newDataArray.length - 1].end_time.split("-")[2].split("T")[0];
        setDiary(diary + newTime + "," + newDate + "}");

    };
    const handleSubmitMessage = (event) => {
        // fetch('/api/messages', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(this.state.message)
        // })
        //     .then(res => res.json())
        // .then(data => {
        //   if (data.success) {
        //     this.setState({
        //       error: false,
        //       submitting: false,
        //       message: {
        //         to: '',
        //         body: ''
        //       }
        //     });
        //   } else {
        //     this.setState({
        //       error: true,
        //       submitting: false
        //     });
        //   }
        // });
        let data = {
            "to": phoneNumber,
            "body": message
        }
        axios.post("http://localhost:4000/diary/api/messages", data)

            .then(res => {
                console.log(res);
            }
            )
            .catch(err => {
                console.log(err);
            }
            );

    };

    const handleSubmitDiary = (event) => {
        event.preventDefault();
        const data = {
            description: diary,
            user_id: "1"
        }
        axios.post("http://localhost:4000/diary/store", data)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
        for (let i = 0; i < newDataArray.length; i++) {
            if (newDataArray[i].start_time !== undefined && newDataArray[i].start_time !== dummyDate && newDataArray[i].end_time !== undefined && newDataArray[i].end_time !== dummyDate) {
                newDataArray[i].start = 1;
            }

            console.log(newDataArray[i]);
            axios.post("http://localhost:4000/todo/store_new", newDataArray[i])
                .then(res => {
                    console.log(res.data);
                })
                .catch(err => {
                    console.log(err);
                })
        }
    };






    useEffect(() => {
        AnalyzeDiary();
        AnalyzeBackSlash();
        // var input = document.getElementById('myinput'); // or $('#myinput')[0]
        // var caretPos = input.selectionStart;
        // setCaretPosition(caretPos);
        setNewDataArray(newArr);
        setBackslash(backslash);

        //console.log(caretPos);

    }, [diary]);

    const AnalyzeDiary = () => {
        //console.log(newData);
        console.log(newDataArray);
        console.log(diary.split("\\todo{").length);
        let no_of_todos = diary.split("\\todo{").length - 1;
        console.log(no_of_todos);
        newArr = [{}];
        for (var i = 0; i < no_of_todos; i++) {
            // console.log("here");
            const newData = {
                user_id: "1",
                title: "",
                description: "",
                start: 0,
                start_time: "2022-05-20T16:15",
                end_time: "2022-05-20T16:15",
                tags: [],
                importance: -1,
                urgency: -1,

            }
            // console.log( newDataArray[i]);
            // console.log( newDataArray[i].start_time);
            if (newDataArray[i] !== undefined && newDataArray[i].start_time !== undefined && newDataArray[i].start_time !== dummyDate) {
                console.log("oh");
                newData.start_time = newDataArray[i].start_time;
                newData.end_time = newDataArray[i].end_time;
            }
            //console.log(diary.split("\\todo{")[1]);
            if (diary.split("\\todo{")[1] !== undefined) {
                //xyz \todo{kkmm}
                newData.title = diary.split("\\todo{")[i + 1].split("}")[0];
                console.log(newData.title);
                setDiaryIndex(diary.indexOf("\\todo{"))
                //console.log(diaryIndex + 5);
                let ind = (diary.split("\\todo{")[1].indexOf("}")) + diaryIndex + 6;
                //console.log(ind);
                console.log(diary.split("\\desc{")[i + 1])
                if (diary.split("\\desc{")[i + 1] !== undefined) {
                    newData.description = diary.split("\\desc{")[i + 1].split("}")[0];
                }
                console.log(diary.split("\\time{")[i + 1]);
                console.log(diary.split("\\time{")[i])
                console.log(diary.indexOf("\\time{"))
                if (diary.split("\\time{")[i + 1] === '' && diary.split("\\time{")[i] !== undefined && diary.indexOf("\\time{") !== -1) {
                    console.log("yes");
                    console.log(newData.start_time);
                    if (newData.start_time === dummyDate) {
                        setStartTimeState(1);
                    }
                }
                if (diary.split("\\end-time{")[i + 1] === '' && diary.split("\\end-time{")[i] !== undefined && diary.indexOf("\\end-time{") !== -1) {
                    if (newData.end_time === dummyDate) {
                        setEndTimeState(1);
                    }
                }
                if (diary.split("\\tags{")[i + 1] !== undefined) {
                    let tags1 = [];
                    let tags2 = diary.split("\\tags{")[i + 1].split("}")[0].split(",");
                    console.log(tags2.length);
                    let newTag = {
                        tag_name: "red"
                    }
                    for (var j = 0; j < tags2.length; j++) {
                        newTag = {
                            tag_name: tags2[j]
                        }
                        tags1.push(newTag);
                    }
                    newData.tags = tags1;
                }
                if (diary.split("\\importance{")[i + 1] !== undefined) {
                    newData.importance = diary.split("\\importance{")[i + 1].split("}")[0];
                }
                if(diary.split("\\urgency{")[i + 1] !== undefined){
                    newData.urgency = diary.split("\\urgency{")[i + 1].split("}")[0];
                }
            }


            //setNewDataArray(oldArray => [...oldArray, newData]);
            //let newArr = [...newDataArray];
            // newArr.push(newData);
            if (i === 0) {
                newArr[0] = newData;
            }
            else {
                newArr.push(newData);
            }
            console.log(newArr);
            //setNewDataArray(newArr);
        }

        return (
            <div>
                {console.log(newDataArray)}
                {
                    newDataArray.map((x, i) => {
                        // { console.log(x) }
                        return <ToDoView key={"1234"} todo={x} />
                        //return <div><h3>hi</h3></div>

                    })
                    //<h3>hi</h3>
                    //<ToDoView todo={newDataArray[0]} />
                    // ran.map((x, i) => {
                    //     return <h3>{x}</h3>
                    // }
                    // )

                }

            </div>
        )


    }

    const AnalyzeBackSlash = () => {
        return (

            backslash === 1 ?
                <div>
                    <Button onClick={() => {
                        setBackslash(0);
                        setDiary(diary + "todo{");
                    }}>
                        todo
                    </Button>
                    <Button onClick={() => {
                        setBackslash(0);
                        setDiary(diary + "desc{");
                    }}>
                        desc
                    </Button>
                    <Button onClick={() => {
                        setBackslash(0);
                        setDiary(diary + "time{");
                    }}>
                        time
                    </Button>
                    <Button onClick={() => {
                        setBackslash(0);
                        setDiary(diary + "end-time{");
                    }}>
                        end-time
                    </Button>
                    <Button onClick={() => {
                        setBackslash(0);
                        setDiary(diary + "tags{");
                    }}>
                        tags
                    </Button>
                    <Button onClick={() => {
                        setBackslash(0);
                        setDiary(diary + "importance{");
                    }}>
                        importance
                    </Button>
                    <Button onClick={() => {
                        setBackslash(0);
                        setDiary(diary + "urgency{");
                    }}>
                        urgency
                    </Button>
                    
                </div>
                :
                <div>

                </div>
        )
    }


    return (
        <div>
            
            <div>
                <h1>Yesterday's</h1>
                
                <YesterdayToDo />
            </div>


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
                    value={diary}
                    id="myinput"
                    onChange={handleChangeDiary}
                    sx={{
                        width: "90%",
                    }}
                    onKeyDown={(e) => {
                        if (e.key === "ArrowRight") {
                            var input = document.getElementById('myinput'); // or $('#myinput')[0]
                            var caretPos = input.selectionStart;
                            setCaretPosition(caretPos);
                            console.log(caretPos);
                        }
                        if (e.key === "ArrowLeft") {
                            var input = document.getElementById('myinput'); // or $('#myinput')[0]
                            var caretPos = input.selectionStart;
                            setCaretPosition(caretPos);
                            console.log(caretPos);
                        }
                    }}

                />

            </div>

            <div>
                {
                    startTimeState === 1 ?
                        <div> <TextField
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
                            <Button
                                onClick={handleSubmitStartTime}
                            >Submit</Button>
                        </div>

                        :
                        null
                }
                {
                    endTimeState === 1 ?
                        <div><TextField
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
                            <Button
                                onClick={handleSubmitEndTime}
                            >Submit</Button>
                        </div>
                        :
                        null
                }

            </div>

            <AnalyzeBackSlash />
            <AnalyzeDiary />
            <div>
                <Button onClick={handleSubmitDiary}>
                    Submit Diary
                </Button>
            </div>
            <div
            style={{
                display: "flex",
                flexDirection: "column",
            }}>
                <h2>Who are you grateful to?</h2>
                <div> 
                <TextField
                    //id="standard-textarea"
                    label="Phone Number"
                    height="auto"
                    //minRows={4}
                    margin="normal"
                    variant="outlined"
                    //multiline
                    //value={diary}
                    id="myinput"
                    onChange={handleChangePhoneNumber}
                    sx={{
                        width: "30%",
                    }}
                    

                />
                <TextField
                    //id="standard-textarea"
                    label="Message"
                    height="auto"
                    minRows={4}
                    margin="normal"
                    variant="outlined"
                    multiline
                    //value={diary}
                    id="myinput"
                    onChange={handleChangeMessage}
                    sx={{
                        width: "80%",
                    }}
                    

                />
                </div>
            </div>

            <div>
                <Button onClick={handleSubmitMessage}>
                    Thank them!!
                </Button>
            </div>


        </div>


    )

}



export default Diary;

