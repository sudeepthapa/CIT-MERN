import './service.css'
const data = [
    {
        title: '50+',
        heading: 'Best Master',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
        title: '60+',
        heading: 'Best Master',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
        title: '70+',
        heading: 'Best Master',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
]
const Services = () => {
    return <div id="service_container">
        {data.map(service=>{
            return <div className="service">
                <h2>{service.title}</h2>
                <h4>{service.heading}</h4>
                <p>{service.description}</p>
            </div>
        })}
    </div>
}

export default Services