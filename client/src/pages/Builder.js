import React, { useEffect, useState } from "react";
import { Collapse } from "reactstrap";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import Navigation from "../components/Navigation"
import InstructionForm from "../components/InstructionForm"
import { FormText } from "reactstrap";
import axios from "axios";
require('dotenv').config();


function Builder() {

    const [isOpen, setIsOpen] = useState(false);
    const [instructionCount, setInstructionCount] = useState(1)
    const [instructionArr, setInstructionArr] = useState([0]);
    const [selectedFile, setSelectedFile] = useState();
    const [homeCookList, setHomeCookList] = useState([]);
    const [cookPicture, setCookPicture] = useState("https://icon-library.com/images/generic-user-icon/generic-user-icon-19.jpg")
    const [mainPicture, setMainPicture] = useState("https://via.placeholder.com/350x150")
    const [secondPicture, setSecondPicture] = useState("https://via.placeholder.com/150x150")
    const [thirdPicture, setThirdPicture] = useState("https://via.placeholder.com/150x150")

    useEffect( () => {
        axios.get("/api/homecook").then(res => {
            console.log(res.data)
            setHomeCookList(res.data)
        }).catch(err => { console.log(err) });
    },[]
    )

    const handleSelect = (event) => {
        if (event.target.value === "Add a Homecook") {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }

    const handleCookAdd = (event) => {
        event.preventDefault();
        let newHomecook = { name: event.target.name.value, bio: event.target.bio.value, picture: event.target.preview.src }
        console.log(newHomecook)
        axios.post("/api/homecook", newHomecook).then(res => {
            console.log(res)
        }).catch(err => { console.log(err) });
   
    }
    
    const handleRecipeAdd = (event) => {
        event.preventDefault();
        let instructions = [];
        let allInstructions = document.querySelectorAll(".instruct")
        allInstructions.forEach(item => instructions.push(item.value))

        let ingredients = (event.target.ingredients.value).split("\n")

        let recipePictures = []
        let allRecipePictures = document.querySelectorAll(".recipePicture")
        allRecipePictures.forEach(item => recipePictures.push(item.src))

        
        let newRecipe = { title: event.target.title.value, catagory: event.target.catagory.value, main_image: event.target.preview.src, ingredients: ingredients, instructions: instructions, second_images: recipePictures }
        console.log(newRecipe)
        axios.post("/api/recipe", newRecipe).then(res => {
            console.log(res)
        }).catch(err => { console.log(err) });


        // add recipe to database and refresh the page
    }

    const addInstruction = (event) => {
        event.preventDefault();
        let newArr = instructionArr;
        newArr.push(instructionCount);
        console.log(newArr);
        setInstructionCount(instructionCount + 1);
    }

    const removeInstruction = (event) => {
        event.preventDefault();
        instructionArr.splice(1, 1)
        console.log(instructionArr);
        setInstructionCount(instructionCount + 1)

    }

    const handleUpload = async (event) => {
        event.preventDefault();

        let pictureid = event.target.name

        if (!selectedFile) {
            return
        } else {
            console.log(selectedFile)
            axios.post("/api/upload", { data: selectedFile }).then(res => {
                console.log(res.data.url)
                if (pictureid === "homecookPicture") {
                    setCookPicture(res.data.url)
                }

            }).catch(err => { console.log(err) });
        }
    }

    const handlePictureChange = async (event) => {
        event.preventDefault();
        let pictureid = event.target.name
        console.log(pictureid)

        if (!event.target.files[0]) { return }
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0])
        reader.onloadend = () => {
            console.log(reader.result)
            axios.post("/api/upload", { data: reader.result }).then(res => {
                console.log(res.data.url)
                switch (pictureid) {
                    case "homecookPicture":
                        setCookPicture(res.data.url)
                        break;
                    case "mainPicture":
                        setMainPicture(res.data.url)
                        break;
                    case "secondPicture":
                        setSecondPicture(res.data.url)
                        break;
                    case "thirdPicture":
                        setThirdPicture(res.data.url)
                        break;
    
                    default:
                        break;
                }
    
            }).catch(err => { console.log(err) });
        }

    }

    return <>
        <Navigation />
        <Container>
            <h1>Recipe Builder</h1>
            <h4>Homecook:</h4>
            <Input onChange={handleSelect} type="select" name="select" id="homecookSelect">
                {homeCookList.map(item => <option name={item._id}>{item.name}</option>  )}  
                <option>Add a Homecook</option>
            </Input>
            <Collapse isOpen={isOpen}>
                <Form onSubmit={handleCookAdd}>
                    <FormGroup>
                        <Label for="name">Full Name:</Label>
                        <Input type="text" name="name" id="cookName" placeholder="Full Name" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="bio">Biography</Label>
                        <Input type="textarea" name="bio" id="cookBio" />
                    </FormGroup>
                    <div>Picture</div>
                    <img style={{ width: "150px" }} id="homecookPicture" name="preview" src={cookPicture}></img>
                    <div>
                        <Input onChange={handlePictureChange} type="file" name="homecookPicture" id="cookPicture" />
                        <Button onClick={handleUpload} name="homecookPicture" type="button">Upload</Button>
                    </div>
                    <Button type="submit">Submit</Button>
                </Form>
            </Collapse>
            <Collapse isOpen={!isOpen}>
                <Form onSubmit={handleRecipeAdd}>
                    <FormGroup>
                        <Label for="title">Recipe Title:</Label>
                        <Input type="text" name="title" id="recipeTitle" placeholder="Recipe Title" />
                    </FormGroup>
                    <img name="preview" src={mainPicture}></img>
                    <FormGroup>
                        <Label for="picture">Main Picture</Label>
                        <Input onChange={handlePictureChange} type="file" name="mainPicture" id="mainPicture" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="recipeCatagory">Catagory</Label>
                        <Input type="select" name="catagory" id="recipeCatagory">
                            <option>General</option>
                            <option>Breakfast</option>
                            <option>Lunch</option>
                            <option>Dinner</option>
                            <option>Appitizer</option>
                            <option>Dessert</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="ingredients">Ingredients</Label>
                        <Input type="textarea" name="ingredients" />
                        <FormText color="muted">
                            Please separate each ingredient with a new line (ENTER⏎)
                            </FormText>
                    </FormGroup>
                    <Label for="instructions">Instructions</Label>
                    {instructionArr.map((item, index) => <InstructionForm key={index} number={index + 1} />)}
                    <div>
                        <Button color="primary" onClick={addInstruction}>+</Button>
                        <Button color="danger" onClick={removeInstruction}>X</Button>
                    </div>
                    <img className="recipePicture" name="preview2" src={secondPicture}></img>
                    <FormGroup>
                        <Label for="secondPicture">Original Recipe Picture</Label>
                        <Input onChange={handlePictureChange} type="file" name="secondPicture" id="secondPicture" />
                    </FormGroup>
                    <img className="recipePicture" name="preview3" src={thirdPicture}></img>
                    <FormGroup>
                        <Label for="thirdPicture">Additional Picture</Label>
                        <Input onChange={handlePictureChange} type="file" name="thirdPicture" id="thirdPicture" />
                    </FormGroup>
                    <Button type="submit">SUBMIT</Button>
                </Form>
            </Collapse>
        </Container>
    </>;
}

export default Builder;