

const iconFind='./img/globe-svgrepo-com.svg';
const iconReset='./img/research-svgrepo-com.svg';
const iconTime='./img/clock-svgrepo-com.svg'
// const counter=1
const Button=({children,iconSrc,...restProps})=>{
    return (
        <button {...restProps} className={'button'}>
            {iconSrc && <img className={'button__icon'} src={iconSrc} alt={children}/>}
            {/*{iconSrc !==undefined && <img className={'button__icon'} src={iconSrc} alt={children}/>}*/}
            {children && <span className={'button__text'}>{children}</span>}
        </button>
    )
}

const useCounterExceeded=(counter,limit,cb)=>{
    React.useEffect(()=>{
        if(counter>=limit){
            cb()
        }
    },[cb,limit,counter])

}
const finishLog=()=>{ return console.log('app is finish')}
const finish=10
const Counter=()=>{
    const [counter, setCounter] = React.useState(0);
    console.log('app is render')
        
    useCounterExceeded(counter,finish,finishLog)
        React.useEffect(()=>{
            console.log('useEffect 2 work will mount')
        },[])
    return (<div className={'counter'}>
            <Button disabled={counter >= 10} onClick={() => setCounter(counter + 1)} tabIndex={2}
                    iconSrc={iconFind}
                    style={counter>=10?{background:'transparent'}:{background:'rgba(8, 178, 244, 0.2)'}}
            >{'increment'}</Button>
            &nbsp;
            <Button disabled={counter === 0}  style = {counter===0?{background:'transparent'}:{background:'rgba(8, 178, 244, 0.2)'}} onClick={() => setCounter(0)}
                    tabIndex={1} iconSrc={iconReset}>{'Reset'}</Button>
            &nbsp;
            <span  style={counter>=10?{background:'transparent'}:{background:'rgba(8, 178, 244, 0.2)'}} className={'counter__info'}>{counter}</span>
            <Button style={{marginLeft: '180px', background: 'transparent'}} tabIndex={1} iconSrc={iconTime}></Button>

        </div>
    )
}

ReactDOM.render(
<Counter></Counter>,document.getElementById('root')
)




// function render() {
//     ReactDOM.render(
//         <div className={'counter'}>
//             <Button onClick={()=>{
//                 counter+=1;
//                 render()
//             }} tabIndex={2}  iconSrc={iconFind}>{'increment'}</Button>
//             &nbsp;
//             <Button tabIndex={1} iconSrc={iconReset} >{'Reset'}</Button>
//             &nbsp;
//             <span className={'counter__info'}>{counter}</span>
//             <Button style={{marginLeft:'180px',background:'transparent'}} tabIndex={1} iconSrc={iconTime}></Button>
//
//         </div>,document.getElementById('root')
//     )
// }
// render()