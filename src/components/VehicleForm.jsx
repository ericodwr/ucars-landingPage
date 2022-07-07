import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const names = [
  'Bus',
  'Larry',
  'SUV',
  'Classic Car',
  'MPV',
  'Truck',
  'Coupe',
  'Pickup',
  'Van (Passenger)',
  'Convertible',
  'Sedan',
  'Van (Goods)',
  'Hatchback',
  'Sport Car',
  'Wagon',
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      display: 'grid',
    },
  },
};

export default function MultipleSelectCheckmarks() {
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <h2 style={{ fontFamily: `'Roboto', sans-serif`, margin: '8px' }}>
        Vehicle Type
      </h2>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">10+ More</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
          variant="outlined"
        >
          {/* <Box m={'1rem'}> */}
          {/* <h2>Vehicle Type</h2> */}
          {/* </Box> */}
          {/* <Grid container spacing={1}> */}
          {names.map((name) => (
            // <Grid item xs={4} sx={{ width: '40px' }}>
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
            // {/* </Grid> */}
          ))}
          {/* </Grid> */}
          {/* Button */}
          <Box
            display="flex"
            flexDirection={'row'}
            justifyContent="space-between"
            sx={{ margin: '1.5rem' }}
          >
            <MenuItem>Clear</MenuItem>
            <Button color="error" variant="contained">
              Save
            </Button>
          </Box>
        </Select>
      </FormControl>
    </div>
  );
}
