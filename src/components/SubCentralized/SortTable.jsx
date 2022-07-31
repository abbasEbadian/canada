import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';

export default function BasicSelect() {
  const [age, setAge] = React.useState('popular');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const selectText = React.useMemo(() => "sort by: "+age, [age])

  return (
    <Box sx={{ minWidth: 120, maxWidth: 200, my: 2}}>
      <FormControl fullWidth   >
        <TextField
          type={"text"}
          value={age}
          onChange={handleChange}
          select
          fillWidth
          variant='standard'
          color="error"
          className='text-white no-border-select'
        >
          <MenuItem value={"popular"}>sort by: Popular</MenuItem>
          <MenuItem value={"high"}>sort by: High</MenuItem>
          <MenuItem value={"low"}>sort by: Low</MenuItem>
        </TextField>
      </FormControl>
    </Box>
  );
}
