import "./Profile.css"
import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'
import { Button, withStyles, Card, makeStyles } from "@material-ui/core"
import { useNavigate } from "react-router"
import SimpleModal from "./Popup"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import apiClient from "../../services/apiClient"


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'block',
        width: '15vw',
        height: 'fit-content',
        border:'2px solid',
        borderRadius: 0,
        borderColor:'#2EC4B6',
     
    },


  }));

export default function Profile({user, logoutUser, donateNumber, recycleNumber, fetchDonations, fetchRecycles, ProfileApp, points, pointsData}) {
  // console.log(String.fromCodePoint(...user.upload_pic))
    

    useEffect(() => {
        ProfileApp()
        fetchDonations()
        fetchRecycles()
        pointsData()
        

        
    }, [])

    const classes= useStyles()

    const navigate = useNavigate()
   

    const handleOnLogout = async ()=>{
        await logoutUser()
        navigate("/")
    }
    const handleOnClick =  () =>{
        navigate("/profile/settings")
    }
    const goToDonations = ()=>{
        navigate("/profile/donations")
    }
    const goToRecycled = ()=>{
        navigate("/profile/recycles")
    }

    return (
        <div className= "profile">
            <div className="info">
                <div className="avatar">
                {/* <Avatar src={user.upload_pic} style={{ height: '140px', width: '140px' }}></Avatar> */}
                    {user.profile_pic?(
                        <Avatar src={user.profile_pic} style={{ height: '140px', width: '140px' }}></Avatar>
                        ):(
                    <Avatar style={{ height: '140px', width: '140px' }} src="/broken-image.jpg"></Avatar>)
                        }
                </div>
               
                <div className="user-info">
                   
                <h2 className="text"> <div className="settings"> Username: <br/> <div className="lighter">{user.username}</div></div>
                <div className="settings">Email:<br/> <div className="lighter">{user.email}</div></div>
                Zip Code:<br/> <div className="lighter">{user.zip_code}</div>
                </h2>
                        {!user.profile_pic?(<div >
                            <div className="settings">
                            <Button  variant="outlined" onClick={handleOnClick}>Settings</Button>
                            </div>
                            <div className="settings">
                            <SimpleModal /> </div>
                            <div className="settings">
                            <Button  variant="outlined" onClick={handleOnLogout}>Log Out</Button></div></div>
                        ) :(<><div className="settings"><Button  variant="outlined" onClick={handleOnClick}>Settings</Button></div>
                       
                       <div className="settings"><Button  variant="outlined" onClick={handleOnLogout}>Log Out</Button></div></>)}
                </div>
            </div>
           <div className="user">
            <div className="welcome">
                <h1 className="welcome">Welcome, {user.first_name}!</h1>
            </div>
                <div className="products">
                <div className="donations">
                    <div className="points">
                  <h2 className="text"><Link to="/points">Points:<br/> {points} </Link></h2>
                </div>
                    <Card className={classes.root} padding="10%">
                        <h2 className="text">{donateNumber}</h2>
                    <h2 className="text">Products Donated!</h2>
                    <div className="btns">
                    <Button className="btn" variant="outlined" onClick={goToDonations}>View Products</Button>
                    </div>
                    </Card>
                </div>
                <div className="recycled">
                <div className="free-products">
                    <h2 className="text"><Link to="/points"> Free Products: <br/>{ Math.floor((points) /20) } </Link></h2>
                </div>
                    <Card className={classes.root} borderColor="#2EC4B6" padding="10%">
                    <h2 className="text">{recycleNumber}</h2>
                    <h2 className="text" >Products Recycled!</h2>
                    <div className="btns">
                    <Button className="btn" variant="outlined" onClick={goToRecycled}>View Products</Button>
                    </div>       
                    </Card>
                </div>
                </div>
            </div>
            </div>
    )
}