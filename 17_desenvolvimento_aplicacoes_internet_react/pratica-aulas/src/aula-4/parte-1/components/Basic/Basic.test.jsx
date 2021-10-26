import React from 'react';
import Basic from './Basic';
import { render } from '@testing-library/react'; 
// Render porque precisamos renderizar esse element.
// baeElement é algo elacionado ao Render.
import '@testing-library/jest-dom/extend-expect';

describe('Testando Basic Component', () => {
    it('O componente Baisc deve rederizar corretamente', () => {
        const { baseElement } = render(<Basic name="Arthur" />);
        expect(baseElement).toHaveTextContent('Meu Nome é Arthur');
    })
})