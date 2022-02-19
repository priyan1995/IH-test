import './transactions.css';
import DialogBiller from '../../assets/img/dialog.png';
import electricityBoard from '../../assets/img/eb.png';
import HutchBiller from '../../assets/img/hutch.png';
import mobitelBiller from '../../assets/img/mobitel.png';

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

            <h5 className='pd-mt-40'>Recent Billers</h5>

            <div className='pd-biller-cards-sec'>
                <div className='pd-biller-card text-center'>
                    <img src={DialogBiller}  className="w-100"/>
                    <p>Dialog Mobile Broadband</p>
                </div>

                <div className='pd-biller-card text-center'>
                    <img src={HutchBiller}  className="w-100"/>
                    <p>HUTCH</p>
                </div>

                <div className='pd-biller-card text-center'>
                    <img src={mobitelBiller}  className="w-100"/>
                    <p>Mobitel</p>
                </div>

                <div className='pd-biller-card text-center'>
                    <img src={electricityBoard}  className="w-100"/>
                    <p>CEB</p>
                </div>

                <div className='pd-biller-card text-center'>
                    <img src={DialogBiller}  className="w-100"/>
                    <p>Primary Number</p>
                </div>

            </div>

        </>
    )
}