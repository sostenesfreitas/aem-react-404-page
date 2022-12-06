import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import { useState } from "react";
import { AiOutlineUser, AiFillLock } from "react-icons/ai";
import Input from "../input";
import { useAuth } from "../../hooks/Auth";
import "./Login.css";

function Login(): JSX.Element {
  const { setPassword, setLogin, login, password, history } = useAuth();

  const [error, setError] = useState(false);

  const handleLogin = () => {
    if (login === "admin" && password === "admin") {
      window.localStorage.setItem("login", login);
      history.push("/content/reactapp/us/en/home-page.html");
    } else setError(true);
  };

  return (
    <div className='Login'>
      <div className='form'>
        <h1>Olá,</h1>
        <p>Para continuar navegando de forma segura, efetue o login na rede.</p>
        <div className='formInner'>
          <h2>Login</h2>
          <Input label='User' onChange={setLogin} value={login}>
            <AiOutlineUser />
          </Input>
          <Input
            label='Password'
            type='password'
            onChange={setPassword}
            value={password}
          >
            <AiFillLock />
          </Input>
        </div>
        {error && (
          <span className='errorMsg'>
            Ops, usuário ou senha inválidos. Tente novamente!
          </span>
        )}
        <button onClick={() => handleLogin()}>Continunar</button>
      </div>
      <img
        alt='imgBg'
        className='imgBg'
        src='https://s3-alpha-sig.figma.com/img/dd5c/a72b/f7361f224fa873f2f0878af28a00fbf1?Expires=1670198400&Signature=Yf1l43b1ssQDaFYvuI677h6tmgpF9H4I4~H6QL4NZqJRBykRKkO0IptBizx15htNuRaFRUq9h49dHcVmUFeZQutUOss~AGNYSTIhUDxQH2S8FxFppcyRvko0G27Xoxctswg4B0lzXgZo6JMjJRPUj3XhM8POvrHvqfRoeNDLNTlKgRE2oK4xDTHk2OQg8rcCUeizmMCRa4vIz1kvvf5AreS5iJMTgXzBo2B3ysLaLgqPYUzQlF9IlzZwRb52jBAmHjeAnwLMmBjfwdDJE6GGDWI8y6ite0c30U7gvaWVDuG7oJiZ7djRArjFkgb4HJVEnUFTxK3SrFGetmIy70EtoA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
      ></img>
      <img
        alt='logo'
        className='logo'
        src='https://s3-alpha-sig.figma.com/img/f7ec/6bea/9ac0e9dd0bb5dbef069fa061c1de9b19?Expires=1670198400&Signature=PKnr8uqK8SHm361ohVSlPp8avrpbktyo-sv8lAK100xolb4ffRUsa3wKSnzw8~fnU4OV4np4E9gR-7T41eunfp3dfDqnE~zgE60m739Np0v3KDCv2UkIYdcBhvmqIbqO1MPAueKVgoGFPruHgPp1ah8cbbGIRQzPuIqGmZlfxmq6aiWXKqVu0DpZjHBL5hz7hehsKtrDutKzpqvViqmsg2P38z5OG5gEfUPxP3VpGjyyIkNO7UByA6hSuasaNh0nOxmb0MZ4Oe-nC046YUzq~pbJ0jQpuUEL7XKxxLWE72Q9K4uiBhaeIitoX~SJCRP4HL2-qu~~CusXmBdYpg1kaQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
      ></img>
    </div>
  );
}

export default MapTo("reactapp/components/page-login")(Login);
