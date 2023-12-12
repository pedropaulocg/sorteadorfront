import { useState } from 'react';
import './App.css';
import { Box, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import axios from 'axios'
import Button from '@mui/joy/Button';

function App() {
  const instance = axios.create({
    baseURL: 'http://15.229.118.220:3030',
  });
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(false)
  const [selectedName, setSelectedName] = useState()
  const names = [
    "Pedro",
    "Ana Flavia",
    "Tia Wan",
    "Tio Paulo",
    "Paula",
    "Vovó Sina",
    "Tia Mila",
    "Laura",
    "Luisa"
  ]
  const sortear = async () => {
    if(!user) return
    try{
      setLoading(true)
      const { data } = await instance.get(`/sortear/${user}`);
      setSelectedName(data.name)
      setLoading(false)
    }catch(e){
      console.log(e)
      if(e.request.status === 403){
        setSelectedName("Voce ja tirou o seu!")
        setLoading(false)
        return
      }
    }
  }
  return (
    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '10vh', marginTop: 10}}>
      <Box sx={{width: '400px'}}>
        {/* <Autocomplete
          id="combo-box-demo"
          options={names}
          renderInput={(params) => <TextField {...params} label="Quem é você?" />}
        /> */}
        <FormControl sx={{width: '100%'}}>
          <InputLabel id='priority'>Quem é você?</InputLabel>
          <Select
          labelId='priority'
          label='Quem é você?'
          value={user}
          sx={{ width: '100%' }}
          onChange={(e) => setUser(e.target.value)}
          >
          <MenuItem value={null}>
            <em>Nenhum</em>
          </MenuItem>
          {
            names.map((item, idx) => {
              return <MenuItem value={item} key={idx}>{item}</MenuItem>
            })
          }
        </Select>
        </FormControl>
        <Button loading={loading} onClick={sortear} disabled={!!selectedName} sx={{marginTop: 1, width: '100%', marginBottom: 3}}>Sortear</Button>
        {selectedName && 
          <Typography sx={{marginY: 2}}>
            {selectedName}
          </Typography>
        }
      </Box>
    </Box>
  );
}

export default App;
