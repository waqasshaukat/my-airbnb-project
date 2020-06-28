import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import Guestcategory from './guestcategory'

class Searchbar extends Component {
     state = {
         location:null,
         checkIn:null,
         checkOut:'',
         guests:{adults:0,children:0,infants:0},
         popupStyle: {display:'none'}         
     }
    saveCheckInDate=(d,e)=>{  
        console.log(d)
            this.setState({checkIn:d},()=>{console.log('checkin',this.state.checkIn)})
    }
    saveCheckOutDate=(d,e)=>{
        this.setState({checkOut:d},()=>{console.log('checkin',this.state.checkIn)})
    }
     
    handleChange=(e)=>{
        const [id,value] = e.target;
        this.setState({[id]:value})
    }
    handleSubmit=(e)=>{
            e.preventDefault();
        console.log(this.state)
    }
    showPopup=()=>{
        const popupStyle = {display:'flex'}
        this.setState(()=>({popupStyle:popupStyle}));
    }
    hidePopup=()=>{
        const popupStyle = {display:'none'}
        this.setState(()=>({popupStyle:popupStyle}))
    }
    handleClick=(name,type)=>{
        console.log(name,type);
        if(type==='inc'){
            if(this.state.guests[name]!='adults' && this.state.guests.adults==0){
                this.setState((prevState)=>({
                    guests:{
                        ...prevState.guests,
                        adults: prevState.guests.adults+1
                    }
                }))
            }
            this.setState(prevState=>({
                guests: {
                    ...prevState.guests,
                    [name]: prevState.guests[name]+1
                }   
            }
            ))
        }else{
            this.setState(prevState=>{
                if(prevState.guests[name]==0){
                    return;     
                }
                else if(name==='adults' && prevState.guests.adults==1 && (prevState.guests.children||prevState.guests.infants)){
                    return;
                }else{
                    return ({
                                guests: {
                                    ...prevState.guests,
                                    [name]: prevState.guests[name]-1
                                }   
                            })    
                }
            })
        }
    }
    render() {
        return (
                <div className='container z-depth-1' id='searchbar'>
                <div className='row'>
                <form onSubmit={this.handleSubmit}>
                    <div className='col s12 m4 searchbarCol'>
                                <h6>LOCATION</h6>
                                <input type='text' placeholder='Where are you going?'/>
                    </div>
                    <div className='col s12 m2 searchbarCol'>
                            <h6>CHECK IN</h6>
                            <DatePicker 
                                        selected={this.state.checkIn}
                                        onChange={this.saveCheckInDate}
                                        minDate={new Date()} 
                                        placeholderText='Add date' 
                                        value={this.state.checkIn}
                            />
                    </div>
                    <div className='col s12 m2 searchbarCol'>
                            <h6>CHECK OUT</h6>
                            <DatePicker 
                                        selected={this.state.checkOut} 
                                        onChange={this.saveCheckOutDate} 
                                        minDate={this.state.checkIn} 
                                        placeholderText='Add date' 
                                        value={this.state.checkOut}
                            />
                    </div>
                    <div className='col s12 m2 searchbarCol' style={{position:'relative'}} onClick={this.showPopup}>
                        <h6>GUESTS</h6>
                        <p className='grey-text' >{this.state.guests.adults?this.state.guests.adults+this.state.guests.children+'guests':'Add guests'}</p>
                            <div style={this.state.popupStyle} 
                                className='noOfGuestForm' 
                                onMouseLeave={this.hidePopup}
                            >
                                <Guestcategory 
                                    ageGroup='Adults' 
                                    name='adults' 
                                    age='Ages 13 or above' 
                                    number={this.state.guests.adults} 
                                    onClick={this.handleClick}
                                />
                                <Guestcategory 
                                    ageGroup='Children' 
                                    name='children' 
                                    age='Ages 2-12' 
                                    number={this.state.guests.children} 
                                    onClick={this.handleClick}
                                />
                                <Guestcategory 
                                    ageGroup='Infants' 
                                    name='infants'
                                    age='Under 2' 
                                    number={this.state.guests.infants} 
                                    onClick={this.handleClick}
                                />
                            </div>
                    </div>
                    <div className='col s2 m2'>
                        <div className='input-field valign-wrapper'>
                            <button className='btn pink center'><i className='material-icons'>search</i>Search</button>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        )
    }
}

export default Searchbar
