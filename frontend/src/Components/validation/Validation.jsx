

const Validation =(values) => {
    let errors = {};

    if (!values.first_name){
        errors.first_name= "name is required"
    }

    if (!values.email){
        errors.email= "email is required"
    } else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email= "email is invalid"
    }

    if (!values.password){
        errors.password= "password is required"
    } else if(values.lenght < 5){
        errors.password= "Password mst be more than 5 characters."
    }

  return errors;
}

export default Validation