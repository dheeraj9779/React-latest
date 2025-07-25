import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";

export const Signup = () => {

    const schema = yup.object({
        email: yup.string().required(),
        password: yup.string()
        .matches(
            /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            "Password must contain at least 8 characters, one uppercase, one number and one special case character"
        )
        .required("Password is required*")
        .min(8)
        .max(16),
    })
    
    const {
            register,
            handleSubmit,
            formState:{errors}
        } = useForm({
            resolver: yupResolver(schema)
        })

    const handleSignUp = (data) => {
        console.log(data)
    }

    return(
        <>
            <form onSubmit={handleSubmit(handleSignUp)}>
                <div>
                    <label>
                        Email
                    </label>
                    <input type="text" placeholder="Enter Email" {...register("email")}/>
                    {errors.email && <span style={{ color: "red", fontSize: 14 }}>{errors.email?.message}</span>}
                </div>
                
                
                 <div>
                    <label>
                        Password
                    </label>
                    <input type="password" placeholder="Enter Password" {...register("password")}/>
                    {errors.password && <span style={{ color: "red", fontSize: 14 }}>{errors.password?.message}</span>}
                </div>
                
                <div>
                   
                    <label>
                        Mobile Number  
                    </label>
                <input type="tel" placeholder="Enter Mobile" {...register("Mobile")}/>
                </div>
                <div>
                <label>
                    Select Country
                    <select {...register("country")}>
                        <option value="India">India</option>
                        <option value="Russia">Russia</option>
                        <option value="America">America</option>
                        <option value="China">China</option>
                    </select>
                </label>
                </div>
                <label>
                    Gender
                    <input type="radio" {...register("gender")} value="Male"/> Male
                    <input type="radio" {...register("gender")} value="Female"/> Female
                </label>
                <label>Are you above 18
                    <input type="checkbox" {...register("Term and condition")}/>    
                </label>
                
                <button type="submit">Signup</button>
            </form>
        </>
    )
}