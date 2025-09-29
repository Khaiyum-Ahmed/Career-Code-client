import Lottie from "lottie-react";
import RegisterLottie from "../../assets/LottieFiles/Register.json"
const Register = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center mb-5 lg:text-left">
                    <Lottie style={{ width: "300px" }} animationData={RegisterLottie} loop={true}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
                    <h1 className="text-4xl text-center font-bold py-12">Register now!</h1>
                    <div className="card-body">
                        <form>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input name="email" type="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input name="password" type="password" className="input" placeholder="Password" />
                                <button className="btn btn-neutral mt-4">Register</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;