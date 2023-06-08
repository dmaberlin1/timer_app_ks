// const button=React.createElement('button',{
//     type:'button',
//     disabled:true,
//     tabIndex:0
// },'increment')

// const Count=React.createElement('div')
// Count.innerHTML=`
// <h2>counter</h2>
// ${button}
// `
// const buttonType='button'
// const isDisabled=false
// const buttonContent='Increment'
// const Button=<button type={buttonType} disabled={isDisabled} tabIndex={0}>{buttonContent}</button>

// ReactDOM.render(button,document.getElementById('root'))

let counter=0;
const iconFind='./img/globe-svgrepo-com.svg';
const iconReset='./img/research-svgrepo-com.svg';
const Button=({children='click me',iconSrc,...restProps})=>{
    return (
        <button {...restProps} className={'button'}>
            {iconSrc && <img className={'button__icon'} src={iconSrc} alt={children}/>}
            {iconSrc !==undefined && <img className={'button__icon'} src={iconSrc} alt={children}/>}
            <span className={'button__text'}>{children}</span>
        </button>
    )
}
ReactDOM.render(
    <div className={'counter'}>
        <Button tabIndex={2}  iconSrc={iconFind}>{'increment'}</Button>
        &nbsp;
         <Button tabIndex={1} iconSrc={iconReset} >{'Reset'}</Button>
        &nbsp;
        <span className={'counter__info'}>{counter}</span>
        <Button tabIndex={1}  >{'fake'}</Button>
        <Button tabIndex={1}  ></Button>

    </div>,document.getElementById('root')
)