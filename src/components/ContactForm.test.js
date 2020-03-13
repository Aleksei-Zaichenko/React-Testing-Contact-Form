import React from 'react';
import {render, fireEvent} from '@testing-library/react'
import ContactForm from './ContactForm';

test ("renders correctly", () => {
    render(<ContactForm />);
});

test("Contact form accepts and processes the inputted info", () =>{
    const {getByLabelText,getByText} = render (<ContactForm/>);

    const firstNameInput = getByLabelText(/first name*/i);
    const lastNameInput = getByLabelText(/last name*/i);
    const emailInput = getByLabelText(/email*/i);
    const messageInput = getByLabelText(/message/i);

    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();

    fireEvent.change(firstNameInput,{
        target: {name: "firstName", value: "djon"}
    });
    fireEvent.change(firstNameInput,{
        target: {name: "lastName", value: "Jonhson"}
    });
    fireEvent.change(firstNameInput,{
        target: {name: "email", value: "djon@djon.djon"}
    });
    fireEvent.change(firstNameInput,{
        target: {name: "message", value: "hi, i am djon"}
    });

    const submitButton = getByText(/submit/i);
    fireEvent.click(submitButton)

    console.log(firstNameInput);
});