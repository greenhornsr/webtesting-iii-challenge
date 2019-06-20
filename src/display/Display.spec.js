// Test away!
import React from 'react';
import Display from './Display';
import {render} from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';


describe.skip('<Display />', () => {
    it('displays if gate is open with green-led, if it is unlocked with green-led', () => {
        const { queryByText } = render(<Display />)
        const lockedStatus = queryByText(/Unlocked/i)
        const closedStatus = queryByText(/Open/i)

        expect(lockedStatus).toBeTruthy();
        expect(lockedStatus.classList).toContain('green-led');
        expect(closedStatus).toBeTruthy();
        expect(closedStatus.classList).toContain('green-led');
    });


    it('displays "Closed" if the closed prop is true with red-led', () => {
        const { queryByText } = render(<Display closed={true}  />)
        const closedStatus = queryByText(/Closed/i)

        expect(closedStatus).toBeTruthy();
        expect(closedStatus.classList).toContain('red-led');
    });


    it('displays "Locked" if the locked prop is true', () => {
        const { queryByTestId } = render(<Display locked={true} />) 
        const lockedStatus = queryByTestId('trulylocked')

        expect(lockedStatus.textContent).toContain('Locked');
        expect(lockedStatus.classList).toContain('red-led')
    });


});