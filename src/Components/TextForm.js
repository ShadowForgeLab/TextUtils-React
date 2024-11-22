import React,{useState} from 'react'

export default function TextForm(props){
    const [text , setText]=useState('Enter Text Here')
    

    const handleUpperCase=()=>{
        setText(text.toUpperCase())
        props.showAlert("Converted to UpperCase","success")
    }
    const handleOnchange=(event)=>{
        
        setText(event.target.value);
    }
    const handleLowerCase=()=>{
        setText(text.toLowerCase( ))
        props.showAlert("Converted to LowerCase","success")
    }
    const handleClear=()=>{
        setText('');
        props.showAlert("Text Cleared","success");
    }
    const handleExtraSpaces=()=>{
        let newText=text.split(/\s+/).join(' ')
        setText(newText)
        props.showAlert("Extra Spaces Removed","success")

    }

    return(
        <>
        
        <div className={`container p-3 my-2 text-${props.mode==='light'?'dark':'light'}`} >
        <div className="mb-3">
        <h1 className="my-3">{props.heading}</h1>
        <textarea className={`form-control text-${props.mode==='light'?'dark':'light'} `} id="exampleFormControlTextarea1" style={{backgroundColor:props.mode==='dark'?'grey':'white '} } value={text} onChange={handleOnchange} rows="10"></textarea>
</div> 
        <button className='btn btn-primary mx-1' onClick={handleUpperCase}>Convert to UpperCase</button>
        <button className='btn btn-primary mx-1' onClick={handleLowerCase}>Convert to LowerCase</button>
        <button className='btn btn-primary mx-1' onClick={handleClear}>Clear Text</button>
        <button className='btn btn-primary mx-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        
        </div>
        <div className={`container my-3" text-${props.mode==='light'?'dark':'light'}`}>
            <h3>Your Text Summary</h3>
            <p>Your text have {text.split(/\s+/).filter(word => word.trim()!=="").length} words and {text.split('').filter(char=>char!==' ').length} characters</p>
            <p>{0.008 * text.split(/\s+/).filter(word => word.trim()!=="").length} minutes to read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter your text to preview it here"}</p>
        </div>
       
        </>
    );
}
