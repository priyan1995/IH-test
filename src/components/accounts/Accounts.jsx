import './accounts.css';
import ServiceImage from '../../assets/img/acc-icon.png';

export const Accounts = () => {
    return (
        <>
            <div className='pd-account-card'>
                <h4>Savings Accounts</h4>

                <div className='pd-acc-card-box'>
                    <div className='pd-inner-msg'>
                        <img src={ServiceImage} alt="saving-account" />
                        <p>Something went wrong. Trying to retrieve your accounts</p>
                    </div>

                    <div className='pd-try-again'>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.9114 3.08862C12.525 1.69584 10.6211 0.833344 8.50001 0.833344C4.26418 0.833344 0.833344 4.26418 0.833344 8.50001C0.833344 12.7358 4.26418 16.1667 8.50001 16.1667C12.295 16.1667 15.432 13.4003 16.0453 9.77779H14.1031C13.5217 12.3397 11.2345 14.25 8.50001 14.25C5.32473 14.25 2.75001 11.6753 2.75001 8.50001C2.75001 5.32473 5.32473 2.75001 8.50001 2.75001C10.0908 2.75001 11.5092 3.40807 12.5506 4.44945L9.77779 7.22223H16.1667V0.833344L13.9114 3.08862Z" fill="#0061AF" />
                        </svg>
                        <p>Try Again</p>
                    </div>
                </div>
            </div>

            <div className='pd-account-card'>
                <h4>Current Accounts</h4>

                <div className='pd-acc-card-box'>
                    <div className='pd-inner-msg'>
                        <img src={ServiceImage} alt="saving-account" />
                        <p>Something went wrong. Trying to retrieve your accounts</p>
                    </div>

                    <div className='pd-try-again'>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.9114 3.08862C12.525 1.69584 10.6211 0.833344 8.50001 0.833344C4.26418 0.833344 0.833344 4.26418 0.833344 8.50001C0.833344 12.7358 4.26418 16.1667 8.50001 16.1667C12.295 16.1667 15.432 13.4003 16.0453 9.77779H14.1031C13.5217 12.3397 11.2345 14.25 8.50001 14.25C5.32473 14.25 2.75001 11.6753 2.75001 8.50001C2.75001 5.32473 5.32473 2.75001 8.50001 2.75001C10.0908 2.75001 11.5092 3.40807 12.5506 4.44945L9.77779 7.22223H16.1667V0.833344L13.9114 3.08862Z" fill="#0061AF" />
                        </svg>
                        <p>Try Again</p>
                    </div>
                </div>
            </div>


            <div className='pd-account-card'>
                <h4>Diposits</h4>

                <div className='pd-acc-card-box'>
                    <div className='pd-inner-msg'>
                        <img src={ServiceImage} alt="saving-account" />
                        <p>Something went wrong. Trying to retrieve your accounts</p>
                    </div>

                    <div className='pd-try-again'>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.9114 3.08862C12.525 1.69584 10.6211 0.833344 8.50001 0.833344C4.26418 0.833344 0.833344 4.26418 0.833344 8.50001C0.833344 12.7358 4.26418 16.1667 8.50001 16.1667C12.295 16.1667 15.432 13.4003 16.0453 9.77779H14.1031C13.5217 12.3397 11.2345 14.25 8.50001 14.25C5.32473 14.25 2.75001 11.6753 2.75001 8.50001C2.75001 5.32473 5.32473 2.75001 8.50001 2.75001C10.0908 2.75001 11.5092 3.40807 12.5506 4.44945L9.77779 7.22223H16.1667V0.833344L13.9114 3.08862Z" fill="#0061AF" />
                        </svg>
                        <p>Try Again</p>
                    </div>
                </div>
            </div>


            <div className='pd-account-card'>
                <h4>Loans</h4>

                <div className='pd-acc-card-box'>
                    <div className='pd-inner-msg'>
                        <img src={ServiceImage} alt="saving-account" />
                        <p>Something went wrong. Trying to retrieve your accounts</p>
                    </div>

                    <div className='pd-try-again'>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.9114 3.08862C12.525 1.69584 10.6211 0.833344 8.50001 0.833344C4.26418 0.833344 0.833344 4.26418 0.833344 8.50001C0.833344 12.7358 4.26418 16.1667 8.50001 16.1667C12.295 16.1667 15.432 13.4003 16.0453 9.77779H14.1031C13.5217 12.3397 11.2345 14.25 8.50001 14.25C5.32473 14.25 2.75001 11.6753 2.75001 8.50001C2.75001 5.32473 5.32473 2.75001 8.50001 2.75001C10.0908 2.75001 11.5092 3.40807 12.5506 4.44945L9.77779 7.22223H16.1667V0.833344L13.9114 3.08862Z" fill="#0061AF" />
                        </svg>
                        <p>Try Again</p>
                    </div>
                </div>
            </div>
        </>
    )
}