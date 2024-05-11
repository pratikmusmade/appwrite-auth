import React from "react";
import Input from "../Components/input/Input";
import Button from "../Components/button/Button";
import myImage from "../assets/zoro-luffy.jpg";
import "./registerUser.css";
import Select from "../Components/select/Select";
import { useForm } from "react-hook-form";

function RegisterUser() {
  const { register, handleSubmit } = useForm();

  const onSubmitFormSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="register-comp-wrapper">
        <main className="registration-main-content">
          <section className="reg-form-image">
            <img src={myImage} alt="" />
          </section>
          <section className="reg-form-container">
            <div>
              <h1>Registration Form</h1>
              <h4
                style={{ color: "gray", fontWeight: "400", marginTop: ".5rem" }}
              >
                Enter your detils to register
              </h4>
            </div>
            <form onSubmit={handleSubmit(onSubmitFormSubmit)}>
              <Input
                label="First Name"
                placeholder="Enter First Name"
                isMandatory={true}
                {...register("firstName", { required: true })}
              />
              <Input
                label="Middle Name"
                placeholder="Enter Middle Name"
                isMandatory={true}
                {...register("middleName", { required: true })}
              />
              <Input
                label="Last Name"
                placeholder="Enter Last Name"
                isMandatory={true}
                {...register("lastName", { required: true })}
              />

              <div style={{ display: "flex" }}>
                <Input
                  type="number"
                  label="Age"
                  placeholder="Enter Age"
                  isMandatory={true}
                  {...register("age", { required: true })}
                />
                <Select
                  label="Gender"
                  options={["Male", "Female"]}
                  isMandatory={true}
                  {...register("gender", { required: true })}
                />
              </div>

              <div style={{ display: "flex" }}>
                <Select
                  label="Enter Year"
                  options={["I", "II", "III"]}
                  isMandatory={true}
                  {...register("year", { required: true })}
                />
                <Select
                  label="Enter Branch"
                  options={["CS", "IT", "MEC", "CIVIL"]}
                  isMandatory={true}
                  {...register("branch", { required: true })}
                />
              </div>
              <Input
                type="number"
                label="Mobile Number"
                placeholder="Enter"
                {...register("mob", { required: true })}
              />
              <Input
                type="email"
                label="Email"
                placeholder="Enter Email"
                isMandatory={true}
                {...register("email", { required: true })}
              />

              <Button
                type="submit"
                text="Submit Form"
                customStyles={{ backgroundColor: "green" }}
              />
              <Button text="Cancel" customStyles={{ backgroundColor: "red" }} />
            </form>
          </section>
        </main>
      </div>
    </>
  );
}

export default RegisterUser;
