function Login(){
  return (
      <div className="container">
        <form>
          <div id="content-login">
            <div className="item">
              <label>Usuario</label>
              <input type="text" />
            </div>
            <div className="item">
              <label>Contraseña</label>
              <input type="password" id="pass" name="pass" />
            </div>            
            <div className="item entrar">              
              <button  type="submit" id="submit" name="submit">ENTRAR</button>
            </div>
          </div>
        </form>
      </div>
  );    
}

export default Login;
