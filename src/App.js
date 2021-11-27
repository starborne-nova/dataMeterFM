import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { grid } from '@mui/system';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import Stack from '@mui/material/Stack';
import Slider, { SliderThumb } from '@mui/material/Slider';
import Button from '@mui/material/Button';

const marks = [
  {
    value: 0,
    label: '0 GB',
  },
  {
    value: 1000,
    label: '1000 GB',
  },
];

function valuetext(value) {
  return `${value}°C`;
}

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: 'white',
  background: 'hsl(228, 56%, 26%)'

}));

const stackItem = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  justifyContent: 'center',
  textAlign: 'center',
  color: 'white'
}));



export default function App() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        backgroundColor: "transparent",
        color: "white"
        
      }}>
      <Box sx={{
        flexGrow: 1,
        marginTop: '35%'
        
      }}>
        <Grid container spacing={3}
        sx={{
          alignItems: 'flex-end'
        }}>
          <Grid item xs={4}>
            <Item
            sx={{
            width:'340px',
            height:'160px',
            pt: 6,
            borderRadius: '25px 60px 25px 25px'
          }}>
              <Stack spacing={2}>
                <stackItem>
                  <Typography
                  sx={{
                    justifyContent: 'start',
                    textAlign: 'start',
                    ml: 10   
                  }}>
                    <img src='./images/logo.svg'/>

                  </Typography>
                  </stackItem>
                <stackItem>
                  <Button
                    variant="contained"
                    sx={{
                      minWidth: '50px',
                      height: '50px',
                      background: 'hsl(229, 57%, 11%)',
                      mx: 1
                    }} >
                    <img src='./images/icon-document.svg' />
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      minWidth: '50px',
                      height: '50px',
                      background: 'hsl(229, 57%, 11%)',
                      mx: 1
                    }}>
                    <img src='./images/icon-folder.svg' />
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      minWidth: '50px',
                      height: '50px',
                      background: 'hsl(229, 57%, 11%)',
                      mx: 1
                    }}>
                    <img src='./images/icon-upload.svg' />
                  </Button>
                </stackItem>

              </Stack>
            </Item>
          </Grid>
          <Grid item xs={8}>
            <Item
            sx={{
              borderRadius: '25px',
              py: 5
            }}>
              <Stack spacing={2}>
                <stackItem>
                  <Typography
                    sx={{
                      fontWeight: '300',
                      textAlign: 'start',
                      ml: 6

                    }}>
                    You've used <strong>850 GB</strong> of your storage
                  </Typography>
                </stackItem>
                <stackItem>

                  <Slider
                    aria-label="Always visible"
                    min={0}
                    max={1000}
                    defaultValue={850}
                    getAriaValueText={valuetext}
                    step={1}
                    marks={marks}
                    valueLabelDisplay="on"
                    disabled={true}
                    sx={{
                      color: '#52af77',
                      height: 16,
                      width: 650,
                      '& .MuiSlider-rail': {
                        background: 'hsl(229, 57%, 11%)',
                        outline: 'hsl(229, 57%, 11%) solid 5px'

                      },
                      '& .MuiSlider-track': {
                        border: 'none',
                        background: 'linear-Gradient(to right, hsl(6, 100%, 80%) 50%, hsl(335, 100%, 65%))'
                      },
                      '& .MuiSlider-thumb': {
                        height: 16,
                        width: 16,
                        backgroundColor: '#fff',
                        border: 'none',
                        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
                          boxShadow: 'inherit',
                        },
                        '&:before': {
                          display: 'none',
                        },
                      },
                      '& .MuiSlider-valueLabel': {
                        lineHeight: 1.2,
                        fontSize: 36,
                        background: 'unset',
                        padding: 0,
                        width: 120,
                        height: 64,
                        borderRadius: 10,
                        backgroundColor: 'white',
                        color: 'hsl(229, 57%, 11%)',
                        transformOrigin: 'bottom left',
                        transform: 'translate(0%, -100%) scale(0)',
                        '&:before': { display: 'none' },
                        '&.MuiSlider-valueLabelOpen': {
                          transform: 'translate(0%, -100%) scale(1)',
                        }
                      },
                      '& .MuiSlider-markLabel': {
                        color: 'hsl(243, 100%, 93%)',
                        fontWeight: '800',
                        marginTop: '15px'
                      },
                      '& .MuiSlider-mark': {
                        visibility: 'hidden'
                      }
                    }}
                  />
                </stackItem>
              </Stack>
            </Item>
          </Grid>
        </Grid>
      </Box>

    </Container>
  );
}