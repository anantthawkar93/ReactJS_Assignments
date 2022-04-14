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
import Comments from './Comments';
import Forum from './Forum';
import TitleModifier from './TitleModifier';
import ClassBasedLogin from './ClassBasedLogin';
import Calculator from './Calculator';
import ScientificCalculator from './ScientificCalculator';
import Interest from './Interest';
import SmartCounter from './SmartCounter';
import ClassBasedCounter from './ClassBasedCounter';
import ClassBasedCalculator from './ClassBasedCalculator';
import NthPrime from './nthPrime';
import ClassBasedNthPrime from './ClassBasedNthPrime';
import Average from './Average';
import AddNos from './AddNos';
import IsEven from './IsEven';
import MiniCalculator from './MiniCalculator';
import Greet from './Greet';
import AppforGreet from './AppforGreet';
import GreetWithState from './GreetWithState';
import GreetForm from './GreetForm';
import CommentNew from './CommentNew';
import ForumNew from './ForumNew';
import Ecommerce from './Ecommerce';
import AppforGithub from './GithubApi/AppforGithub';
import TodoContainer from './Todo-app/TodoContainer';

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
        <Forum/>
        <Comments/>
        <TitleModifier />
        <ClassBasedLogin />
        <Calculator />
        <ScientificCalculator />
        <Interest/>
        <SmartCounter />
        <ClassBasedCounter />
        <ClassBasedCalculator />
        <NthPrime />
        {/*<ClassBasedNthPrime />*/}
        <Average />
        <AddNos />
        {/*<MiniCalculator/>*/}
        <IsEven />
        <AppforGreet/>
        <Greet/>
        <Hobbies/>
        {/*<GreetWithState/>*/}
        <GreetForm/>
        <CommentNew/>
        <ForumNew/>
        <Ecommerce/>
        <AppforGithub/>
        <TodoContainer/>
      
      </div>
    );
  }
