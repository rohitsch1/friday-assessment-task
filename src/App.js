import './App.css';
import FormComponent from './compoents/First';

function App() {
 

  return (
    <div className="App">
      <div className='Input'>
        <FormComponent
          formFields={[
            { label: 'Customer-ID', type: 'textField', DefaultValue:"123" },
            { label: 'Customer-Product', type: 'textField' , DefaultValue:"sofa" },
            { label: 'Customer-Number', type: 'textField' , DefaultValue:"5555" },
            { label: 'Name', type: 'textField' , DefaultValue:"Rohit" },
            { label: 'Second Name', type: 'textField', DefaultValue:"singh"  },
            { label: 'Billing Address', type: 'checkBox' },
            { label: 'Shipping Address', type: 'textField', DefaultValue:"aligarh"  },
            {
              label: 'subscription',
              type: 'selectBox',
              options: [
                { label: 'Yes', value: 'Yes' },
                { label: 'No', value: 'No' },

              ],
            },
            {
              label: 'Gender',
              type: 'selectBox',
              options: [
                { label: 'Option 1', value: 'option1' },
                { label: 'Option 2', value: 'option2' },
                { label: 'Option 3', value: 'option3' },
              ],
            }
          ]}
          
        />
        
      </div>
    </div>
  );
}

export default App;




