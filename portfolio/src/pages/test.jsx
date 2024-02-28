import * as yup from "yup";

const schema = yup.object().shape({
  username: yup.string().required().min(3).max(25),
  email: yup.string().email().required(),
  password: yup.string().required().min(8).max(25),
});

const handleSubmit = (e) => {
  e.preventDefault();

  const formData = {
    username: e.target.username.value,
    email: e.target.email.value,
    password: e.target.password.value,
  };

  const errors = schema.validate(formData);

  if (errors.length > 0) {
    // There are errors in the form data
    alert(errors.join("\n"));
  } else {
    // The form data is valid, do something with it
  }
};

const Test = () => {
  return (
    <div>
      <div className="mockup-phone">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo phone-1">Hi Dorjoo .</div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" />
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};
export default Test;
