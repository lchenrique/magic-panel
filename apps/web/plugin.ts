import plugin from "tailwindcss/plugin"
export const magicPanelPlugin =  plugin(function({ addVariant }) {
  addVariant('close', ['&:before', '&:after'])
}) 