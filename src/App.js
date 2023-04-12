import './App.css';


function Input({type, placeholder}){  
  return (<input type={type} placeholder={placeholder}/>);
}

function Button({value, onClick}){  
  return (<button onclick={onClick}> {value}  </button>);
}

function generator(){
  const symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789()+-.";
  let password = "";
  for (let i = 0; i < 12; i++) {
      password += symbols.charAt(Math.floor(Math.random() * symbols.length));
  }
  alert(password);
}

function App() {
  return (
    <div className="Signup">
      <h4>Sign Up to get more information</h4>
      <form>
        <Input type="text" placeholder="Name"/>
        <Input type="text" placeholder="Last Name"/>
        <Input type="number" placeholder="age"/>
        <Input type="email" placeholder="Email"/>
        <Input type="password" placeholder="Password"/>
        <Button value="Use password generator" onClick={generator()}/>
      </form>
    </div>
  );
}




export default App;
