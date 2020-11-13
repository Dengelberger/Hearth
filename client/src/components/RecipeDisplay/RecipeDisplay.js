import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom"
import { Container, Row, FormGroup, Input, Button, Form, Popover, PopoverBody } from 'reactstrap';
import Memory from '../Memory';
import "./RecipeDisplay.css"
import axios from "axios"

const RecipeDisplay = (props) => {

    const [popoverOpen, setPopoverOpen] = useState(false);
    const [memories, setMemories] = useState([]);

    let { id } = useParams();


    useEffect(() => {
        renderMemories()
    }, []);

    const toggle = () => {
        setPopoverOpen(true)
        setTimeout(function(){ setPopoverOpen(false); }, 3000);
    };

    const renderMemories = () => {
        axios.get(("/api/memory/" + id)).then(res => {
            console.log("rendering memories...")
            console.log(res.data)
            setMemories(res.data);
        }).catch(err => { console.log(err) });
    }

    const handleMemorySubmit = (event) => {
        event.preventDefault()
        if(event.target.memory.value.length < 20){
            toggle()
        } else {
            let newMemory = {
                created_by: props.user._id,
                text: event.target.memory.value,
                recipe_id: props.recipe._id
            }
            axios.post("/api/memory", newMemory).then(res => {
                console.log(res.data)
                event.target.memory.value = ""
                renderMemories()
            }).catch(err => { console.log(err) });
            
        }
    }
    
    const handleDeleteMemory = (event) => {
        console.log(event.currentTarget.id)
        axios.delete(("/api/memory/" + event.currentTarget.id)).then(res => {
            console.log(res.data)
            renderMemories()
        }).catch(err => { console.log(err) });
    }

    return (
        <Container>
            <img className="mainImg" src={props.recipe.main_image}></img>
            <div className="titleCard">
                <h2>{props.recipe.title}</h2>
                <Row>
                    <div className="imageCropBig">
                        <img className="userImg" src={props.recipe.home_cook_id.picture}></img>
                    </div>
                    <a className="homecookLink" href={"/homecook/" + props.recipe.home_cook_id._id}>{props.recipe.home_cook_id.name}</a>
                </Row>
            </div>
            <h4>Ingredients</h4>
            <hr />
            <ul>
                {props.recipe.ingredients.map(item => <li>{item}</li>)}
            </ul>
            <h4>Directions</h4>
            <hr />
            <ol>
                {props.recipe.instructions.map(item => <li>{item}</li>)}
            </ol>
            {!memories || memories.length === 0 ? "" : <div><h4>Memories</h4>
            <hr />
            </div>}
            {memories.map(item => <Memory handleDeleteMemory={handleDeleteMemory} memory={item} user={props.user} />)}
            <br />
            {props.user ? <div>
            <h4>Add Memory:</h4>
            <hr />
            <Form onSubmit={handleMemorySubmit}>
                <FormGroup>
                    <Input type="textarea" name="memory" id="memoryInput" />
                </FormGroup>
                <Popover placement="bottom" isOpen={popoverOpen} target="memoryInput" toggle={toggle}>
                    <PopoverBody>Memories need to be at least 20 characters!</PopoverBody>
                </Popover>
                <Button type="submit">Submit</Button>
            </Form>
            </div> : <p><a href="/login">Log in</a> to add a memory!</p>}

            <br />
            <br />

        </Container>
    );
}

export default RecipeDisplay;