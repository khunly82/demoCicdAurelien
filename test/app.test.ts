import { myFunction } from '../src/app';

describe('myFunction', () => {
    it('devrait retourner exactement 42', () => {
        // Exécution
        const result = myFunction();

        // Assertions
        expect(result).toBe(42);
    });

    it('devrait retourner une valeur de type number', () => {
        const result = myFunction();
        expect(typeof result).toBe('number');
    });
});