import React, { useState } from 'react';
import { TextField, Checkbox, FormControlLabel, Select, MenuItem, InputLabel, FormControl, Button,Box } from '@mui/material';
import './first.scss';

const FormComponent = ({ formFields }) => {
  const [formData, setFormData] = useState({});
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    // console.log(formData);
  };

  const handleSubmit = () => {
    console.log(formData)
  };
  return (
    <>
    <Box
      component="form"
      className="form-container"
     
      noValidate
      autoComplete="off"
    >
    {formFields.map((field) => (
            <div key={field.label}>
              {field.type === 'textField' ? (
                <div className='box'>
                <InputLabel>
                  {field.label}
                  <TextField
                    name={field.label}
                    defaultValue={field.DefaultValue}
                    value={formData[field.label]}
                    onChange={handleInputChange}
                  />
                </InputLabel>
                </div>
              ) : field.type === 'selectBox' ? (
                <div className='box'>
                <FormControl variant="outlined" >
                  <InputLabel>{field.label}</InputLabel>
                  <Select
                    label={field.label}
                    name={field.label}
                    value={formData[field.label]}
                    onChange={handleInputChange}
                    
                  >
                    {field.options.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                </div>
              ) : (
                <div className='box'>
                <InputLabel>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name={field.label}
                        checked={!!formData[field.label]}
                        onChange={handleInputChange}
                        color="primary"
                      />
                    }
                    label={field.label}
                  />
                </InputLabel>
                </div>
              )}
            </div>
          ))}
    </Box>
    <Button variant='contained' onClick={handleSubmit}>Submit</Button>
    </>
  );
}

export default FormComponent;