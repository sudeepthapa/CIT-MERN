import Button from '../../../core/Button'
import './index.css'
const FreeTime = () => {
    return <div id="face_time_container">
        <div className="face_time">
            <div className="face_time_info">
                <h1>Free your time.</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            </div>
            <div className="face_time_action">
                <Button style={{marginRight: '10px'}} title="Get Started" />
                <Button style={{background: 'green', color: 'white'}} title="Learning" />
            </div>
        </div>
    </div>
}

export default FreeTime;