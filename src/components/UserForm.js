import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import Confirm from './Confirm';

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: '',
    voucherValue: '',
    monthChange: '',
    mes: '',
    mes2: '',
    mes3: '',
    mes4: '',
    mes5: '',
    mes6: '',
    mes7: '',
    mes8: '',
    mes9: '',
    mes10: '',
    mes11: '',
    mes12: '',
    date: '',

  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, voucherValue, mes, mes2, mes3, mes4, mes5,
      mes6, mes7, mes8, mes9, mes10, mes11, mes12, date
    } = this.state;
    const values = {
      firstName, voucherValue, mes, mes2, mes3, mes4, mes5,
      mes6, mes7, mes8, mes9, mes10, mes11, mes12, date
    };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      default:
    }
  }
}

export default UserForm;
