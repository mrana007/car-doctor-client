import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {

    const [services, setServices] = useState([]);

    useEffect( () =>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])

    return (
        <div className="mt-32">
            <div className="text-center space-y-5">
            <h3 className="text-[#FF3811] text-2xl font bold">About Us</h3>
            <h2 className="text-5xl font bold">Our Service Area</h2>
            <p>The majority have suffered alteration in some form, by injected humour, or randomized <br /> words which do not look even slightly believable.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-3 md:px-0 my-12">
                {
                    services.map(service => <ServiceCard 
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;