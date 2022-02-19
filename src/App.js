import './App.css';
import { Accounts } from './components/accounts/Accounts';
import { Bankingapp } from './components/bankingApp/Bankingapp';
import { Header } from './components/header/Header';
import { Sidemenu } from './components/sidemenu/Sidemenu';
import { Transactions } from './components/transactions/Transactions';

function App() {
  return (
    <div className="App">

      <div className='pd-sidemenu-sec'>
        <Sidemenu />
      </div>

      <div className='pd-header-sec'>
        <div className='pd-header-sec'>
          <Header />
        </div>
      </div>

      <div className='container'>
        <div className='row'>

          <div className='col-5'>
            <div className='pd-accounts-sec'>
              <Accounts />
            </div>
          </div>

          <div className='col-7'>
            <div className='pd-right-sec'>
              <Bankingapp />
              <Transactions />
            </div>
          </div>

        </div>
      </div>


    </div>
  );
}

export default App;
