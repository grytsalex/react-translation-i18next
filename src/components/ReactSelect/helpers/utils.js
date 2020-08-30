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