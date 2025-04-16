import { Box, Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ColorPick from "../tools/ColorPick";
import ButtonDesign from "../tools/ButtonDesign";
const BackButton = ({ onClick }) => {

return <Box sx={[ButtonDesign.getButtonStyle,{
    width:"15px",
    height:"15px",
    backgroundColor: ColorPick.getPrimary(),
    color:"white", 
    borderRadius:"50px",
    alignItems:"center",
    justifyContent:"center",
    display:"flex",
    padding:"25px",
    
    
}]}
onClick={onClick}>
    <ArrowBackIcon sx={{transform:"scale(1.5)"}}/>
</Box>

}
export default BackButton;