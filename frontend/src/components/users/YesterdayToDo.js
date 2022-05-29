import { useState } from "react";
import { useEffect } from "react";
import ToDoView from "./ToDoView";
import axios from "axios";


const TagsInput = props => {
    const [tags, setTags] = useState(props.tags);
    console.log(tags);
    const removeTags = indexToRemove => {
        setTags([...tags.filter((_, index) => index !== indexToRemove)]);
        props.selectedTags([...tags.filter((_, index) => index !== indexToRemove)]);
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
                placeholder="Search Tags"
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

function YesterdayToDo() {

    const [todos, setTodos] = useState([]);
    useEffect(() => {
        let data = {
            "user_id": "1",
          }
        axios
            .post('http://localhost:4000/todo//yesterday_todos',data)
            .then(res => {
                console.log(res.data);
                setTodos(res.data);
            })
            .catch(err => {
                console.log(err);
            }
            )
    }, [])





    const selectedTags = tags => {
        console.log(tags);
        setTags(tags);
    };
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [startDateTime, setStartDateTime] = useState(new Date());
    const [endDateTime, setEndDateTime] = useState(new Date());
    const [tags, setTags] = useState([]);
    const [start, setStart] = useState(-1);

    return (
        <div>

            <TagsInput selectedTags={selectedTags} tags={[]} />
            <List items={todos} filter={tags} />
        </div>
    );
}

const List = ({ items, filter }) => {

    return (

        <div>
            {items
                .filter(item => {
                    if (filter.length === 0) {
                        return true;
                    }
                    return filter.every(tag => item.tags.filter(item => item.tag_name.includes(tag)).length > 0);
                })
                .map(item => (
                    <ToDoView key={item.id} todo={item} />
                ))}
        </div>
    );
};

export default YesterdayToDo;