import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import logo from '../../src/imagens/LASMCE.png';
import jsPDF from 'jspdf';

export class Confirm extends Component {

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  pdfGenerate = () => {
    var doc = new jsPDF('landscape', 'px', 'false', [8, 6]);
    doc.getDrawColor()
    doc.addPage(window.print())
  }

  render() {
    const ref = React.createRef();
    const {
      values: { firstName, voucherValue, mes, mes2, mes3, mes4, mes5, mes6, mes7, mes8, mes9, mes10, mes11, mes12, date }
    } = this.props;

    var _str = date;
    var dateBr = _str.split('-').reverse().join('-');

    return (

      <div style={{ background: '#faa29b' }} ref={ref}>
        <AppBar title="Confirm User Data" />
        <List >
          <ListItem>
            <div>
              <ListItemText
                primary={<img src={logo} width="120px" alt="recibo" />}
              />
              <ListItemText
                primary={<h1 >Recibo de Pagamento</h1>}
              />
            </div>
          </ListItem>

          <ListItem>
            <ListItemText
              primary="Nome:"
              secondary={firstName}
            />
          </ListItem>

          <ListItem>
            <ListItemText
              primary="Valor R$:"
              secondary={voucherValue}
            />
          </ListItem>

          <ListItem >
            <div >
              <ListItemText primary="Correspondente ao(s) mes(es) de:" />
              <ListItemText secondary={mes} />
              <ListItemText secondary={mes2} />
              <ListItemText secondary={mes3} />
              <ListItemText secondary={mes4} />
              <ListItemText secondary={mes5} />
              <ListItemText secondary={mes6} />
              <ListItemText secondary={mes7} />
              <ListItemText secondary={mes8} />
              <ListItemText secondary={mes9} />
              <ListItemText secondary={mes10} />
              <ListItemText secondary={mes11} />
              <ListItemText secondary={mes12} />
            </div>
          </ListItem>

          <ListItem>
            <ListItemText primary="Data do pagamento:" secondary={dateBr} />
          </ListItem>

        </List>
        <center >
          <div >
            <h4>Livia Camelo</h4>
            <h5>Diretora Adminstrativa e Financeira"</h5>
          </div>
          <br />
          <Button
            color="secondary"
            variant="contained"
            onClick={this.back}
          >Voltar</Button>
          <br></br>
          <div>

            <Button
              color="primary"
              variant="contained"
              onClick={this.pdfGenerate}>
              Gerar Pdf
            </Button>
          </div>
        </center>

      </div>


    );
  }
}


export default Confirm;
