import ColorPick from "./ColorPick"
const getButtonStyle = () => {
return { backgroundColor: ColorPick.getPrimary(),
    color:"white",
    textTransform: "none",
    fontSize: "1.5rem",
    padding: "16px 32px",
    borderRadius: "25px",
    "&:hover": {
      backgroundColor: ColorPick.getHoverColorPrimary(),
    },
    border: "2px solid black",
    
   }
}

export default {getButtonStyle}