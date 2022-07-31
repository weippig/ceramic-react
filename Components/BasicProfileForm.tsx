import React , { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Button } from '@mui/material';
import { updateBasicProfile } from '../src/basicProfile';
import { IBasicProfile } from '../src/interface/dataModel';

export default function BasicProfileForm() {
  const [countryInput, setCountryInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [ageInput, setAgeInput] = useState('');
  const [genderInput, setGenderInput] = useState('');
  const [status, setStatus] = useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameInput(event.target.value as string);
  };

  const handleCountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountryInput(event.target.value as string);
  };

  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAgeInput(event.target.value as string);
  };

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGenderInput(event.target.value as string);
  };

  const handleSubmit = async () => {
    const basicProfile: IBasicProfile = {
      name: nameInput,
      age: ageInput,
      country: countryInput,
      gender: genderInput
    }
    try { 
      await updateBasicProfile(basicProfile)
      setStatus('Success')
    } 
    catch(err){
      setStatus('Something Wrong :(')
    }
  }
  
  return (
    <Box 
      sx={{
        my: 4,
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <FormControl>
      <Grid container columns={4} spacing={2} >
        <Grid item xs={4} style={{textAlign: "center"}}>
        <Typography variant="body2" gutterBottom>Name</Typography>
          <TextField
              required
              id="outlined-required"
              label="Name"
              onChange= {handleNameChange}
            />
        </Grid>
        <Grid item xs={4} style={{textAlign: "center"}}>
        <Typography variant="body2" gutterBottom>Country</Typography>
          <TextField
              required
              id="outlined-required"
              label="Country"
              onChange= {handleCountryChange}
            />
        </Grid>
        <Grid item xs={4} style={{textAlign: "center"}}>
        <Typography variant="body2" gutterBottom>Age</Typography>
          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            onChange= {handleAgeChange}
          />
        </Grid>
        <Grid item xs={4} style={{textAlign: "center"}}>
        <FormControl>
        <Typography variant="body2" gutterBottom>Gender</Typography>
          {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onChange={handleGenderChange} 
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
      <Box 
        sx={{
          mt: 5
        }}
        style={{
          textAlign: "center"
        }}>
          <Box
          sx={{
            mb: 2
          }}>
          { status }
          </Box>
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
      </FormControl>
    </Box>
  );
}
