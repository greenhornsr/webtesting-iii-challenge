// Test away!
import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import { fireEvent } from '@testing-library/react/dist';
import Controls from './Controls';


describe('Controls Component', () => {
    it('provides buttons to toggle the closed and locked state to Unlocked', () => {
        const spy = jest.fn();
        const { queryByText } = render(<Controls closed={true} locked={true} toggleLocked={spy} />);
        const button = queryByText(/Unlock Gate/i)
        const button2 = queryByText(/Open Gate/i)

        expect(button).toBeTruthy()
        expect(button2).toBeTruthy()
        expect(button2.disabled).toBeTruthy()
        fireEvent.click(button)
        expect(spy).toHaveBeenCalled()
    });

    it('provides buttons to toggle the closed and locked state to Lock', () => {
        const spy = jest.fn();
        const { queryByText } = render(<Controls closed={true} locked={false} toggleLocked={spy} />);
        const button = queryByText(/Lock Gate/i)
        const button2 = queryByText(/Open Gate/i)

        expect(button).toBeTruthy()
        expect(button2).toBeTruthy()
        expect(button2.disabled).toBeFalsy()
        fireEvent.click(button)
        expect(spy).toHaveBeenCalled()
    });

    it('provides buttons to toggle the closed and locked state to Open', () => {
        const spy = jest.fn();
        const { queryByText } = render(<Controls closed={true} locked={false} toggleClosed={spy} />);
        const button = queryByText(/Lock Gate/i)
        const button2 = queryByText(/Open Gate/i)

        expect(button).toBeTruthy()
        expect(button.disabled).toBeFalsy()
        expect(button2).toBeTruthy()
        fireEvent.click(button2)
        expect(spy).toHaveBeenCalled()
    });

    it('provides buttons to toggle the closed and locked state to Closed', () => {
        const spy = jest.fn();
        const { queryByText } = render(<Controls locked={false} closed={false} toggleClosed={spy} />);
        const button = queryByText(/Lock Gate/i)
        const button2 = queryByText(/Close Gate/i)

        expect(button).toBeTruthy()
        expect(button.disabled).toBeTruthy()
        expect(button2).toBeTruthy()
        fireEvent.click(button2)
        expect(spy).toHaveBeenCalled()
    });

    // it.todo('buttons text changes to reflect the state the door will be in if clicked', () => {

    // });
    // it.todo('the closed toggle button is disabled if the gate is locked', () => {

    // });
    // it.todo('the locked toggle button is disabled if the gate is open', () => {

    // });
});

describe.skip('Gate', () => {
    it.todo('defaults to unlocked and open', () => {

    });
    it.todo('cannot be closed or opened if it is locked', () => {

    });

});