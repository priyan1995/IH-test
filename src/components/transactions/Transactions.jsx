import './transactions.css';
import DialogBiller from '../../assets/img/dialog.png';
import electricityBoard from '../../assets/img/eb.png';
import HutchBiller from '../../assets/img/hutch.png';
import mobitelBiller from '../../assets/img/mobitel.png';

export const Transactions = () => {
    return (
        <>
            <div className='pd-sceduled-payments'>
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

            </div>



            <div className='pd-recent-billers'>
                <h5 className='pd-mt-40'>Recent Billers</h5>

                <div className='pd-biller-cards-sec'>
                    <div className='pd-biller-card text-center'>
                        <img src={DialogBiller} className="w-100" />
                        <p>Dialog Mobile Broadband</p>
                    </div>

                    <div className='pd-biller-card text-center'>
                        <img src={HutchBiller} className="w-100" />
                        <p>HUTCH</p>
                    </div>

                    <div className='pd-biller-card text-center'>
                        <img src={mobitelBiller} className="w-100" />
                        <p>Mobitel</p>
                    </div>

                    <div className='pd-biller-card text-center'>
                        <img src={electricityBoard} className="w-100" />
                        <p>CEB</p>
                    </div>

                    <div className='pd-biller-card text-center'>
                        <img src={DialogBiller} className="w-100" />
                        <p>Primary Number</p>
                    </div>

                </div>
            </div>

            <div className='pd-recent-transactions'>
                <h5 className='pd-mt-40'>Recent Transactions</h5>

                <div className='pd-recent-trans-card'>
                    <div>
                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27.6296 11.1485H5.61683V12.9095H27.6296V11.1485Z" fill="black" />
                            <path d="M24.7311 17.0549L23.4807 15.8046L27.2669 12.0272L23.4807 8.24978L24.7311 6.99945L29.75 12.0272L24.7311 17.0549Z" fill="black" />
                            <path d="M28.5079 21.3606H6.49509V23.1217H28.5079V21.3606Z" fill="black" />
                            <path d="M9.39392 27.2699L4.375 22.2421L9.39392 17.2144L10.6442 18.4647L6.85804 22.2421L10.6442 26.0195L9.39392 27.2699Z" fill="black" />
                        </svg>

                    </div>
                    <div className='pd-r-t-cont'>
                        <p>Class Fees</p>
                        <p>From Account - 21930039100 | Feb 20, 2020</p>
                    </div>

                    <div className='pd-r-t-price'>
                        <p>LKR <span>10,000</span>.00</p>
                        <label className='pd-success'>Success</label>
                    </div>
                </div>
            </div>

        </>
    )
}