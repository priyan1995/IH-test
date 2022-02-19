import './header.css';
import HeaderImage from '../../assets/img/header-image.png'

export const Header = () => {
    return (
        <>
            <img src={HeaderImage} className='main-header-image' />
            <div className='container pd-main-header'>
                <div className='row'>
                    <div className='col-lg-4'>
                        <div className='pd-header'>
                            <div className='pd-flex'>
                                <a href='#' className='pd-user-img'>
                                    <svg width="28" height="33" viewBox="0 0 28 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9286 15.0577C18.0648 15.0577 21.4339 11.6784 21.4339 7.52908C21.4339 3.3798 18.0648 0 13.9286 0C9.79239 0 6.42285 3.3798 6.42285 7.52908C6.42285 11.6784 9.79239 15.0577 13.9286 15.0577Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9285 17.2194C6.24212 17.2194 0 23.4961 0 31.1908V32.2622L27.8564 32.2771V31.2062C27.8564 23.4961 21.6143 17.2194 13.9285 17.2194Z" fill="white" />
                                    </svg>
                                </a>

                                <div>
                                                                        <h3>Hello,
                                        <span>Thilina!</span> </h3>
                                </div>
                            </div>
                            <p>You are powerful, brave and brilliant</p>
                        </div>
                    </div>

                    <div className='col-lg-8'>

                    </div>
                </div>
            </div>
        </>
    )
}