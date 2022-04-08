import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Counter from './Counter';
import CounterPlus2 from './CounterPlus2';
import LoginNew from './LoginNew';
import Menu from "./Menu";
import RegisterationForm from "./RegisterationForm";
import Native from "./Native";
import Footer from "./Footer";
import Comment from './Comment';
import GreetForm from './GreetForm';

export default function App() {
    return (
      <div className="App">
        <Counter />
        <Login />
        <br />
        <LoginNew />
        <CounterPlus2 />
        <Menu />
        <RegisterationForm />
        <Native />
        <Footer/>
      </div>
    );
  }
  