import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider >
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <h1>Comprovante</h1>
            <AppBar title="Comprovante" />
            <TextField
              placeholder="Nome do favorecido"
              label="Nome"
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="R$:"
              label="Valor"
              onChange={handleChange('voucherValue')}
              defaultValue={values.voucherValue}
              margin="normal"
              type="number"
              fullWidth
            />
            <br />

            <label>Data do pagamento</label>
            <TextField
              onChange={handleChange('date')}
              defaultValue={values.date}
              margin="normal"
              type="date"
              fullWidth
            />
            <br />

            <label>Corresponde ao(s) mes(es) de:</label>
            <div>
              <label>JANEIRO</label>
              <TextField
                value="JANEIRO"
                onChange={handleChange('mes')}
                margin="normal"
                type="checkbox"
                fullWidth
              />

              <label>FEVEREIRO</label>
              <TextField
                value="FEVEREIRO"
                onChange={handleChange('mes2')}
                margin="normal"
                type="checkbox"
                className="form-control"
                fullWidth
              />
              <label>MARÇO</label>
              <TextField
                value="MARÇO"
                onChange={handleChange('mes3')}
                margin="normal"
                type="checkbox"
                fullWidth
              />

              <label>ABRIL</label>
              <TextField
                value="ABRIL"
                onChange={handleChange('mes4')}
                margin="normal"
                type="checkbox"
                fullWidth
              />

              <label>MAIO</label>
              <TextField
                value="MAIO"
                onChange={handleChange('mes5')}
                margin="normal"
                type="checkbox"
                fullWidth
              />

              <label>JUNHO</label>
              <TextField
                value="JUNHO"
                onChange={handleChange('mes6')}
                margin="normal"
                type="checkbox"
                fullWidth
              />

              <label>JULHO</label>
              <TextField
                value="JULHO"
                onChange={handleChange('mes7')}
                margin="normal"
                type="checkbox"
                fullWidth
              />

              <label>AGOSTO</label>
              <TextField
                value="AGOSTO"
                onChange={handleChange('mes8')}
                margin="normal"
                type="checkbox"
                fullWidth
              />

              <label>SETEMBRO</label>
              <TextField
                value="SETEMBRO"
                onChange={handleChange('mes9')}
                margin="normal"
                type="checkbox"
                fullWidth
              />

              <label>OUTUBRO</label>
              <TextField
                value="OUTUBRO"
                onChange={handleChange('mes10')}
                margin="normal"
                type="checkbox"
                fullWidth
              />

              <label>NOVEMBRO</label>
              <TextField
                value="NOVEMBRO"
                onChange={handleChange('mes11')}
                margin="normal"
                type="checkbox"
                fullWidth
              />

              <label>DEZEMBRO</label>
              <TextField
                value="DEZEMBRO"
                onChange={handleChange('mes12')}
                margin="normal"
                type="checkbox"
                fullWidth
              />
            </div>
            <br />
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Gerar</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;
