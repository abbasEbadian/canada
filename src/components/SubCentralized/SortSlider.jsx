import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Input, TextField } from '@mui/material';

export default function SelectLabels() {
  const [age, setAge] = React.useState('popular');
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <TextField
          value={age}
          onChange={handleChange}

          select
          className='text-white no-border-select' 
          variant='standard'
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'popular'}>sort by: Popular</MenuItem>
          <MenuItem value={'top'}>sort by: Top</MenuItem>
          <MenuItem value={'low'}>sort by: Low</MenuItem>
        </TextField>

      </FormControl>

    </div>
  );
}
