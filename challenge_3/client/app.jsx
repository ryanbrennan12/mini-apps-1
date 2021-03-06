class App extends React.Component {
  constructor() {
    super()
    this.state = {
      step: 1,
      //form1
      name: '',
      email: '',
      password: '',
      //form 2
      addy1: '',
      addy2: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      //form 3
      credit: '',
      exp: '',
      cvv: '',
      zip2: ''
    }
    this.nextStep = this.nextStep.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  //this will be triggered by Button in component
  // saving to the DB here as well
  nextStep() {

    const step = this.state.step;
    if (step !== 5) {
      this.setState({
        step: step + 1
      })
      const values = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        addy1: this.state.addy1,
        addy2: this.state.addy2,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip,
        phone: this.state.phone,
        credit: this.state.credit,
        exp: this.state.exp,
        cvv: this.state.cvv,
        zip2: this.state.zip2
      }
      if (step === 2) {
        $.ajax({
          type: 'POST',
          url: '/save',
          data: values,
          datatype: 'json',
        }).done((data) => {
          ///saving HERE
          console.log('POST on Save', data)
        })
      } else if ((step === 3) || (step === 4)) {
        $.ajax({
          type: 'POST',
          url: '/update',
          data: values,
          datatype: 'json'
        }).done((data) => {
          console.log('POST on update', data)
        })
      }
    }
  }

        
      
  //dont have to bind
  handleChange(key) {
    return (e) => this.setState({ [key]: e.target.value })
  }

  render() {
    switch (this.state.step) {
      case 1:
        return <Checkout handleChange={this.handleChange} nextStep={this.nextStep} />
      case 2:
        return <Form1 handleChange={this.handleChange} nextStep={this.nextStep} />
      case 3:
        return <Form2 handleChange={this.handleChange} nextStep={this.nextStep} />
      case 4:
        return <Form3 handleChange={this.handleChange} nextStep={this.nextStep} />  
      case 5:
        return <Purchase /> 
    }
  }
}
///FORM 1


class Checkout extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <button onClick={()=> this.props.nextStep()}>CHECKOUT SAN</button>
    )
  }
}

class Form1 extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        Name:
      <input onChange={this.props.handleChange('name')}></input>
        Email:
      <input onChange={this.props.handleChange('email')}></input>
        Password:
      <input onChange={this.props.handleChange('password')}></input>
        <button onClick={() => this.props.nextStep()}>Next</button>
      </div>
    )
  }
}
class Form2 extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        Address:
      <input onChange={this.props.handleChange('addy1')}></input>
        <input onChange={this.props.handleChange('addy2')}></input>
        City:
      <input onChange={this.props.handleChange('city')}></input>
        State:
      <input onChange={this.props.handleChange('state')}></input>
        Zip:
      <input onChange={this.props.handleChange('zip')}></input>
        Phone:
      <input onChange={this.props.handleChange('phone')}></input>
        <button onClick={() => this.props.nextStep()}>Next</button>
      </div>
    )
  }
}
class Form3 extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        Credit Card Number:
      <input onChange={this.props.handleChange('credit')}></input>
        Expiration Date
      <input onChange={this.props.handleChange('exp')}></input>
        CVV:
      <input onChange={this.props.handleChange('cvv')}></input>
        Biling Zip:
      <input onChange={this.props.handleChange('zip2')}></input>
      <button onClick={() => this.props.nextStep()}>Next</button>
      </div>
    )
  }
}
class Purchase extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
       <h1>Confirmation</h1>
      <button>PURCHASE</button>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));









