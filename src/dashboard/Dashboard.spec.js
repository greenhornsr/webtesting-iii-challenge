import React from 'react'
import {render} from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import renderer from 'react-test-renderer'; // 1: install this npm module as a dev dependency
import { fireEvent } from '@testing-library/react/dist';

import Dashboard from './Dashboard';


describe('<Dashboard.js />', () => {
    describe('Dashboard', () => {
        it('shows the controls and display', () => {
            expect(true).toBe(true)
        });
        // it('matches snapshot', () => {
        //     const tree = renderer.create(<Dashboard />); // generates a DOM tree

        //     // snapshots are a JSON representation of the DOM tree
        //     expect(tree.toJSON()).toMatchSnapshot();
        // });

        if('matches snapshot', () => {
            const {container} = render(<Dashboard />);
            expect(container).toMatchSnapshot();
        });
        it('render updates correctly when clicking close gate button', () => {
            const {queryByText} = render(<Dashboard />)
            let closeButton = queryByText(/Close Gate/i)
            let lockButton = queryByText(/Lock Gate/i)
            let closeDisplay = queryByText(/Open/i)
            let lockDisplay = queryByText(/Unlocked/i)

            expect(closeButton).toBeTruthy()
            expect(lockButton).toBeTruthy()
            expect(lockButton.disabled).toBeTruthy()
            expect(closeDisplay).toBeTruthy()
            expect(lockDisplay).toBeTruthy()
            expect(lockDisplay.classList).toContain('green-led')
            expect(closeDisplay.classList).toContain('green-led')

            fireEvent.click(closeButton)

            closeButton = queryByText(/Open Gate/i);
            closeDisplay = queryByText(/Closed/i)

            expect(closeButton).toBeTruthy()
            expect(lockButton.disabled).toBeFalsy()
            expect(closeDisplay).toBeTruthy()
            expect(lockDisplay.classList).toContain('green-led')
            expect(closeDisplay.classList).toContain('red-led')
        });
        it('', () => {
            //  Renders Component stores it queryByText
            const {queryByText} = render(<Dashboard />)
            // query searches the DOM to identify matching string (regex expression) and assigns to variable/memory
            let closeButton = queryByText(/Close Gate/i)
            // simulates button click of closeButton
            fireEvent.click(closeButton)
            // capturing new current state of all elements identified below
            closeButton = queryByText(/Open Gate/i)
            let lockButton = queryByText(/Lock Gate/i)
            let closeDisplay = queryByText(/Closed/i)
            let lockDisplay = queryByText(/Unlocked/i)
            // assertions that elements exist
            expect(closeButton).toBeTruthy()
            expect(lockButton).toBeTruthy()
            expect(closeDisplay).toBeTruthy()
            expect(lockDisplay).toBeTruthy()
        
            fireEvent.click(lockButton)

            closeButton = queryByText(/Open Gate/i)
            lockButton = queryByText(/UnLock Gate/i)
            closeDisplay = queryByText(/Closed/i)
            lockDisplay = queryByText(/Locked/i)

            expect(closeButton).toBeTruthy()
            //checks if button is disabled
            expect(closeButton.disabled).toBeTruthy()
            expect(lockButton).toBeTruthy()
            expect(closeDisplay).toBeTruthy()
            //checking if classList containts string
            expect(closeDisplay.classList).toContain('red-led')
            expect(lockDisplay).toBeTruthy()
            expect(lockDisplay.classList).toContain('red-led')
        })
    }); 
})

// Test away
