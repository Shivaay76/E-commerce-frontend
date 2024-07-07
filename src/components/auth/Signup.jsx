
import { TextField, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';

import { toast } from "react-hot-toast"
import { SIGNUP } from '../../utils/APIs';
import { apiConnector } from "../../utils/apiConnector";
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const navigate = useNavigate();

    async function signupHandler(e) {

        e.preventDefault();

        const formData = new FormData(e.target);
        const userData = Object.fromEntries(formData);

        console.log( userData )
        // Frontend checks --> for user better expreience
        if (!userData.username ) {
            return toast.error("Enter user name!")
        }else if( userData.password !== userData.confirmPassword){
            return toast.error("Passwords are not matched!")
        }

        const toastId = toast.loading("Loading...");
        try {
            await apiConnector(SIGNUP, 'POST', { ...userData });
            navigate("/login")

        } catch (error) {
            console.log(' RESET PASSWORD OTP! API ERROR.............', error);
            toast.error(error.message);
        }
        toast.dismiss(toastId);

    }

    return (
        <>
            <div className='p-4 my-8 mt-12 shadow shadow-orange-600 rounded-xl'>

                <h1 className='text-2xl font-bold text-center'>Signup</h1>

                <form onSubmit={signupHandler} className='p-4 flex flex-col gap-4'>


                    <div className='flex-col gap-4'>

                        <div className='flex gap-6 my-4'>
                            <TextField fullWidth id="username" name='username' label="Name" type='text' required />
                            <TextField fullWidth id="email" name='email' label="Email" type='email' required />
                        </div>

                        <div className='flex gap-6'>
                            <TextField fullWidth id="password" name='password' label="Password" type="password" required />
                            <TextField fullWidth id="confirmPassword" name='confirmPassword' label="Confirm Password" type="password" required />
                            <TextField fullWidth id="text" name='address' label="Address" type="text" />
                        </div>

                        <div className='flex gap-6 my-4'>
                            <FormControl>
                                <FormLabel id="accountType">Account Type</FormLabel>
                                <RadioGroup
                                    aria-labelledby="accountType"
                                    defaultValue="Customer"
                                    name="accountType"
                                >
                                    <FormControlLabel value="Customer" control={<Radio />} label="Customer" />
                                    <FormControlLabel value="Admin" control={<Radio />} label="Admin" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>


                    <div>
                        <Button variant="contained" type='submit' style={{ backgroundColor: 'orange' }}>Singup</Button>
                    </div>

                </form>
            </div>
        </>

    )
};

export default Signup;