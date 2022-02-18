import './App.css';
import { Accounts } from './components/accounts/Accounts';
import { Bankingapp } from './components/bankingApp/Bankingapp';
import { Sidemenu } from './components/sidemenu/Sidemenu';

function App() {
  return (
    <div className="App">

      <div className='pd-sidemenu-sec'>
        <Sidemenu />
      </div>

      <div className='container'>
        <div className='row'>

          <div className='col-12'>
            <div className='pd-header-sec'>

            </div>
          </div>

          <div className='col-5'>
            <div className='pd-accounts-sec'>
              <Accounts />
            </div>
          </div>

          <div className='col-7'>
            <div className='pd-right-sec'>
              <Bankingapp />
            </div>
          </div>

        </div>
      </div>


    </div>
  );
}

export default App;
