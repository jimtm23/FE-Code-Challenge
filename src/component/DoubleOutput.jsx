import React from "react";
import { Row, Col, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const DoubleOutput = () => {

    const {
        register,
        setValue,
    } = useForm({});


    const handleOnChange = (e) => {
        let inputTxtVal = e.target.value.replace(/,\s*$/, "");

        let inputValArr = inputTxtVal.split(",");
        let double = inputValArr.map(num => {
            return num*2
        })

        double = inputTxtVal == "" ? "" : double

        setValue("outputTxt", double);
    }

    return (
        <form>
            <Row>
                <Col className="input-container">
                <h4 className="input-container-title">Input</h4>
                <Form.Label>
                    Array
                </Form.Label>
                <Form.Control 
                    {...register("inputTxt")}
                    id="inputTxt"
                    onChange={ (e) => handleOnChange(e)}
                    type="text" 
                    />
                </Col>
                <Col className="input-container">
                <h4 className="input-container-title">Output</h4>
                <Form.Label>
                    Double
                </Form.Label>
                <Form.Control 
                    {...register("outputTxt")}
                    id="outputTxt"
                    type="text" />
                </Col>
            </Row>
        </form>
    )
}

export default DoubleOutput