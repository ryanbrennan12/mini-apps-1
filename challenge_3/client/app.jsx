class App extends React.Component {
  constructor() {
    super() 
    this.state = {
      step: 1
    }
    this.nextStep = this.nextStep.bind(this)
  }

  
  //this will be triggered by Button in component
  nextStep() {
    console.log('I have been clicked!')
    
  }

  render() {
    return (
      <Form1 onNext={this.nextStep}/>
    )
  }
}

class Form1 extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      pass: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  ///rather than multiple event hanlders
  handleChange(key) {
    return function (e) {
      console.log(e.target.value)
      var state = {};
      state[key] = e.target.value;
      this.setState(state);
    }.bind(this)
  }
  
  handleSubmit(e) {
    let data = {
      name: this.state.name,
      email: this.state.email,
      pass: this.state.pass,
    }
  }  
  
  render() {
    return (
    <div>
          Name: 
          <input type="text" value={this.state.name} onChange={this.handleChange('name')} />
          Email: 
          <input type="email" value={this.state.email} onChange={this.handleChange('email')} />
          Password:
          <input type="text" value={this.state.message} onChange={this.handleChange('message')} />
          <button onClick={() => this.props.onNext()}>Next</button>
       </div>
    );
  }
}
        







ReactDOM.render(<App />, document.getElementById('app'));

