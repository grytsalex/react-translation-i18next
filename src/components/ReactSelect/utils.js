// import chroma from 'chroma-js';

const brandColor = 'green';

export const customStyles = {
  control: (base, state) => ({
    ...base,
    boxShadow: state.isFocused ? 0 : 0,
    borderColor: state.isFocused
      ? brandColor
      : 'red'
//     '&:hover': {
//       borderColor: state.isFocused
//         ? brandColor
//         : base.borderColor,
//     }
  })
};