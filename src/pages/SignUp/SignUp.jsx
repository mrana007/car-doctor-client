import { useContext } from 'react';
import img from '../../assets/images/login/login.svg'
import { Link } from "react-router-dom";
import { AuthContext } from '../../providers/AuthProvider';


const SignUp = () => {

    const {createUser} = useContext(AuthContext);

    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error =>{
            console.error(error)
        });
    };

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="w-1/2">
      
      <img src={img} alt="" />
    </div>
    <div className="card w-1/2 shadow-2xl bg-base-100">
      <form onSubmit={handleSignUp} className="card-body">
    <h1 className="text-3xl text-center font-bold">Sign Up</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="name" name='name' placeholder="Enter your name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="Enter your email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="Enter password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-secondary bg-[#FF3811] text-white normal-case" type="submit" value="Sign Up" />
        </div>
      </form>
      <p className='text-center pb-6'>Already Have an Account? <Link className='text-[#FF3811] font-bold' to='/login'>Sign In</Link></p>
    </div>
  </div>
</div>
    );
};

export default SignUp;