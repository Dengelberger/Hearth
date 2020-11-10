import React, { useState } from "react";
import { Collapse } from "reactstrap";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import Navigation from "../components/Navigation"
import InstructionForm from "../components/InstructionForm"
import { FormText } from "reactstrap";

function Builder() {

    const [isOpen, setIsOpen] = useState(false);
    const [instructionCount, setInstructionCount] = useState(1)
    const [instructionArr, setInstructionArr] = useState([0]);

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

        // add newHomecook to database and refresh the page
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


        // console.log(event.target.title.value)
        // console.log(document.querySelector("#homecookSelect").value)
        // console.log(event.target.catagory.value)
        // console.log(event.target.preview.src)
        // console.log(ingredients)
        // console.log(instructions)
        // console.log(recipePictures)


        let newRecipe = { title: event.target.title.value, home_cook_id: document.querySelector("#homecookSelect").value, catagory: event.target.catagory.value, main_image: event.target.preview.src, ingredients: ingredients, instructions: instructions, second_images: recipePictures}
        console.log(newRecipe)

        // add newHomecook to database and refresh the page
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

    return <>
        <Navigation />
        <Container>
            <h1>Recipe Builder</h1>
            <h4>Homecook:</h4>
            <Input onChange={handleSelect} type="select" name="select" id="homecookSelect">
                <option>Karin Stubbs</option>
                <option>Auntie Polly</option>
                <option>Keith Jones</option>
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
                    <img name="preview" src="https://via.placeholder.com/150x150"></img>
                    <FormGroup>
                        <Label for="picture">Picture</Label>
                        <Input type="file" name="picture" id="cookPicture" />
                    </FormGroup>
                    <Button type="submit">Submit</Button>
                </Form>
            </Collapse>
            <Collapse isOpen={!isOpen}>
                <Form onSubmit={handleRecipeAdd}>
                    <FormGroup>
                        <Label for="title">Recipe Title:</Label>
                        <Input type="text" name="title" id="recipeTitle" placeholder="Recipe Title" />
                    </FormGroup>
                    <img name="preview" src="https://via.placeholder.com/350x150"></img>
                    <FormGroup>
                        <Label for="picture">Main Picture</Label>
                        <Input type="file" name="picture" id="mainPicture" />
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
                    {instructionArr.map((item , index) => <InstructionForm key={index} number={index +1} />)}
                    <div>
                        <Button color="primary" onClick={addInstruction}>+</Button>
                        <Button color="danger" onClick={removeInstruction}>X</Button>
                    </div>
                    <img className="recipePicture" name="preview2" src="https://via.placeholder.com/150x150"></img>
                    <FormGroup>
                        <Label for="secondPicture">Original Recipe Picture</Label>
                        <Input type="file" name="secondPicture" id="secondPicture" />
                    </FormGroup>
                    <img className="recipePicture" name="preview3" src="https://via.placeholder.com/150x150"></img>
                    <FormGroup>
                        <Label for="thirdPicture">Additional Picture</Label>
                        <Input type="file" name="thirdPicture" id="thirdPicture" />
                    </FormGroup>
                    <Button type="submit">SUBMIT</Button>
                </Form>
            </Collapse>
        </Container>
    </>;
}

export default Builder;