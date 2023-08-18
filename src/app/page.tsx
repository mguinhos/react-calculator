"use client";

import { TextField, Button, Stack, Box } from '@mui/material'
import { useRef, useState } from 'react';
import * as math from 'mathjs';

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

function Calculator({ ...props }) {
  let inputRef = useRef({value: ''});

  return (
    <CalculatorBox {...props}>
      <CalculatorTextField inputRef={inputRef}/>
      <CalculatorBox>
      <CalculatorRow>
          <CalculatorButton onClick={() => inputRef.current.value = '0'}>C</CalculatorButton>
          <CalculatorButton>x²</CalculatorButton>
          <CalculatorButton>sqrt(x)</CalculatorButton>
          <CalculatorButton onClick={() => inputRef.current.value = math.evaluate(inputRef.current.value)}>=</CalculatorButton>
        </CalculatorRow>
        <CalculatorRow>
          <CalculatorInsertButton inputRef={inputRef}>7</CalculatorInsertButton>
          <CalculatorInsertButton inputRef={inputRef}>8</CalculatorInsertButton>
          <CalculatorInsertButton inputRef={inputRef}>9</CalculatorInsertButton>
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
          <CalculatorButton>+/-</CalculatorButton>
          <CalculatorInsertButton inputRef={inputRef}>0</CalculatorInsertButton>
          <CalculatorButton>.</CalculatorButton>
          <CalculatorButton>%</CalculatorButton>
        </CalculatorRow>
      </CalculatorBox>
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
