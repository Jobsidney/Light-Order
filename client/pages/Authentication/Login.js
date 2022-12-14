
import {useState,useEffect} from 'react'
import  Link from 'next/link'
import {useRouter} from 'next/router'
function Login() {

const [formData,setData] = useState({})
const[data,setUser]=useState('');
const [action,setAction] = useState(true);


useEffect(()=>{
  fetch('')
  .then(res=>res.json())
  .then(data=>setUser(data))
},[])

function handleChange(event) {
  const name=event.target.name;
  const value=event.target.value;
  setData({
    ...formData,
    [name]: value,
  })

}
function handleAction(){
  setAction(!action)
}
function handleDeleteClick({id}) {

}

function handleSubmit(event){
    const item=data.find(item=>item.email===formData.email)
    if (item && item.password===formData.password){
      if(action){
        alert('Login Successfull !...')
        event.target.reset()
        navigate('/menu')
      }
      else{
        fetch(`http://localhost:9292/users/${item.id}`, {
          method: "DELETE",
        })
      alert(`User Account Deleted succesfully`)
      event.target.reset()
      // navigate('/')
      }
    }else{
      event.preventDefault();
      alert('Login Failure! Wrong email or password!')
    };
}

  return (
    <div>
       
        <form id='log' onSubmit={handleSubmit}>
        
        <h2 className="heading">Light Order</h2>
        
            <input type="email" name="email" id="username-field" className="login-button" placeholder="Email" onChange={handleChange} required></input>
            <input type="password" name="password" id="password-field" className="login-button" placeholder="Password" onChange={handleChange} required></input>
        
        <button type='submit' classNameName='log' id='logIn'>{action?'Login' :'Delete'}</button>

        <h3 id="password"><a href ="##">forgot password?</a></h3>
        <div className="horizontal">
            <div className="hor"><hr/>
            </div>
            <h3>OR</h3>
            <div className="hor"><hr/>
            </div>
        </div>
        <h3 id="account">Don't have an account? <Link href="WholeSignUp" id="sign">Sign up</Link></h3>
        <h3 id="account">Do you want to {action ?'Delete':'Login'} Account? <span onClick={handleAction}>
        <Link href="WholeLogin" id="sign"  >{action?'Delete':'Login'}</Link></span></h3>
      </form>
    </div>
  )
}

export default Login
