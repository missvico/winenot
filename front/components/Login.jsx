import React from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default ({handlerChange, handlerSubmit})=>{
    return(
        <div>
            <Form >
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" onChange={handlerChange}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" onChange={handlerChange}/>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handlerSubmit}>
          Submit
        </Button>
      </Form>
        </div>
    )
}