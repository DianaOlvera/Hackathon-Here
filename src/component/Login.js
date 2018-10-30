import React, { Component } from 'react';
import firebase from 'firebase';
import { Input, Button, Container, Row, Col } from 'mdbreact';



class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            user:null,
            name:"",
            email:"",
             password:"",
            registrar:"",
            registrarpwd:""
    };
    this.login = this.login.bind(this);
    this.createUser = this.createUser.bind(this);
    this.handleAuth = this.handleAuth.bind(this);// referenciamos al metodo
    this.handleLogout = this.handleLogout.bind(this);
    this.handleChange = this.handleChange.bind(this);
        }

        handleAuth(){ 
            const provider = new firebase.auth.GoogleAuthProvider(); // hace la funcionalidad de google como proveedor
            firebase.auth().signInWithPopup(provider) //llama a la api de firebase 
            .then(result => console.log(`${result.user.email} inicio sesion`))
            .catch(error => console.log(error.message));
          }

          handleLogout(){
            firebase.auth().signOut()
            .then(response  => console.log(`${response.user.email} cerro sesion`))
            .catch(error => console.log(error.message));
          }

          login(e){
            e.preventDefault();
            firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((u)=>{
            })
            .catch((error)=>{
                
            console.log(error);
            });    
            
            }
         createUser(e) {
            e.preventDefault();
            firebase.auth().createUserWithEmailAndPassword(this.state.registrar, this.state.registrarpwd)
            .then(() => {
              alert('Cuenta creada exitosa')
              const userName = this.state.email;
              console.log(userName);
            })
                .catch((error) => {
                    console.log(error.message);
                })
        }

        handleChange(e){
            const { value, name } = e.target;
           this.setState({
            [name]: value 
          }) 
          }


          render(){
              return(
                <div>
                {/* <div className="App-header">
                    <h1 color="white">SchoolHere</h1>
                </div>
                <form className="container">
                    <p>Forma parte de nuestra comunidad: </p>
                    <input id="inputEmail" value={this.state.email} onChange={this.handleChange} type="email"name='email' className="Form-input "  placeholder="Email" />
                    
                    <input id="inputPassword" className="Form-input" value={this.state.password} onChange={this.handleChange} type="password"name='password'placeholder="Password"/>
                    <button  type="button" className="btn btn-outline-dark" id="btn-crear" data-toggle="modal" data-target="#exampleModal">Registrar</button>
                    <button className="btn btn-outline-dark" id="btn-sing" onClick={this.login}>SingUp</button>
                </form>
                    <button className="btn btn-outline-dark" id="btn-google" onClick={this.handleAuth}>
                    <img src={GoogleLogo} alt="" /> Login Google</button>

                    <div class="md-form">
                    <input type="text" id="form1" class="form-control"/>
                    <label for="form1">Example label</label>
                    </div> */}
                    
        <Container>
        <Row>
          <Col md="6">
            <form>
              <p className="h5 text-center mb-2">Sign up</p>
              <div className="grey-text" >
                <Input label="Your email"  group type="email" onChange={this.handleChange} validate error="Error" success="Correcto" />
                <Input label="Your password"  group type="password"  onChange={this.handleChange} validate/>
              </div>
              <div className="grey-text" >
              <Button className="btn btn-dark" type="submit" onClick={this.login}>Login</Button>
              </div>
              <div className="grey-text" >
              <Button className="btn btn-dark" type="submit" data-toggle="modal" data-target="#exampleModal">Registrar</Button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>




              {/*Modal*/} 

            {/* <div className="modal fade" id="exampleModal"  role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalCenterTitle">Registrate</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                    <div className="row">
                       <input type="text" className="form-control registry-btn mr-4 ml-4 mt-2 mb-2" placeholder="Nombre" id="registrarName"   name='name'  value={this.state.name} onChange={this.handleChange} /> 
                       <input type="email" className="form-control registry-btn mr-4  mr-4 ml-4 mt-2 mb-2"   placeholder="Correo" id="registrarEmail" name='registrarEmail' value={this.state.registrar} onChange={this.handleChange}/>
                       <input type="password" className="form-control registry-btn mr-4 mr-4 ml-4 mt-2 mb-2"  placeholder="Contraseña" id="registrarPassword" name='registrarPassword' value={this.state.registrarpwd} onChange={this.handleChange}/>            
                    </div>
                    <div className="modal-footer">
                     <button type="button" onClick={this.createUser} className="btn btn-dark" id="Registrar">Enviar</button>
                     <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>  
                    </div>
                 </div>
                </div>
                </div>*/}
              </div> 
                 
              );
          }
    }
    export default Login;