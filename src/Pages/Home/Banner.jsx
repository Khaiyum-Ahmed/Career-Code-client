import { motion as Motion } from "motion/react"
import team1 from "../../assets/images/tim-van-der-kuip-CPs2X8JYmS8-unsplash.jpg"
import team2 from "../../assets/images/vitaly-gariev-Kxo17w7BurY-unsplash.jpg"
const Banner = () => {
    return (
        <div className="hero bg-base-200 py-24">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="flex-1">
                    <Motion.img
                        src={team1}
                        animate={{y:[20,150,20]}}
                        transition={{duration:5, repeat:Infinity}}
                        className="max-w-sm border-s-8 border-b-8 border-blue-600 rounded-br-4xl rounded-t-4xl shadow-2xl"
                    />
                    <Motion.img
                        src={team2}
                         animate={{x:[100,200,100]}}
                        transition={{duration:10, delay:4, repeat:Infinity}}
                        className="max-w-sm border-s-8 border-b-8 border-blue-600 rounded-br-4xl rounded-t-4xl shadow-2xl"
                    />
                </div>
                <div className="flex-1">
                    <Motion.h1 animate={{ rotate: 360, transition: { duration: 5 } }} className="text-4xl font-bold">The <Motion.span animate={{
                        color: ['#ff5733', '#33ff33', '#8a33ff'],
                        transition: { duration: 3, repeat: Infinity }
                    }}>Easiest Way</Motion.span> to get <br /> your New Job!</Motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;