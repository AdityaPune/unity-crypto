import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Theme, useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';

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

const docTypes = [
    
  "Balance Sheet",  
  "Invoice",
    "Real Estate Agreements",
    
];

function getStyles(name: string, docName: string[], theme: Theme) {
  return {
    fontWeight:
      docName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


export default function PaymentForm() {
  const theme = useTheme();
  const [docName, setdocName] = React.useState<string[]>([]);

  const handleChangeSector = (event: SelectChangeEvent<typeof docName>) => {
    const {
      target: { value },
    } = event;
    setdocName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  return (
    <React.Fragment>

      <Grid container spacing={3}>
      <Grid xs={12} sm={6} style={{marginTop:"6px",}} >
        <FormControl sx={{ m: 3, width: 350 }}>
        <InputLabel id="demo-multiple-name-label">Document Type</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={docName}
          onChange={handleChangeSector}
          input={<OutlinedInput label="Document Type" />}
          MenuProps={MenuProps}
        >
          {docTypes.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, docName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
        <Button variant="contained" component="label"  style={{marginTop:"15px", marginLeft:"100px"}}>
        Upload
        <input hidden accept="image/*" multiple type="file" />
      </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}