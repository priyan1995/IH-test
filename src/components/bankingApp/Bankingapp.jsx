import './bankingapp.css';
import BankingCardImage from '../../assets/img/bank-card.png'

export const Bankingapp = () => {
    return (
        <>
            <div className='pd-banking-card'>
                <div>
                    <h4>Evolve the way you bank now with the new
                        <span>HNB Digital Banking App</span>
                    </h4>
                    <p>
                        Access Savings and Current Accounts, Fixed Deposits, Credit Cards and Loan details.
                    </p>
                </div>
                <img src={BankingCardImage} />
            </div>

        </>
    )
}