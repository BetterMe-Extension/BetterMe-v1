import mealSearch from './__mocks__/mealSearch.js';

// jest.mock('axios');

describe('API testing', () => {
  test('able to make API get request', () => {
    const response = mealSearch('burger');
    console.log(response);
  });
});
// describe('Unit testing React components', () => {
//     describe('LabeledText', () => {
//       let text;
//       const props = {
//         label: 'Mega',
//         text: 'Markets',
//       };

//       beforeAll(() => {
//         text = render(<LabeledText {...props} />);
//       });

//       test('Renders the passed-in text with the label in bold', () => {
//         expect(text.getByText('Mega:').nextSibling).toHaveTextContent('Markets');
//         expect(text.getByText('Mega:')).toHaveStyle('font-weight: bold');
//       });
//     });
// }
