import MyButton from './component/MyButton.jsx'
import Var_fun from './component/Var_Fun.jsx'
import Count from './count/Count.jsx'
import Random from './count/Random.jsx'
function universe(){
  return <>
    <div className="universe">
      <Var_fun/>
      <Count/>
      <Random/>
      <Random/>
      <h1>Universe</h1>
      <form>
        name : <input type="text" name="name" placeholder="Enter your name" />
        <br/>
        email : <input type="email" name="email" placeholder="Enter your email" />
        <br/>
        password : <input type="password" name="password" placeholder="Enter your password" />
        <br/>
        <input type="submit" value="Submit" />  <MyButton />
      </form>
    
    </div>
  </>
}

export default universe;