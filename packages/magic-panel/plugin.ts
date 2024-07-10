import plugin from "tailwindcss/plugin"
 const magicPanelPlugin =  plugin(function({ addVariant }) {
  addVariant('close', ['&:before', '&:after'])
}) 

export  {
  magicPanelPlugin
}