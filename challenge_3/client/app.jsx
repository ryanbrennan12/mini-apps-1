class App extends React.Component {
  constructor() {
    super() 
    this.state = {
      step: 1
    }
    this.nextStep = this.nextStep.bind(this)
  }

  nextStep() {
    
  }

  render() {
    return (
      <div>Heyyyy</div>
    )
  }
}








ReactDOM.render(<App />, document.getElementById('app'));

