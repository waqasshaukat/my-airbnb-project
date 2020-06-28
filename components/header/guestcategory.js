import React from 'react'

class Guestcategory extends React.Component{
    state ={
     minDisable:false
    }
    static getDerivedStateFromProps(nextProps,prevState){
        if(nextProps.number<=0){
            return{
                minDisable:true
            }
        }
        return {
            minDisable:false
        }
    }
    render(){
        console.log('minDisable',this.state.minDisable)
        return (
            <div className='guestCategory'>
                <div style={{width:'40%'}}>
                    <h5>{this.props.ageGroup}</h5>
                    <p>{this.props.age}</p>
                </div>
                <div style={{display:'flex',justifyContent:'space-evenly',width:'40%',alignItems:'center'}}>
                    <div className='plusMinus' onClick={()=>this.props.onClick(this.props.name,'dec')}>-</div>
                    <div>{this.props.number}</div>
                    <div className='plusMinus' onClick={()=>this.props.onClick(this.props.name,'inc')}>+</div>
                </div>
            </div>
        )
    }
}

export default Guestcategory
