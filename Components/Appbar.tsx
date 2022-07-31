import React , { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack';
import { tryAuthenticate } from '../src/3id';
import Link from '../src/Link';

export default function ButtonAppBar() {
  const [did, setdid] = useState('');
  const [text1, settext1] = useState('Connect Wallet');

  async function connect(authFunction:any , callback:any) {
    try {
      settext1('Connecting...')
      const did = await authFunction()
      setdid(did)
      await callback()
      settext1('Wallet Connected')
    } catch (error) {
      console.error(error)
    }
  }

  function hello() {
    console.log('hello')
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" underline="none" color="inherit">
              Ceramic DID
            </Link>
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
          <Stack direction="row" spacing={2}>
            <Button color="inherit" component={Link} noLinkStyle href="/get">
              Get
            </Button> 

            <Button color="inherit" component={Link} noLinkStyle href="/update">
              Update
            </Button>

            <Button variant="contained" onClick={() => connect(tryAuthenticate, hello)}>
              { text1 }
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}