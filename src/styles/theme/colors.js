export const colors = {
  greys: [
    '#f3f3f3',
    '#afafaf',
    '#e3e3e6',
    '#898f99',
    '#181e1c',
    '#2b2435',
    '#171719',
  ],
  voilets: ['#8a4058', '#78333e', '#6c1d61'],
  yellows: ['#fdd003', '#f1a15e', '#d99957', '#e19a57'],
  greens: ['#10aa43'],
  blues: ['#19abe4', '#319eaa', '#196094'],
  reds: ['#e42b55'],
  white: '#fff',
  transparent: 'transparent',
};
const baseColor = {
  paper: colors.white,
  primary: colors.voilets[2],
  secondary: colors.greys[5],
  tertiary: colors.blues[1],
  success: colors.greens[0],
  danger: colors.reds[0],
  text: colors.greys[4],
};

export default baseColor;
