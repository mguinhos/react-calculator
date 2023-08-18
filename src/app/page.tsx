"use client";

import { TextField, Button, Stack, Box, Typography, IconButton } from '@mui/material'
import { useRef } from 'react';
import * as math from 'mathjs';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function CalculatorRow({ children, ...props }: any) {
  return <Stack {...props} direction="row" spacing={1} padding={0.5} style={{display: 'flex', width: '100%', height: '100%'}}>{children}</Stack>;
}

function CalculatorTextField({ ...props }) {
  return (
    <TextField {...props} fullWidth
        inputProps={{style: {textAlign: 'right'}}}
    />
  );
}

function CalculatorButton({ children, ...props }: any) {
  return <Button {...props} variant='contained' sx={{width: '100%', height: '100%'}}>{children}</Button>;
}

function CalculatorInsertButton({ children, inputRef, ...props }: any) {
  return <CalculatorButton {...props} onClick={() => inputRef.current.value += children}>{children}</CalculatorButton>
}

function CalculatorBox({ children,  ...props }: any) {
  return <Box {...props} sx={{display: 'flex', flexDirection: 'column', width: '100%', height: '100%'}}>{children}</Box>;
}

function Footer({ ...props }: any) {
  return (
    <Box {...props} padding={2} sx={{justifyItems: 'center', alignItems: 'center', textAlign: 'center'}}>
      <Typography variant='subtitle1'>2023 - Marcel Guinhos - MIT License</Typography>
      <Typography variant='subtitle2'>Criado com NextJS e MaterialUI</Typography>
      <IconButton size="large" href='https://github.com/mguinhos'><GitHubIcon /></IconButton>
      <IconButton size="large" href='https://www.linkedin.com/in/marcel-guinhos'><LinkedInIcon /></IconButton>
    </Box>
  );
}

function Calculator({ ...props }: any) {
  let inputRef = useRef({value: ''});

  return (
    <CalculatorBox {...props}>
      <CalculatorTextField inputRef={inputRef}/>
      <CalculatorBox>
      <CalculatorRow>
          <CalculatorButton onClick={() => inputRef.current.value = '0'}>C</CalculatorButton>
          <CalculatorButton onClick={() => inputRef.current.value = `sqrt(${inputRef.current.value})`}>sqrt</CalculatorButton>
          <CalculatorButton onClick={() => inputRef.current.value = `${inputRef.current.value}^`}>^</CalculatorButton>
          <CalculatorButton onClick={() => inputRef.current.value = math.evaluate(inputRef.current.value)}>=</CalculatorButton>
        </CalculatorRow>
        <CalculatorRow>
          <CalculatorInsertButton inputRef={inputRef}>1</CalculatorInsertButton>
          <CalculatorInsertButton inputRef={inputRef}>2</CalculatorInsertButton>
          <CalculatorInsertButton inputRef={inputRef}>3</CalculatorInsertButton>
          <CalculatorInsertButton inputRef={inputRef}>+</CalculatorInsertButton>
        </CalculatorRow>
        <CalculatorRow>
          <CalculatorInsertButton inputRef={inputRef}>4</CalculatorInsertButton>
          <CalculatorInsertButton inputRef={inputRef}>5</CalculatorInsertButton>
          <CalculatorInsertButton inputRef={inputRef}>6</CalculatorInsertButton>
          <CalculatorInsertButton inputRef={inputRef}>*</CalculatorInsertButton>
        </CalculatorRow>
        <CalculatorRow>
          <CalculatorInsertButton inputRef={inputRef}>7</CalculatorInsertButton>
          <CalculatorInsertButton inputRef={inputRef}>8</CalculatorInsertButton>
          <CalculatorInsertButton inputRef={inputRef}>9</CalculatorInsertButton>
          <CalculatorInsertButton inputRef={inputRef}>/</CalculatorInsertButton>
        </CalculatorRow>
        <CalculatorRow>
          <CalculatorButton onClick={() => inputRef.current.value = (inputRef.current.value.startsWith('-') ? '+' + inputRef.current.value.slice(1): '-' + (inputRef.current.value.startsWith('+') ? inputRef.current.value.slice(1) : inputRef.current.value))}>+/-</CalculatorButton>
          <CalculatorInsertButton inputRef={inputRef}>0</CalculatorInsertButton>
          <CalculatorInsertButton inputRef={inputRef}>.</CalculatorInsertButton>
          <CalculatorInsertButton inputRef={inputRef}>%</CalculatorInsertButton>
        </CalculatorRow>
      </CalculatorBox>
      <Footer/>
    </CalculatorBox>
  );
}

export default function Home() {
  return (
    <>
      <Calculator/>
    </>
  );
}
