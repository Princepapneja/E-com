import Theme from "./theme";
import DashboardTheme from "./dashboardTheme";
import AccountTheme from "./accountTheme";
const Layout = (Component,layoutName) => (props)=>{
    if(layoutName === "dashboard"){
        return (<DashboardTheme pageContent={<Component {...props}/>}/> )
    }
    else if(layoutName === "account"){
        return (<AccountTheme pageContent={<Component {...props}/>}/> )
    }
    else{
        return(<Theme pageContent={<Component {...props}/>}/> )
    }
}
export default Layout;