import React, { useState ,useEffect} from 'react'
import {Card,Alert,CircularProgress,CardActions,Button,CardContent,CardMedia,Typography,TextField} from '@mui/material'
import bg from '../../pics/addpostbg.jpg'
import { useNavigate } from "react-router-dom";

const EditPost = () => {
    
    let navigate = useNavigate();
    let error  , editposttoken
    editposttoken = window.localStorage.getItem('editposttoken')

    const [newContent,setNewContent] = useState('')
    const [newTitle,setNewTitle] = useState('')
    const [newUrl,setNewUrl] = useState('')
    const [errorMessage,setErrorMessage] = useState('')
    const [isLoading,setIsLoading] = useState(false)

    const [previousTitle , setPreviousTitle] = useState('')
    const [previousContent,setPreviousContent] = useState('')
    const [previousImageUrl, setPreviousImageUrl] = useState('')


    const previousPostHandler = () => {
        fetch("https://api-nikhilsingh7.herokuapp.com/getPostbyId",{
            method : "POST",
            headers: {
                "Content-Type" : "application/json"
            },body:JSON.stringify({
                "postId" : editposttoken,
            })
        })
        .then(res => res.json())
        .then(data => {
            setPreviousTitle(data.posts.title)
            setPreviousContent(data.posts.content)
            setPreviousImageUrl(data.posts.imageUrl)
        })
    }

    let post = {
        title : previousTitle,
        content : previousContent,
        url : previousImageUrl
    }


    const editPostHandler = () => {
        setIsLoading(true)
        
        if(newTitle !== previousTitle){
            post.title = newTitle
        }

        if(newTitle === '') {
            post.title = previousTitle
        }

        if(newTitle === previousTitle) {
            post.title = previousTitle
            
        }

        if(newContent !== previousContent){
            post.content = newContent
        }

        if(newContent === '') {
            post.content = previousContent
        }

        if(newContent === previousContent) {
            post.content = previousContent
            
        }

        if(newUrl !== previousImageUrl){
            post.url = newUrl
        }

        if(newUrl === '') {
            post.url = previousImageUrl
        }

        if(newUrl === previousImageUrl) {
            post.url = previousImageUrl
        }

        fetch("https://api-nikhilsingh7.herokuapp.com/editpost",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json" 
            },
            body: JSON.stringify({
                "postId" : editposttoken,
                "title" : post.title,
                "content" : post.content,
                "imageUrl" : post.url
            })
            }).then(res => res.json())
            .then(data => {
                setIsLoading(false)
                error = data.error
                setErrorMessage(error)

                if(error) {
                    return
                }

                navigate('/blog')
        })
       

    }

    const cancelButtonHandler = () => {
        navigate('/userPost')
    }

    useEffect(() => {
        previousPostHandler()
    }, [])


    return(
        <React.Fragment>
            <Card sx={{margin:4}}>
                <CardMedia component="img" height="400" image={bg} alt="bg image"/>

                <div style={{display:'flex',flexDirection:'row',justifyContent:'center',padding:10}}>
                        {errorMessage ?  <Alert severity="error">{errorMessage}</Alert>: null}
                        {isLoading ? <CircularProgress /> : null}
                </div>

               

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center'}}>Make Changes to Your Post</Typography>
                    <div style={{display:'flex',flexDirection:'column',width:'80%',marginLeft:'10%'}}>
                        <br/> 
                        <TextField id="filled-basic" label="Title For Your Post" variant="filled" value={newTitle} onChange={(e) => setNewTitle(e.target.value)}/> <br/>
                        <TextField id="filled-basic" label="Content" variant="filled"  multiline value={newContent} onChange={(e) => setNewContent(e.target.value)}/> <br/>
                        <TextField id="filled-basic" label="URL" variant="filled" value= {newUrl} onChange={(e) => setNewUrl(e.target.value)}  />
                    </div>
                    
                </CardContent>

                <CardActions>
                    <Button size="large" color="error" variant='outlined' onClick={() => {cancelButtonHandler()}}>Cancel</Button>
                    <Button size="large" color="primary" variant='contained' onClick={() => {editPostHandler()}}>Save Changes</Button>
                </CardActions>
            </Card>
            
        </React.Fragment>
    )
}

export default EditPost
