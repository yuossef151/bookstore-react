import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

export default function Regest() {
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    try {
      const form = await axios.post(
        "https://bookstore.eraasoft.pro/api/register",
        values,
      );
      console.log(values.data);

      navigate("/");
    } catch (error) {
      console.log("error");
    }
  };
  const registerschema = Yup.object({
    first_name: Yup.string().required(),
    last_name: Yup.string().required(),
    email: Yup.string().required().email(),
    password: Yup.string().required(),
    password_confirmation: Yup.string().required(),
  });
  return (
    <>
      <div className="bg-[#F5F5F5] pb-10">
        <div className=" w-full h-90 inset-0">
          <img
            className=" object-cover w-full h-full rotate-180   top-0 "
            src="./public/imglogin.png"
            alt=""
          />
          <div className="absolute w-full h-90 inset-0 bg-[#00000099]"></div>
        </div>
        <div className="flex flex-col justify-center items-center pt-15">
          <p className="text-[#D9176C] text-[20px]">Welcome Back!</p>
          <Formik
            initialValues={{
              first_name: "",
              last_name: "",
              email: "",
              password: "",
              password_confirmation: "",
            }}
            validationSchema={registerschema}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
          >
            <Form className="w-140  ">
              <div className="flex gap-6 my-6">
                <div className="flex flex-col grow">
                  <label htmlFor="first">First Name</label>
                  <Field
                    className="p-4 bg-white rounded-lg mt-2 "
                    id="first"
                    name="first_name"
                    type="text"
                    placeholder="John"
                  />
                  <ErrorMessage
                    name="first_name"
                    component={"p"}
                    className="text-red-600 py-2 font-semibold"
                  />
                </div>
                <div className="flex flex-col grow">
                  <label htmlFor="last">Last Name </label>
                  <Field
                    className="p-4 bg-white rounded-lg mt-2 "
                    id="last"
                    name="last_name"
                    type="text"
                    placeholder="Smith"
                  />
                  <ErrorMessage
                    name="last_name"
                    component={"p"}
                    className="text-red-600 py-2 font-semibold"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="email">Email</label>
                <Field
                  className="p-4 bg-white rounded-lg mt-2"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                />
                <ErrorMessage
                  name="email"
                  component={"p"}
                  className="text-red-600 py-2 font-semibold"
                />
              </div>
              <div className="flex flex-col my-6">
                <label htmlFor="password">Password</label>
                <Field
                  className="p-4 bg-white rounded-lg mt-2"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter password"
                />
                <ErrorMessage
                  name="password"
                  component={"p"}
                  className="text-red-600 py-2 font-semibold"
                />
              </div>
              <div className="flex flex-col my-6">
                <label htmlFor="confpassword">Confirm password</label>
                <Field
                  className="p-4 bg-white rounded-lg mt-2"
                  id="confpassword"
                  type="password"
                  name="password_confirmation"
                  placeholder="Enter password"
                />
                <ErrorMessage
                  name="password_confirmation"
                  component={"p"}
                  className="text-red-600 py-2 font-semibold"
                />
              </div>
              <div className="flex   pb-10">
                <div className="flex items-center">
                  <input
                    className="me-3 w-4 h-4"
                    id="checkbox"
                    type="checkbox"
                  />
                  <label htmlFor="checkbox">Agree with </label>
                </div>
                <Link className="text-[#D9176C]" to="">
                  Terms & Conditions
                </Link>
              </div>
              <button
                type="submit"
                className="bg-[#D9176C] w-full text-white py-[11.5px] rounded-lg"
              >
                Sign Up
              </button>

              <div className="flex flex-col  w-full items-center">
                <p className="py-10 items-center">
                  Already have an account?
                  <Link className="text-[#D9176C] font-semibold" to="/login">
                    Login
                  </Link>
                </p>

                <p>or</p>
              </div>

              <div className="flex flex-col gap-3 pt-6">
                <button className="bg-white flex items-center  justify-center py-3 rounded-lg gap-2 ">
                  <img className="w-5 h-5" src="./public/gogle.png" alt="" />
                  Login with Google
                </button>
                <button className="bg-white flex items-center justify-center py-3 rounded-lg gap-2">
                  <img className="w-5 h-5" src="./public/fac.png" alt="" />
                  Login with Facebook
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}
