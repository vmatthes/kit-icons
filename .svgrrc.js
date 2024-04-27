module.exports = {
  template: require('./src/template.js'),
  typescript: true,
  icon: true,
  replaceAttrValues: { '#000': "{props.color || '#000'}" },
  svgProps: {
    width: `{props.width || 16}`,
    height: `{props.height || 16}`,
  },
  expandProps: 'start',
};
