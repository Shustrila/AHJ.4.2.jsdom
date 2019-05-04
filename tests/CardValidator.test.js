import listSystems from '../src/js/systems/listSystems';
import CardValidator from '../src/js/CardValidator';

const cardValidator = new CardValidator();

describe('TESTS: luhn algorithm', () => {

});

describe('TESTS: luhn algorithm', () => {
   test('validate true', () => {
      const received = cardValidator.checkValidation('4111111111111111');
      const expected = true;

       expect(received).toBe(expected)
   });

   test('validate false', () => {
      const received = cardValidator.checkValidation('9234765464357484');
      const expected = false;

      expect(received).toBe(expected)
   });

   test('validate false empty field', () => {
      const received = cardValidator.checkValidation('');
      const expected = false;

      expect(received).toBe(expected)
   });
});

describe('TESTS: check prefixes', () => {
   test('name system visa one number', () => {
      const checkPrefixes = cardValidator.checkPrefixes(listSystems, '4');
      const expected = 'Visa';

      checkPrefixes.then(received => expect(received).toBe(expected));
   });

   test('name system visa', () => {
      const checkPrefixes = cardValidator.checkPrefixes(listSystems, '4111111111111111');
      const expected = 'Visa';

      checkPrefixes.then(received => expect(received).toBe(expected));
   });


   test('name system visa resolve empty', () => {
      const checkPrefixes = cardValidator.checkPrefixes([], '4');
      const expected = undefined;

      checkPrefixes.then(received => expect(received).toBe(expected));
   });
});
