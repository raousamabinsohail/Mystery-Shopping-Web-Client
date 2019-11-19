import React from "react"
import Login from "./Login"
import Background from "./"


class LoginMain extends React.Component{

    

render(){
    var sectionStyle = {
        width: "100%",
        height: "400px",
        backgroundImage: "url(" + { Background } + ")"
      };

return(
    <div>
        <section style={ sectionStyle }>
        </section>
        <table>
          <tr>
            <th>
          
            </th>
            <th><Login/></th>
            
          </tr>
        
  
         </table>

    </div>


    
)


}
}
export default LoginMain
 