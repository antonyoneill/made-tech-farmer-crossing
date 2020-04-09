import React from 'react'
import Form from "./Form"
import { render, fireEvent } from '@testing-library/react';

describe('Form', () => {
    it('accepts valid input from the user and passes the values through onSubmit', () => {

        const onSubmitSpy = jest.fn()
        const context = render(<Form onSubmit={onSubmitSpy}/>);
    

        const input = context.getByLabelText("Number of bags of corn")

        fireEvent.change(input, {target:{value: 1}})

        const button = context.getByText("Calculate")

        fireEvent.click(button)

        expect(onSubmitSpy).toHaveBeenCalledWith(1)
    })
})