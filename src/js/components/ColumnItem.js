/**
 * Created by wushengping on 2017/6/11.
 */
import React, {Component} from 'react';

export default class ColumnItem extends Component {
    constructor(props) {
        super(props)
        this.state={
            columnSource:[1,2,3,4,5,6,7,8]
        }
    }

    render() {
        return (<div style={{backgroundColor:'white',marginTop:'8px'}}>
                <div style={styles.itemBar}>
                    <span >专栏</span>
                    <span style={styles.itemBarSub}>查看全部</span>
                </div>
                {this.state.columnSource.map((item,idx)=><Item key={idx}/>)}
            </div>
        )
    }
}

class Item extends Component{
    render(){
        return (<div style={styles.item}>
                <img
                    style={styles.itemImg}
                    src={'https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract04.jpg'}></img>

            <div style={{display:'inline-block',marginLeft:'8px'}}>
                <span style={styles.itemTitle}>系类课程名称收复河山的客服哈说的方式可点击返回时看到发生的</span>
                <div style={styles.itemDes}>系类课程描述超出的长度验证效果， 希望多余的文字能够使用省略号显示</div>
                <div style={styles.itemOther}>
                     <span>课程其他信息</span>
                     <span style={{display:'inline-block',float:'right',color:'red'}}>¥100</span>
                </div>
            </div>

        </div>)
    }
}

const styles=({
    itemBar:{
        backgroundColor:'white',
        fontSize:'14px',
        color:'#333',
        padding:'8px 12px 4px 12px'
    },
    itemBarSub:{
        display:'inline-block',
        float:'right',
        fontSize:'12px',
        color:'#ccc'
    },


    item:{
        padding:'12px',
        display:'flex',
        borderBottom:'1px solid #f0f0f0'
    },
    itemImg:{
        width:'68px',
        height:'56px',
        borderRadius:'4px'
    },
    itemTitle:{
        fontSize:'12px',
        display:'inline-block',
        lineHeight:'16px'
    },
    itemDes:{
        fontSize:'10px',
        height:'16px',
        overflow:'hidden',
        textOverflow:'ellipsis',
        margin:'0px 0 4px 0'
    },
    itemOther:{
        fontSize:'10px'
    }

})