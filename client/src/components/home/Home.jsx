import './home.css'
export default function Home() {
    return (
        <>
            <div className="slideShow">
                <div className='slide-wrapper'>
                    <div className='slide'>
                        <div className='carModelSponFront'>
                            <a className='modelName'>RS e-tron GT</a>
                        </div>
                        <div className='carModelSponBack'>
                            <div>
                                <h3>Top speed</h3>
                                <p className='summary'>250 kph</p>
                            </div >
                            <div >
                                <h3>Acceleration 0-100 km/h</h3>
                                <p className='summary'>3.3 Seconds</p>
                            </div>
                            <div>
                                <h3>Gearbox</h3>
                                <p className='summary'>2-speed / automatic</p>
                            </div>

                        </div>
                        <img className='carImg' src='https://www.audi.com.au/content/dam/nemo/australia/model-overview/thumbnail/e-tron/962x540-RS-e-tron_GT_v2_240222.png?imwidth=563'></img>
                    </div>
                </div>
            </div>
        </>
    )
}