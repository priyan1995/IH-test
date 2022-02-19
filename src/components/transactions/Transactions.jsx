import './transactions.css';

export const Transactions = () => {
    return (
        <>
            <h5>Scheduled Paymemnts</h5>

            <div className='pd-scd-payment-card'>
                <p className='pd-date'>  Aug 10, 2021 </p>
                <p className='pd-name'> M.N.K.Silva </p>
                <p className='pd-price'> LKR<span>10,000.</span>00 </p>
            </div>

            <div className='pd-scd-payment-card'>
                <p className='pd-date'>  Aug 10, 2021 </p>
                <p className='pd-name'> M.N.K.Silva </p>
                <p className='pd-price'> LKR<span>10,000.</span>00 </p>
            </div>
        </>
    )
}