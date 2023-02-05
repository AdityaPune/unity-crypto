import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';

import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import { Theme, useTheme } from '@mui/material/styles';

import Select, { SelectChangeEvent } from '@mui/material/Select';


function valuetext(value: number) {
  return `${value}`;
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const sectors = [
    
    "Administration",
    "Agriculture",
    "Arts & Entertainment",
    "Construction",
    "Educational Services",
    "Finance and Insurance",
    "Food Services",
    "Healthcare",
    "Information Technology",
    "Manufacturing",
    "Mining",
    "Real Estate",
    "Retail Trade",
    "Transportation",
    "Technical Services",
    "Utilities",
    "Wholesale Trade "
];

function getStyles(name: string, sectorName: string[], theme: Theme) {
  return {
    fontWeight:
      sectorName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function AddressForm() {
  const theme = useTheme();
  const [sectorName, setsectorName] = React.useState<string[]>([]);

  const handleChangeSector = (event: SelectChangeEvent<typeof sectorName>) => {
    const {
      target: { value },
    } = event;
    setsectorName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const [value, setValue] = React.useState<number[]>([9, 20]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  }
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
          inputProps={{ type: 'number'}} 
            required
            id="loanAmount"
            name="loanAmount"
            label="Loan Amount"
            fullWidth
            autoComplete="loan-amount"
            variant="standard"
          />
        </Grid>



        
        <Grid item xs={12} sm={6}>
        <Typography style={{paddingLeft:"70px"}}>
          Yield Tolerance
        </Typography>
        <Box sx={{ width: 200 }}>
      <Slider
      style={{paddingTop:"25px", marginLeft:"25px"}}
        getAriaLabel={() => 'Annual Percentage'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={5} max={30}
      />
    </Box>

        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="period-months"
            name="period-months"
            label="Loan Period (in Months)"
            fullWidth
            autoComplete="loan-period"
            variant="standard"
          />
        </Grid>
        <Grid xs={12} sm={6} style={{marginTop:"6px"}} >
        <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Sector</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={sectorName}
          onChange={handleChangeSector}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {sectors.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, sectorName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}