import {fireEvent, render , screen} from '@testing-library/react';
import { describe,it } from 'vitest';
import Header from './Header'

describe('header',()=>{
    it('hamburger menu',()=>{
       render(<Header/>);
       const lines = (screen.getByTestId('lines'));
       const menu = (screen.getByTestId('menu'));
       

       expect(lines).toHaveClass('lines');
       expect(menu).toHaveClass('menu');
       
       fireEvent.click(lines);
       
       expect(lines).toHaveClass('active-lines');
       expect(menu).toHaveClass('active-menu');

       fireEvent.click(lines);

       expect(lines).toHaveClass('lines');
       expect(menu).toHaveClass('menu');
       

       
    })
})