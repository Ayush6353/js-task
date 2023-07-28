import React from 'react'
import Box from '@mui/material/Box';
import { Grid, Typography } from '@mui/material';
import MovingIcon from '@mui/icons-material/Moving';
import { green } from '@mui/material/colors';
import mainlogo from '../../src/img/mainlogo.svg';

export default function Boxs() {
  return (
    
      <Grid container spacing={2} sx={{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"rgb(223, 219, 219, 0.459)",height:250,width:"100%"}}>
      <Grid item xs={12} sm={12} lg={6} sx={{display:"flex",justifyContent:"center"}}>
      <Box
        sx={{ width: 347, height: 185, backgroundColor: 'white', borderRadius: '1rem', display: 'flex', alignItems: 'center',justifyContent:"center" }}>
        <div style={{ display: "flex", flexDirection: "column", padding: 15, gap: 8 }} >
          <div style={{ display: "flex" ,gap:15}}>
            <div style={{display:"flex" ,flexDirection:"column"}}>
          <Typography variant="h6" component="h2" sx={{ display: "flex", fontSize: 24, fontFamily: 'Montserrat', fontWeight: 'SemiBold' }}>
            Total Employers
          </Typography>
          <Typography variant="h4" component="h2" sx={{ display: "flex", fontSize: 34, fontFamily: 'Poppins', fontWeight: 'SemiBold' }}>
            7460
          </Typography>
          </div>
            <img src={mainlogo} style={{height:63, width:51}} />
          </div>
          <Typography variant="h6" component="h2" sx={{ display: "flex", fontSize: 16, fontFamily: 'Montserrat', fontWeight: 'SemiBold' }}>
            <MovingIcon sx={{ color: green[500], marginRight: 2, height: 26.17, width: 16 }} />
            5% increase than last month
          </Typography>
        </div>
      </Box>
      </Grid>
      <Grid item xs={12} sm={12} lg={6} sx={{display:"flex",justifyContent:"center"}}>
      <Box
        sx={{ width: 347, height: 185, backgroundColor: 'white', borderRadius: '1rem', display: 'flex', alignItems: 'center',justifyContent:"center" }}>
        <div style={{ display: "flex", flexDirection: "column", padding: 15, gap: 8 }} >
          <div style={{ display: "flex" ,gap:15}}>
            <div style={{display:"flex" ,flexDirection:"column"}}>
          <Typography variant="h6" component="h2" sx={{ display: "flex", fontSize: 24, fontFamily: 'Montserrat', fontWeight: 'SemiBold' }}>
            Total Employers
          </Typography>
          <Typography variant="h4" component="h2" sx={{ display: "flex", fontSize: 34, fontFamily: 'Poppins', fontWeight: 'SemiBold' }}>
            7460
          </Typography>
          </div>
            <img src={mainlogo} style={{height:63, width:51}} />
          </div>
          <Typography variant="h6" component="h2" sx={{ display: "flex", fontSize: 16, fontFamily: 'Montserrat', fontWeight: 'SemiBold' }}>
            <MovingIcon sx={{ color: green[500], marginRight: 2, height: 26.17, width: 16 }} />
            5% increase than last month
          </Typography>
        </div>
      </Box>
      </Grid>
      </Grid>
  )
}

