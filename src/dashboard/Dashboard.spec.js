import React from 'react'
import {render} from '@testing-library/react';
import renderer from 'react-test-renderer'; // 1: install this npm module as a dev dependency
import Dashboard from './Dashboard';


describe.skip('<Dashboard.js />', () => {
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
    }); 
})

// Test away
