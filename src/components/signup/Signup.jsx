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
        <div className="w-full  bg-cover bg-no-repeat " style={{
            backgroundImage: `url('https://images.pexels.com/photos/5418830/pexels-photo-5418830.jpeg')`, height: '100vh'
        }}>
            <div className="mx-auto  w-1/4 bg-black/50 rounded-lg text-white p-4">
                <form onSubmit={handleSubmit(handleSignUp)} >
                <div className="w-full mb-4">
                    <input type="text" placeholder="Enter Email" {...register("email")} className="bg-[#102118d9] text-white text-sm p-3 rounded-lg font-medium outline-none w-full"/>
                    {errors.email && <span style={{ color: "red", fontSize: 14 }}>{errors.email?.message}</span>}
                </div>
                
                
                 <div className="w-full mb-4">
                   
                    <input type="password" placeholder="Enter Password" {...register("password")} className="bg-[#102118d9] text-white text-sm p-3 rounded-lg font-medium outline-none w-full"/>
                    {errors.password && <span style={{ color: "red", fontSize: 14 }}>{errors.password?.message}</span>}
                </div>
                
                <div className="w-full mb-4">
                   
                   
                <input type="tel" placeholder="Enter Mobile" {...register("Mobile")} className="bg-[#102118d9] text-white text-sm p-3 rounded-lg font-medium outline-none w-full"/>
                </div>
                <div className="w-full mb-4">
               
                    <select {...register("country")} className="bg-[#102118d9] text-sm text-white p-3 rounded-lg font-medium outline-none w-full">
                        <option value="India">India</option>
                        <option value="Russia">Russia</option>
                        <option value="America">America</option>
                        <option value="China">China</option>
                    </select>
           
                </div>
               


               

                        <div className="flex gap-5 mb-4">
                            <div className="inline-flex items-center">
                                <label
                                    className="relative flex cursor-pointer items-center rounded-full p-3"
                                    htmlFor="male"
                                    data-ripple-dark="true"
                                >
                                    <input {...register("gender")} value="Male"
                                        name="ripple"
                                        type="radio"
                                        className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all"
                                        id="male"
                                    />
                                    <span className="absolute bg-green-900 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                                </label>
                                <label
                                    className=" cursor-pointer text-sm"
                                    htmlFor="male"
                                >
                                    Male
                                </label>
                            </div>
                            <div className="inline-flex items-center">
                                <label
                                    className="relative flex cursor-pointer items-center rounded-full p-3"
                                    htmlFor="female"
                                >
                                    <input {...register("gender")} value="Female"
                                        name="ripple"
                                        type="radio"
                                        className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all"
                                        id="female"
                                    />
                                    <span className="absolute bg-green-900 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                                </label>
                                <label
                                    className=" cursor-pointer text-sm"
                                    htmlFor="female"
                                >
                                    Female
                                </label>
                            </div>
                            <div className="inline-flex items-center">
                                <label
                                    className="relative flex cursor-pointer items-center rounded-full p-3"
                                    htmlFor="other"
                                >
                                    <input {...register("gender")} value="Other"
                                        name="ripple"
                                        type="radio"
                                        className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all"
                                        id="other"
                                    />
                                    <span className="absolute bg-green-900 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                                </label>
                                <label
                                    className=" cursor-pointer text-sm"
                                    htmlFor="other"
                                >
                                    Other
                                </label>
                            </div>
                        </div>

                        <div className="inline-flex items-center w-full mb-4">
                            <label className="flex items-center cursor-pointer relative">
                                <input type="checkbox" {...register("Term and condition")} className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-green-900 checked:border-green-900" id="check5" />
                                <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                </span>

                            </label>
                            <label className="cursor-pointer ml-2 text-sm" htmlFor="check-5">
                                Accepts Terms & Conditions
                            </label>
                        </div>
                
                
                <button className="w-full bg-green-900 text-white px-4 py-3 rounded-lg text-center cursor-pointer" type="submit">Signup</button>
            </form>
            </div>
            
            </div>
        </>
    )
}