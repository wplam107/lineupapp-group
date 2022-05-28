function LoginForm () {

  const handleSubmit = (e) => {

    var username = document.getElementById("username").innerText;

    if(username == "William")
    {
      console.log(username);
      document.cookie = "username = William";
      window.location.href = "index.html";

        
    // Check if user 2 is logging in.
    }else if(username == "Wayne")
    {
        
      document.cookie = "username = Wayne";
      window.location.href = "index.html";
        
    /* 
      If the login details are incorrect.   
    */
    }else
    {
        window.location.href = "";
    }
    }
    ;

  return (
    <form>
      {/* <script src = "logincheck.js"> </script> */}
      <label htmlFor="login">
        Login
        <input id = "username" type="text" name="username" />
      </label>
      <button type="submit" value="Submit" onSubmit={handleSubmit}/>
    </form>
  );
}

export default LoginForm;