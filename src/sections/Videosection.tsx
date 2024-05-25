import ReactPlayer from 'react-player'

const Videosection = () => {
    return(
        <section className={"videosection"}>
            <div className={"videosection-header"}>
                <h1>Незабываемые моменты</h1>
            </div>
            <div className="videosection-player">
                <ReactPlayer
                    className={"videosection-player__player"}
                    playing={true}
                    muted={true}
                    width={"60vw"}
                    height={"auto"}
                    url={"./assets/video/sozdaniepaceta.day2.mp4"}
                />
                 <div className="videosection-figure">
                    <img src="./assets/figures/video-figure.svg" alt="" />
                </div>
            </div>
           
        </section>
    )
}

const VideosectionAlternative = () => {
    return(
        <section className={"videosection"}>
            <div className={"videosection-header"}>
                <h1>Посмотрите, как <span>Вы проведете время</span></h1>
            </div>
            <div className="videosection-player">

            </div>
            <div className="videosection-figure">
                <img src="./assets/figures/video-figure.svg" alt="" />
            </div>
        </section>
    )
}

export default Videosection