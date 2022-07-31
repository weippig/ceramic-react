import React , { useState } from 'react';
import type { NextPage } from 'next';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { tryAuthenticate } from '../src/3id';
import BasicSelect from '../Components/select';
import { A } from './test'
import CeramicClientHelper from '../src/helper/CeramicHelper';
import BasicProfileForm from '../Components/BasicProfileForm';

import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';

const Update: NextPage = () => {
  const [did, setdid] = useState('');
  const [text1, settext1] = useState('Connect Wallet');

  return (
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
        <Typography variant="h4" component="h1" gutterBottom>
          Update BasicProflie
        </Typography>
        <BasicSelect />
          <BasicProfileForm />
      </Box>
    </Box>
    
  );
};

export default Update;
