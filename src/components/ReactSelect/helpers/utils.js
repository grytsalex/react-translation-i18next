export const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
  { value: "pasta", label: "Pasta" },
  { value: "coffee", label: "Coffee" },
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "tomato", label: "Tomato" },
  { value: "cucumber", label: "Cucumber" },
  { value: "ice cream", label: "Ice Cream" },
  { value: "marshmello", label: "Marshmello" },
  { value: "oil", label: "Oil" },
  { value: "burger", label: "Burger" },
  { value: "hot dog", label: "Hot Dog" },
];

const brandColor = 'green';

export const customStyles = {
  control: (base, state) => ({
    ...base,
    boxShadow: state.isFocused ? 0 : 0,
    borderColor: state.isFocused
      ? brandColor
      : 'red'
  })
};