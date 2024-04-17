export const alignConsts = ['start', 'end'];
alignConsts.$labels = {
  'Start (start)': 0,
  'Default (end)': 1,
};
export const sizeConsts = ['', 'sm', 'md', 'lg'];
sizeConsts.$labels = {
  'Default (md)': 0,
  'Small (sm)': 1,
  'Medium (md)': 2,
  'Large (lg)': 3,
};

const CvAccordionConsts = { alignConsts, sizeConsts };
export default CvAccordionConsts;
