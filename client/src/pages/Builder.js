
import React, { useEffect, useState } from "react";
import { Collapse } from "reactstrap";
import { Button, Container, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from "reactstrap";
import Navigation from "../components/Navigation"
import InstructionForm from "../components/InstructionForm"
import { FormText } from "reactstrap";
import axios from "axios";
require('dotenv').config();
import "./Builder.css"


function Builder(props) {

    const [isOpen, setIsOpen] = useState(false);
    const [instructionCount, setInstructionCount] = useState(1)
    const [instructionArr, setInstructionArr] = useState([0]);
    const [selectedFile, setSelectedFile] = useState();
    const [homeCookList, setHomeCookList] = useState([]);
    const [homeCookId, setHomeCookId] = useState();
    const [cookPicture, setCookPicture] = useState("https://icon-library.com/images/generic-user-icon/generic-user-icon-19.jpg")
    const [mainPicture, setMainPicture] = useState("https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/124672766_10207612687111234_3394486550191593811_n.jpg?_nc_cat=100&ccb=2&_nc_sid=730e14&_nc_ohc=7Gl7ULB1hnoAX9uAtIS&_nc_ht=scontent-lga3-1.xx&oh=ff9df2bca92df8570f1cdb3dcd5db892&oe=5FD44839")
    // const [secondPicture, setSecondPicture] = useState("https://via.placeholder.com/150x150")
    // const [thirdPicture, setThirdPicture] = useState("https://via.placeholder.com/150x150")
    const [modal, setModal] = useState(false);

    const toggleModal = () => setModal(!modal);

    useEffect(() => {
        axios.get("/api/homecook").then(res => {
            console.log(res.data)
            setHomeCookList(res.data)
        }).catch(err => { console.log(err) });
    }, []
    )

    const handleSelect = (event) => {
        console.log(event.target.value);
        if (event.target.value === "Add a Homecook") {
            setIsOpen(false);
        } else {
            setHomeCookId(event.target.value);
            setIsOpen(true);
        }
    }

    const handleCookAdd = (event) => {
        event.preventDefault();
        let newHomecook = { name: event.target.name.value, bio: event.target.bio.value, picture: event.target.preview.src }
        console.log(newHomecook)
        axios.post("/api/homecook", newHomecook).then(res => {
            console.log(res)
            window.location.reload()
        }).catch(err => { console.log(err) });

    }

    const handleRecipeAdd = (event) => {
        event.preventDefault();
        let instructions = [];
        let allInstructions = document.querySelectorAll(".instruct")
        allInstructions.forEach(item => instructions.push(item.value))

        let ingredients = (event.target.ingredients.value).split("\n")

        // let recipePictures = []
        // let allRecipePictures = document.querySelectorAll(".recipePicture")
        // allRecipePictures.forEach(item => recipePictures.push(item.src))

        let newRecipe = { title: event.target.title.value, home_cook_id: homeCookId, category: event.target.category.value, main_image: event.target.preview.src, ingredients: ingredients, instructions: instructions, created_by: props.user._id }
        console.log(newRecipe)
        axios.post("/api/recipe", newRecipe).then(res => {
            console.log(res.data._id)
            window.location.href = ("/recipe/" + res.data._id)
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

    const handlePictureChange = async (event) => {
        event.preventDefault();
        let pictureid = event.target.name
        console.log(pictureid)

        if (!event.target.files[0]) { return }
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0])
        reader.onloadend = () => {
            axios.post("/api/upload", { data: reader.result }).then(res => {
                console.log(res.data.url)
                switch (pictureid) {
                    case "homecookPicture":
                        setCookPicture(res.data.url)
                        break;
                    case "mainPicture":
                        setMainPicture(res.data.url)
                        break;
                    // case "secondPicture":
                    //     setSecondPicture(res.data.url)
                    //     break;
                    // case "thirdPicture":
                    //     setThirdPicture(res.data.url)
                    //     break;

                    default:
                        break;
                }

            }).catch(err => {
                console.log(err)
                toggleModal()
            });
        }

    }

    const handleHiddenClick = (event) => {
        event.preventDefault();
        event.currentTarget.previousSibling.click()
    }

    return <main className="mainBackground">

        <Navigation user={props.user} />
        {props.user ? <Container>
            <Modal isOpen={modal} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Upload Too Large</ModalHeader>
                <ModalBody>Our server can only handle extremely small images at this time. Please select an image that is 50MB or lower and try again!</ModalBody>
            </Modal>
            <h1 style={{ paddingTop: "15px" }}>Recipe Builder</h1>
            <div className="builderTextDiv">
                <p style={{ padding: "0px" }}>Select a homecook to START! Please fill out all of the available fields, and be as decriptive as possible. We suggest making the recipe first to iron out the details and snag a picture of your creation! If you cannot find the homecook you had in mind, feel free to add them using the <span style={{ color: "#CF4747", fontWeight: "500" }}>Add a Homecook</span> option!</p>
            </div>
            <div className="selectCook">
                <Input onChange={handleSelect} type="select" name="select" id="homecookSelect">
                    {homeCookList.map(item => <option value={item._id}>{item.name}</option>)}
                    <option>Add a Homecook</option>
                </Input>
            </div>
            <Collapse isOpen={!isOpen}>
                <Form className="addCookForm" onSubmit={handleCookAdd}>
                    <FormGroup>
                        <Label for="name">Full Name:</Label>
                        <Input type="text" name="name" id="cookName" placeholder="Full Name" required />
                    </FormGroup>
                    <FormGroup>
                        <Label for="bio">Biography:</Label>
                        <Input type="textarea" name="bio" id="cookBio" required />
                    </FormGroup>
                    <div>Picture:</div>
                    <div className="imgContainer">
                        <div className="homeCookCropBig">
                            <img className="homeCookImg" id="homecookPicture" name="preview" src={cookPicture}></img>
                        </div>
                        <Input style={{ display: "none" }} className="homeCookInput" onChange={handlePictureChange} type="file" name="homecookPicture" id="cookPicture" />
                        <div className="fakeBtn" onClick={handleHiddenClick}>
                            <p className="plus">+</p>
                        </div>
                    </div>
                    <button className="submitBtn" type="submit">Submit</button>
                </Form>
            </Collapse>
            <Collapse isOpen={isOpen}>
                <Form className="addCookForm" onSubmit={handleRecipeAdd}>
                    <FormGroup>
                        <Label for="title">Recipe Title:</Label>
                        <Input type="text" name="title" id="recipeTitle" placeholder="Recipe Title" required />
                    </FormGroup>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div className="imgContainer">
                            <div className="foodCrop">
                                <img className="foodImg" name="preview" src={mainPicture}></img>
                            </div>
                            <Input style={{ display: "none" }} onChange={handlePictureChange} type="file" name="mainPicture" id="mainPicture" />
                            <div className="fakeBtn" onClick={handleHiddenClick}>
                                <p className="plus">+</p>
                            </div>
                        </div>

                    </div>
                    <FormGroup>
                        <Label for="recipeCategory">Category</Label>
                        <Input type="select" name="category" id="recipeCategory">
                            <option>General</option>
                            <option>Breakfast</option>
                            <option>Lunch</option>
                            <option>Dinner</option>
                            <option>Appetizer</option>
                            <option>Dessert</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="ingredients">Ingredients</Label>
                        <Input type="textarea" name="ingredients" required />
                        <FormText color="white">
                            Please separate each ingredient with a new line (ENTER⏎)
                            </FormText>
                    </FormGroup>
                    <Label for="instructions">Instructions</Label>
                    {instructionArr.map((item, index) => <InstructionForm key={index} number={index + 1} />)}
                    <div className="buttonDiv">
                        <p className="remove" onClick={removeInstruction}>REMOVE</p>
                        <p className="slash">/</p>
                        <p className="add" onClick={addInstruction}>ADD Instruction</p>
                    </div>
                    {/* <img className="recipePicture" name="preview2" src={secondPicture}></img>
                    <FormGroup>
                        <Label for="secondPicture">Original Recipe Picture</Label>
                        <Input onChange={handlePictureChange} type="file" name="secondPicture" id="secondPicture" />
                    </FormGroup>
                    <img className="recipePicture" name="preview3" src={thirdPicture}></img>
                    <FormGroup>
                        <Label for="thirdPicture">Additional Picture</Label>
                        <Input onChange={handlePictureChange} type="file" name="thirdPicture" id="thirdPicture" />
                    </FormGroup> */}
                    <button className="submitBtn" type="submit">Submit</button>
                </Form>
            </Collapse>
            <br />
            <br />
        </Container> :
            <Container>
                <br />
                <h2>You have to be <a href="/login">logged in</a> to build a recipe!</h2>
            </Container>}
    </main>;
}

export default Builder;