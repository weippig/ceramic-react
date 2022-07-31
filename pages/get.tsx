import React, { useState } from 'react';
import { getBasicProfile } from '../src/basicProfile';
import type { NextPage } from 'next';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


const TT: NextPage = () => {
  const [profile, setProfile] = useState('')
  const [modeltype, setModeltype] = useState('');
  
  const getprofile = async() => {
    const profileJSON = await getBasicProfile()
    setProfile(profileJSON)
  }

  const handleChange = async (event: SelectChangeEvent) => {
    setModeltype(event.target.value as string);
    await getprofile()
  };

  return(
    <Box
    component="div"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
  >
    <Box
      sx={{
        my: 4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box sx={{ 
        minWidth: 150,
        my: 3,
      }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Get BasicProflie
        </Typography>
        <Box>
          <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Data Model</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={modeltype}
            label="Data Model"
            onChange={handleChange}
          >
              <MenuItem value={"BasicProfile"}>BasicProfile</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
          </Select>
      </FormControl>
      </Box>
      {
        Object.entries(profile).map(([key, value]) => (
              <><p>{key} : {value}</p></>
      )
      )
      }
      </Box>
      </Box>
    </Box>
    
  )
}

export default TT;