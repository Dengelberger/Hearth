import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import "./InstructionForm.css"

const InstructionForm = (props) => {
    return (
        <>
            <FormGroup>
                <div key={props.number} className="instructionForm">
                    <Label for={"instruction" + props.number}>{props.number}</Label>
                    <div className="spacer"></div>
                    <Input className="instruct" type="textarea" name={"instruction" + props.number} />
                </div>
            </FormGroup>
        </>
    );
}

export default InstructionForm;