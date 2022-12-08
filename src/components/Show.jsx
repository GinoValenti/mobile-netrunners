import { View, Text,Image, StyleSheet,Dimensions } from 'react-native'

import { useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react'
import NewComment from './NewComment'
import { useSelector } from 'react-redux';
import commentAction from '../redux/actions/commentAction'
export default function Show(props) {
    let { getAllComments ,deleteAction, editComment} = commentAction;
    let{name,idShow,image}=props
    let { comments} = useSelector(store => store.comments)
    const dispatch = useDispatch()
  async function getHotels(){

     await dispatch(getAllComments(idShow))

   }
   useEffect(()=>{
    
    getHotels()
  },[])
 

  return (
    <>
    <View>
        <Text style={styles.texto}>Shows in this hotel</Text>
    
       <Image
                    style={styles.tinyLogo}
                    source={{
                      uri: image,
                    }}
      />
      <NewComment  idShow={idShow}></NewComment>
    </View>
    {comments === undefined ? <Text style={styles.texto}>?</Text>:
    comments.map((x)=>{
return(

      <View style={styles.commentContainer}>
        <Text style={styles.Comment}>
            {x?.comment}
        </Text>
        <Image style={styles.user} source={{uri:x?.photo}}></Image>
      </View>
)
    })}  
      
      
       </>
  )
}
const deviceWidth = Math.round(Dimensions.get('window').width)

const styles = StyleSheet.create({

  tinyLogo: {
    width: deviceWidth ,
    height: 200,
  }, text:{
    color: "black",
    fontSize: 12,
    lineHeight: 84,

    textAlign: "center",
  },texto:{
    color: "black",
    fontSize: 32,
    lineHeight: 84,
    textAlign: "center",
  },commentContainer:{

        borderColor: 'grey',
    borderBottomWidth:1,
        height:150,
        marginBottom:10
      
  },Comment:{
    textAlign:"center",
    marginTop:10
  },user:{
    width:100,
    height:100
    ,borderRadius: 180,
    borderColor: 'gold',
    borderWidth: 5,
   
  }
  
})