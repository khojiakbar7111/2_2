import {Button, Rating, Select, MenuItem, InputLabel, Stack,Container,TextField, Tooltip, Typography,Backdrop,CircularProgress,Dialog} from "@mui/material";
import React from "react";
import {useModal} from "./hooks/use-modal"

function App() {
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value)
  }; 

  const { close,isopen,open } = useModal();

  const { close:modalClose,isopen:modalIsopen,open:modalOpen } = useModal();
  return (
    <>
      <Container >
        <Stack sx={{pl:'450px'}} >
        <InputLabel id="demo-simple-select-label">Yoshingizni oraligi</InputLabel>

<Select 
labelId="demo-simple-select-label"
id="demo-simple-select-label"
 sx={{maxWidth:'200px', height:"40px"}} value={age}
  onChange={handleChange}>

   <MenuItem value={15}>10-15</MenuItem>
   <MenuItem value={20}>15-20</MenuItem>
   <MenuItem value={30}>20-30</MenuItem>
   <MenuItem value={40}>30-40</MenuItem>
</Select>

<Tooltip >Jinsingizni tanlang </Tooltip>

<Select 
labelId="demo-simple-select-label"
id="demo-simple-select-label"
 sx={{maxWidth:'200px', height:"40px" , mt:"10px"}} value={age}
  onChange={handleChange}>

   <MenuItem value={"o'gil"}>o'gil</MenuItem>
   <MenuItem value={"qiz"}>qiz</MenuItem>
   <MenuItem value={"murakkab shaxs"}>muarkkab shaxs</MenuItem>
   <MenuItem value={"shart emas"}>shat emas</MenuItem>
</Select>
      <Stack sx={{maxWidth:"200px", mt:"10px"}}>
    <Tooltip >ismingizni yozing</Tooltip>
   <TextField sx={{mt:"10px"}} d="outlined-basic" label="Outlined" variant="outlined" placeholder="ismingizni kiriting"/>
      </Stack>

      <Stack sx={{maxWidth:"200px", mt:"10px"}}>
    <Tooltip >Familyangizni yozing</Tooltip>
   <TextField sx={{mt:"10px"}} d="outlined-basic" label="Outlined" variant="outlined" placeholder="familyangizni kiriting"/>
      </Stack>
           

      <Button sx={{maxWidth:"200px", mt:"10px",mb:"10px"}} variant="contained" onClick={()=> open()}>open</Button>
     <Backdrop open={isopen} onClick={() => close()}>
      <CircularProgress />
     </Backdrop>
      <Button sx={{maxWidth:"200px", mt:"10px",mb:"10px"}} onClick={modalOpen} variant="outlined">ModalOpen</Button>
     <Dialog open={modalIsopen} onClose={modalClose}>
      <Stack p='20px' >
        <h3>siznig yoshingiz ?</h3>
        <h3>jinsingiz ?</h3>
        <h3>ismingiz ?</h3>
        <h3>familyangiz ?</h3>
    <p>
      <img src="https://image.shutterstock.com/image-vector/attention-icon-danger-symbol-flat-260nw-728161114.jpg" alt="" />
    </p>
      </Stack>
     </Dialog>
      


        </Stack>
        
      
      </Container>
    </>
  )
}

export default App
